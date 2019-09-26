import { Mutation } from "./mutations/Mutation";
import { Query } from "./queries/Query";

//types
import { AuthPayload } from "./types/AuthPayload";
import { User } from "./types/User";

export const resolvers = {
  Query,
  User,
  Mutation,
  AuthPayload
};
