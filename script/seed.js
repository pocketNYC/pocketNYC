"use strict";

const {
  db,
  models: { User, Resources },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({ username: "cody", password: "123" }),
    User.create({ username: "murphy", password: "123" }),
  ]);

  //Creating Resources
  const resources = await Promise.all([
    Resources.create({
      name: "St.Mary's Hospital for Children",
      description: "Traumatic brain injury and coma recovery",
      address: "2601 216th Street, Bayside, NY",
      boro: "Queens",
      tag: "health",
      hyperlink: "https://www.stmaryskids.org/",
      latitude: "40.7765° N",
      longitude: "73.7687° W",
    }),
    Resources.create({
      name: "New York City Coalition Against Hunger",
      description:
        "The New York City Coalition Against Hunger (NYCCAH) represents and is the voice for the more than 1,100 nonprofit soup kitchens and food pantries in New York City and the 1.5 million low-income New Yorkers who live in households that can’t afford enough food.",
      address: "16 Beaver Street, New York, NY, 10004",
      boro: "Manhattan",
      tag: "food",
      hyperlink: "https://www.hungerfreeamerica.org/en-us/nyc/",
    }),
    Resources.create({
      name: "Bronx EOC",
      description:
        "Tuition Free Programs - The career path and life that you deserve are easier to obtain. Get the right training and preparation at no cost to you.",
      address: "1666 Bathgate Ave, Bronx, NY, 10457",
      boro: "Bronx",
      tag: "education",
      hyperlink: "http://www.bronxeoc.org/",
      latitude: "40.859583",
      longitude: "-73.89796",
    }),
    Resources.create({
      name: "Meals on Wheels of Staten Island Inc.",
      description:
        "Meals on Wheels of Staten Island, Inc. is a private not-for-profit agency whose mission is to provide two nutritious meals each day to those 60 years of age or older who can no longer shop for or prepare their own meals.",
      address: "304 PORT RICHMOND AVENUE, Staten Island, NY, 10302",
      boro: "Staten Island",
      tag: "seniors",
      hyperlink: "https://mealsonwheelsofstatenisland.com/",
      latitude: "40.6342243583",
      longitude: "-74.136274509",
    }),
    Resources.create({
      name: "SPANISH SPEAKING ELDERLY COUNCIL RAICES INC.",
      description:
        "RAICES was founded in 1978 by retired Hispanic older adults who saw the need for an organization which would provide services, educate and organize the Latino, minority and low-income aging community in the borough of Brooklyn.",
      address: "420 Baltic St, Brooklyn, NY 11217",
      boro: "Brooklyn",
      tag: "seniors",
      hyperlink: "https://www.raices.us/",
      latitude: "40.6827202248",
      longitude: "-73.9890473043",
    }),
    Resources.create({
      name: "ICD- International Center for the Disabled",
      description:
        "ICD is a not-for-profit workforce development organization based in New York City. Our mission is to help people transform their lives through career development and employment.",
      address: "123 William St #5, New York, NY 10038",
      boro: "Manhattan",
      tag: "employment",
      hyperlink: "https://www.icdnyc.org/about",
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
