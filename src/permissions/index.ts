import { rule, shield } from "graphql-shield";
import { getUserId } from "graphql-user";

const rules = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    return !!getUserId(context);
  })
};

export const permissions = shield({
  Query: {
    me: rules.isAuthenticatedUser
  },
  Mutation: {}
});
