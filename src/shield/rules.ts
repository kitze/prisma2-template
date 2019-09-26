import { rule } from "graphql-shield";
import { getUserId } from "graphql-user";

export const isAuthenticatedUser = rule()(
  (parent, args, context) => !!getUserId(context)
);
