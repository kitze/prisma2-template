import { idArg, queryType, stringArg } from "nexus";
import { getUserId } from "graphql-user";
import { ObjectDefinitionBlock } from "nexus/dist/definitions/objectType";

//queries
import me from "./me";

export type QueryType = ObjectDefinitionBlock<"Query">;
export const Query = queryType({
  definition(t) {
    me(t);
  }
});
