"use strict";

const {
  db,
  models: { User, Resource, Event },
} = require("../server/db");

const { userInfo } = require("./userSeed");
const { resources } = require("./resourcesSeed");
const events = require("./eventsSeed");

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  const users = await Promise.all(userInfo.map((user) => User.create(user)));
  const resource = await Promise.all(
    resources.map((resource) => Resource.create(resource))
  );
  const event = await Promise.all(events.map((event) => Event.create(event)));

  console.log(
    `seeded ${users.length} users, ${event.length} events, and ${resource.length} resources`
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
