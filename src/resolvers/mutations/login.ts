import { authPayload, comparePassword } from "graphql-user";
import { stringArg } from "nexus";
import { MutationType } from "./Mutation";

export default (t: MutationType) =>
  t.field("login", {
    type: "AuthPayload",
    args: {
      email: stringArg(),
      password: stringArg()
    },
    resolve: async (parent, { email, password }, context) => {
      const user = await context.photon.users.findOne({
        where: {
          email
        }
      });
      if (!user) {
        throw new Error(`No user found for email: ${email}`);
      }
      const passwordValid = await comparePassword(password, user.password);
      if (!passwordValid) {
        throw new Error("Invalid password");
      }
      return authPayload(user);
    }
  });
