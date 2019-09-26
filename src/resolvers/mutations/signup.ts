import { stringArg } from "nexus";
import { authPayload, getHashedPassword } from "graphql-user";
import { MutationType } from "./Mutation";

export default (t: MutationType) =>
  t.field("signup", {
    type: "AuthPayload",
    args: {
      name: stringArg({ nullable: true }),
      email: stringArg(),
      password: stringArg()
    },
    resolve: async (parent, { name, email, password }, { photon }) => {
      const hashedPassword = await getHashedPassword(password);
      const user = await photon.users.create({
        data: {
          name,
          email,
          password: hashedPassword
        }
      });
      return authPayload(user);
    }
  });
