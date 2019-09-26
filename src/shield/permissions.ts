import { shield } from "graphql-shield";
import { isAuthenticatedUser } from "./rules";

export const permissions = shield({
  Query: {
    me: isAuthenticatedUser
  },
  Mutation: {}
});
