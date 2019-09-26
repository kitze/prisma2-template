require("dotenv").config();
import { Photon } from "@generated/photon";
import { GraphQLServer } from "graphql-yoga";
import { contextWithRequest } from "graphql-user";
import { permissions } from "./shield/permissions";
import { schema } from "./schema";
const photon = new Photon();

const server = new GraphQLServer({
  schema,
  middlewares: [permissions],
  context: contextWithRequest({
    photon
  })
});

server.start(() => console.log(`🚀 Server ready at: http://localhost:4000 `));
