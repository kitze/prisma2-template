import { Photon } from "@generated/photon";
const photon = new Photon();

async function main() {
  await photon.users.create({
    data: {
      email: "kristijan.mkd@gmail.com",
      name: "Kitze",
      password: "$2b$10$ZjONRZAxqX2pLoPax2xdcuzABTUEsFanQI6yBYCRtzpRiU4/X1uIu" // "graphql"
    }
  });
}

main().finally(async () => {
  await photon.disconnect();
});
