"use strict";

const {
  db,
  models: { User, Resource, Event },
} = require("../server/db");
const axios = require("axios"); // TODO: delete this line

const { userInfo } = require("./userSeed");
const { resources } = require("./resourcesSeed");
const events = require("./eventsSeed");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  //TODO: delete the lines below
const health = await axios.get('https://data.cityofnewyork.us/resource/ji82-xba5.json?$$app_token=LzDaPTC5Zu2IK2INj52pgYxOO&facgroup=HEALTH%20CARE')

// console.log(health.data.map(facility => facility.boro), "<--TEST***")

  const users = await Promise.all(userInfo.map((user) => User.create(user)));

  const resource = await Promise.all(
    resources.map((resource) => Resource.create(resource))
  );
  const event = await Promise.all(events.map((event) => Event.create(event)));


const healthTestSeed = await Promise.all(
  health.data.
  // .filter()
  
  map(({address}) => Resource.create({address}))
)
//   health.data.map(({facname, opname, address, borough, latitude, longitude}) => Resource.create({name:facname, description: opname, address, borough, tag: "health", longitude, latitude}))
// );


  console.log(
    `seeded ${users.length} users, ${event.length} events, and ${resource.length} resources... and ${healthTestSeed.length} facilities`
  );
  console.log(`seeded successfully`);
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
