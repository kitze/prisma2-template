import { mutationType } from "nexus";
import { ObjectDefinitionBlock } from "nexus/dist/definitions/objectType";

//mutations
import signup from "./signup";
import login from "./login";

export type MutationType = ObjectDefinitionBlock<"Mutation">;

export const Mutation = mutationType({
  definition(t) {
    signup(t);
    login(t);
  }
});
