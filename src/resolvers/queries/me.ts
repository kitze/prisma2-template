import { getUserId } from "graphql-user";
import { QueryType } from "./Query";

export default (t: QueryType) =>
  t.field("me", {
    type: "User",
    resolve: (parent, args, ctx) => {
      const userId = getUserId(ctx);
      return ctx.photon.users.findOne({
        where: {
          id: userId
        }
      });
    }
  });
