"use strict";

const {
  db,
  models: { User, Resource, Event },
} = require("../server/db");
const axios = require("axios");

const { userInfo } = require("./userSeed");
const { resources } = require("./resourcesSeed");
const events = require("./eventsSeed");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  //TODO: delete the lines below
  const health = await axios.get(
    "https://data.cityofnewyork.us/resource/ji82-xba5.json?$$app_token=LzDaPTC5Zu2IK2INj52pgYxOO&facgroup=HEALTH%20CARE&$limit=12"
  );

  // const clinic = await axios.get('https://data.cityofnewyork.us/resource/72ss-25qh.json?$$app_token=LzDaPTC5Zu2IK2INj52pgYxOO&$q=NYC%20DOHMH%20STD%20Control')

  const employment = await axios.get(
    "https://data.cityofnewyork.us/resource/ji82-xba5.json?$$app_token=LzDaPTC5Zu2IK2INj52pgYxOO&$q=EMPLOYMENT&$limit=7"
  );

  const tax = await axios.get(
    "https://data.cityofnewyork.us/resource/5kqf-fg3n.json?$$app_token=LzDaPTC5Zu2IK2INj52pgYxOO&$q=TAX&$limit=12"
  );

  const financialEmpowermentCtr = await axios.get(
    "https://data.cityofnewyork.us/resource/dt2z-amuf.json?$$app_token=LzDaPTC5Zu2IK2INj52pgYxOO&$limit=10"
  );

  const education = await axios.get(
    "https://data.cityofnewyork.us/resource/mbd7-jfnc.json?$$app_token=LzDaPTC5Zu2IK2INj52pgYxOO&program_type=After-School%20Programs&$limit=12"
  );
  
  const users = await Promise.all(userInfo.map((user) => User.create(user)));
  
  const resource = await Promise.all(
    resources.map((resource) => Resource.create(resource))
    );
    const event = await Promise.all(events.map((event) => Event.create(event)));
    
    console.log(health);

  const healthTestSeed = await Promise.all(
    health.data.map((healthFacility) =>
      Resource.create({
        name: healthFacility.facname.split(' ').map(word => word[0] + word.slice(1).toLowerCase()).join(' '),
        description: healthFacility.factype.split(' ').map(word => word[0] + word.slice(1).toLowerCase()).join(' '),
        imageUrl: "https://i.imgur.com/Tfdznnx.png",

         address: `${healthFacility.address.split(" ").map(word => {
          if (Number(word)) {
            return word
          }
          return word[0] + word.slice(1).toLowerCase()
         }).join(' ')}, ${[healthFacility.boro[0] + healthFacility.boro.slice(1).toLowerCase()]}, NY ${healthFacility.zipcode}`,
        
         borough: [healthFacility.boro[0] + healthFacility.boro.slice(1).toLowerCase()],
         tag: ["health"],
        hyperlink:
          "https://data.cityofnewyork.us/City-Government/Facilities-Database/ji82-xba5/data",
         latitude: healthFacility.latitude,
         longitude: healthFacility.longitude,
      })
    )
  );
 


  console.log(
    `seeded ${users.length} users, ${event.length} events, and ${resource.length} resources... 
     and ${healthTestSeed.length} facilities`
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
