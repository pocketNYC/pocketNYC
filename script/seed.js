"use strict";

const {
  db,
  models: { User, Event },
} = require("../server/db");

const events = require("./eventsSeed");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const users = await Promise.all([
    User.create({ username: "cody", password: "123" }),
    User.create({ username: "murphy", password: "123" }),
  ]);

  const event = await Promise.all(
    events.map((event) => {
      return Event.create(event);
    })
  );

  console.log(`seeded ${users.length} users and ${event.length} events`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
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
