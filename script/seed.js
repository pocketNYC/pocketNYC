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

  // const health = await axios.get(
  //   "https://data.cityofnewyork.us/resource/ji82-xba5.json?$$app_token=LzDaPTC5Zu2IK2INj52pgYxOO&facgroup=HEALTH%20CARE&$limit=12"
  // );

  // const clinic = await axios.get('https://data.cityofnewyork.us/resource/72ss-25qh.json?$$app_token=LzDaPTC5Zu2IK2INj52pgYxOO&$q=NYC%20DOHMH%20STD%20Control')

  // const employment = await axios.get(
  //   "https://data.cityofnewyork.us/resource/ji82-xba5.json?$$app_token=LzDaPTC5Zu2IK2INj52pgYxOO&$q=EMPLOYMENT&$limit=7"
  // );

  const tax = await axios.get(
    "https://data.cityofnewyork.us/resource/5kqf-fg3n.json?$$app_token=LzDaPTC5Zu2IK2INj52pgYxOO&$q=TAX&$limit=12"
  );

  // const financialEmpowermentCtr = await axios.get(
  //   "https://data.cityofnewyork.us/resource/dt2z-amuf.json?$$app_token=LzDaPTC5Zu2IK2INj52pgYxOO&$limit=10"
  // );

  // const education = await axios.get(
  //   "https://data.cityofnewyork.us/resource/mbd7-jfnc.json?$$app_token=LzDaPTC5Zu2IK2INj52pgYxOO&program_type=After-School%20Programs&$limit=12"
  // );

  // const users = await Promise.all(userInfo.map((user) => User.create(user)));

  // const resource = await Promise.all(
  //   resources.map((resource) => Resource.create(resource))
  // );

  //   const event = await Promise.all(events.map((event) => Event.create(event)));

  // const healthFacilitiesSeed = await Promise.all(
  //   health.data.map((healthFacility) =>
  //   Resource.create({
  //     name: healthFacility.facname
  //     .split(" ")
  //     .map((word) => {
  //       if (
  //         word == "OP" ||
  //         word == "OMM" ||
  //         word == "OTP" ||
  //         word == "HH" ||
  //         word == "CM" ||
  //         word == "-"
  //         ) {
  //           return;
  //         }
  //         if (Number(word)) {
  //           return;
  //         }
  //         if (word == "AT" || word === "TO") {
  //           return word.toLowerCase();
  //         }
  //         if (word === "CO.") {
  //           return "County";
  //         }
  //         if (word == "HOSP.") {
  //           return "Hospital";
  //         }
  //         if (word === "NY") {
  //           return word;
  //         }
  //         if (word == "WELLLIFE") {
  //           return "WellLife";
  //         }
  //         return word[0] + word.slice(1).toLowerCase();
  //       })
  //       .join(" "),
  //       description: healthFacility.factype
  //       .split(" ")
  //       .map((word) => word[0] + word.slice(1).toLowerCase())
  //       .join(" "),
  //       imageUrl: "https://i.imgur.com/Tfdznnx.png",

  //       address: `${healthFacility.address
  //         .split(" ")
  //         .map((word) => {
  //           if (Number(word)) {
  //             return word;
  //           }
  //           return word[0] + word.slice(1).toLowerCase();
  //         })
  //         .join(" ")}, ${[
  //         healthFacility.boro[0] + healthFacility.boro.slice(1).toLowerCase(),
  //       ]}, NY ${healthFacility.zipcode}`,

  //       borough: [
  //         healthFacility.boro[0] + healthFacility.boro.slice(1).toLowerCase(),
  //       ],
  //       tag: ["health"],
  //       hyperlink:
  //         "https://data.cityofnewyork.us/City-Government/Facilities-Database/ji82-xba5/data",
  //       latitude: healthFacility.latitude,
  //       longitude: healthFacility.longitude,
  //     })
  //   )
  // );

  // const employmentImages = [
  //   "https://www.urban.org/sites/default/files/2022-03/jobs-feature-header-1700x700_0.png",
  //   "https://redlakejobs.ca/wp-content/uploads/2020/10/employment.jpg",
  //   "https://www.meaby.co.uk/wp-content/uploads/2016/07/Employment-Law.png",
  //   "https://www.insperity.com/wp-content/uploads/Havent_worked_in_years_1200x630.png",
  //   "https://global-uploads.webflow.com/62d84b3d3ba446b2ec041a19/62d84b3d3ba446095c0442eb_AdobeStock_350245024ed.jpeg",
  //   "https://nhglobalpartners.com/wp-content/uploads/2020/08/global-employment.jpg",
  // ];

  // const employmentFacilitySeed = await Promise.all(
  //   employment.data.map((employmentFacility) =>
  //     Resource.create({
  //       name: employmentFacility.facname
  //         .split(" ")
  //         .map((word) => {
  //           if (word == "IN") {
  //             return;
  //           }
  //           if (word === "AND" || word == "OF") {
  //             return word.toLowerCase();
  //           }
  //           if (word === "NY") {
  //             return word;
  //           }
  //           return word[0] + word.slice(1).toLowerCase();
  //         })
  //         .join(" "),
  //       description: employmentFacility.facsubgrp
  //         .split(" ")
  //         .map((word) => word[0] + word.slice(1).toLowerCase())
  //         .join(" "),
  //       imageUrl: employmentImages[Math.floor(Math.random() * employmentImages.length)],
  //       address: `${employmentFacility.address
  //         .split(" ")
  //         .map((word) => {
  //           if (Number(word)) {
  //             return word;
  //           }
  //           return word[0] + word.slice(1).toLowerCase();
  //         })
  //         .join(" ")}, ${[
  //         employmentFacility.boro[0] +
  //           employmentFacility.boro.slice(1).toLowerCase(),
  //       ]}, NY ${employmentFacility.zipcode}`,
  //       borough: [
  //         employmentFacility.boro[0] +
  //           employmentFacility.boro.slice(1).toLowerCase(),
  //       ],
  //       tag: ["employment"],
  //       hyperlink: "https://www.nyc.gov/site/sbs/careers/careers.page",
  //       latitude: employmentFacility.latitude,
  //       longitude: employmentFacility.longitude
  //     })
  //   )
  // );

  const taxFacilitySeed = await Promise.all(
    tax.data.map((taxFacility) =>
      Resource.create({
        name: taxFacility.sitename == taxFacility.borough ? `${taxFacility.providername} of ${taxFacility.borough}` : taxFacility.sitename,
         description: taxFacility.incomelimit,
        imageUrl:
          "https://www.incimages.com/uploaded_files/image/1920x1080/getty_470934239_86014.jpg",
        address: taxFacility.mappedaddress
          .split("")
          .filter((ele) => ele != '"')
          .join("")
          ,
         borough: [taxFacility.borough],
        tag: ["finance"],
        hyperlink: "https://www.tax.ny.gov/pit/efile/",
        latitude: taxFacility.latitude,
        longitude: taxFacility.longitude,
      })
    )
  );


  console.log(
    `seeded ${taxFacilitySeed.length} facilities`
  );
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
