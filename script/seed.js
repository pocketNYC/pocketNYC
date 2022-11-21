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

  const health = await axios.get(
    "https://data.cityofnewyork.us/resource/ji82-xba5.json?$$app_token=LzDaPTC5Zu2IK2INj52pgYxOO&facgroup=HEALTH%20CARE&$limit=12"
  );

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
    "https://data.cityofnewyork.us/resource/ebkm-iyma.json?$$app_token=LzDaPTC5Zu2IK2INj52pgYxOO&$q=education&$limit=12"
  );

  const users = await Promise.all(userInfo.map((user) => User.create(user)));

  const resource = await Promise.all(
    resources.map((resource) => Resource.create(resource))
  );

    const event = await Promise.all(events.map((event) => Event.create(event)));


const healthImages=[
  'https://media.istockphoto.com/id/1152830331/vector/young-woman-and-man-sit-with-crossed-legs-and-meditate-with-brain-icon-on-the-background.jpg?s=612x612&w=0&k=20&c=zIW80mB1Mf_opP7soEwpvUeA3V3gkMQKC78icFdgDfo=',
  'https://webstockreview.net/images/nutrition-clipart-physical-wellness-1.png',
  'https://media.istockphoto.com/id/470476912/vector/beautiful-african-american-ethnic-woman-doctor-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=-k5kcegCPi2q-jmg-oJUE_BXtITBFQU2n2tTQBNPLvE=',
  'https://media.istockphoto.com/id/1216870085/vector/doctors-and-nurses-characters-in-medical-masks-standing-together-vector-illustration.jpg?s=612x612&w=0&k=20&c=q3AfPmIwhwi1ySyDHXqZaT5JsDWHKZmp5BHQDjCoboU=',
'  https://img.freepik.com/premium-vector/doctors-nurses-healthcare-workers-team_316839-602.jpg?w=2000']

  const healthFacilitiesSeed = await Promise.all(
    health.data.map((healthFacility) =>
    Resource.create({
      name: healthFacility.facname
      .split(" ")
      .map((word) => {
        if (
          word == "OP" ||
          word == "OMM" ||
          word == "OTP" ||
          word == "HH" ||
          word == "CM" ||
          word == "-"
          ) {
            return;
          }
          if (Number(word)) {
            return;
          }
          if (word == "AT" || word === "TO") {
            return word.toLowerCase();
          }
          if (word === "CO.") {
            return "County";
          }
          if (word == "HOSP.") {
            return "Hospital";
          }
          if (word === "NY") {
            return word;
          }
          if (word == "WELLLIFE") {
            return "WellLife";
          }
          return word[0] + word.slice(1).toLowerCase();
        })
        .join(" "),
        description: healthFacility.factype
        .split(" ")
        .map((word) => word[0] + word.slice(1).toLowerCase())
        .join(" "),
        imageUrl: healthImages[Math.floor(Math.random() * healthImages.length)],

        address: `${healthFacility.address
          .split(" ")
          .map((word) => {
            if (Number(word)) {
              return word;
            }
            return word[0] + word.slice(1).toLowerCase();
          })
          .join(" ")}, ${[
          healthFacility.boro[0] + healthFacility.boro.slice(1).toLowerCase(),
        ]}, NY ${healthFacility.zipcode}`,

        borough: [
          healthFacility.boro[0] + healthFacility.boro.slice(1).toLowerCase(),
        ],
        tag: ["health"],
        hyperlink:
          "https://data.cityofnewyork.us/City-Government/Facilities-Database/ji82-xba5/data",
        latitude: healthFacility.latitude,
        longitude: healthFacility.longitude,
      })
    )
  );

  const employmentImages = [
    "https://www.urban.org/sites/default/files/2022-03/jobs-feature-header-1700x700_0.png",
    "https://redlakejobs.ca/wp-content/uploads/2020/10/employment.jpg",
'https://miro.medium.com/max/1005/1*s5EQ45D3MBcRgOUPiArhPg.jpeg',
    "https://www.insperity.com/wp-content/uploads/Havent_worked_in_years_1200x630.png",
    "https://global-uploads.webflow.com/62d84b3d3ba446b2ec041a19/62d84b3d3ba446095c0442eb_AdobeStock_350245024ed.jpeg",
    "https://nhglobalpartners.com/wp-content/uploads/2020/08/global-employment.jpg",
    "https://news.cgtn.com/news/2020-10-10/China-to-boost-employment-with-multi-pronged-measures-Ut5aNsEZAQ/img/21c47235c71c4476ae4454011829e9de/21c47235c71c4476ae4454011829e9de.jpeg",
  ];

  const employmentFacilitySeed = await Promise.all(
    employment.data.map((employmentFacility) =>
      Resource.create({
        name: employmentFacility.facname
          .split(" ")
          .map((word) => {
            if (word == "IN") {
              return;
            }
            if (word === "AND" || word == "OF") {
              return word.toLowerCase();
            }
            if (word === "NY") {
              return word;
            }
            return word[0] + word.slice(1).toLowerCase();
          })
          .join(" "),
        description: employmentFacility.facsubgrp
          .split(" ")
          .map((word) => word[0] + word.slice(1).toLowerCase())
          .join(" "),
        imageUrl: employmentImages[Math.floor(Math.random() * employmentImages.length)],
        address: `${employmentFacility.address
          .split(" ")
          .map((word) => {
            if (Number(word)) {
              return word;
            }
            return word[0] + word.slice(1).toLowerCase();
          })
          .join(" ")}, ${[
          employmentFacility.boro[0] +
            employmentFacility.boro.slice(1).toLowerCase(),
        ]}, NY ${employmentFacility.zipcode}`,
        borough: [
          employmentFacility.boro[0] +
            employmentFacility.boro.slice(1).toLowerCase(),
        ],
        tag: ["employment"],
        hyperlink: "https://www.nyc.gov/site/sbs/careers/careers.page",
        latitude: employmentFacility.latitude,
        longitude: employmentFacility.longitude
      })
    )
  );

  const taxImages =[
    'https://www.pinclipart.com/picdir/big/105-1050340_sales-tax-connector-apps-tax-clipart.png',
    'https://www.pngitem.com/pimgs/m/161-1617330_tax-income-taxes-clipart-hd-png-download.png',
    'https://media.istockphoto.com/id/1187389767/vector/tax.jpg?s=612x612&w=0&k=20&c=vztAZMIBkjlD7u5r93uJODl-S-A-3c25lSDApIV01_M=',
    'https://www.sableinternational.com/images/default-source/blog/woman-investigating-tax-matters.png?sfvrsn',
  ]

  const taxFacilitySeed = await Promise.all(
    tax.data.map((taxFacility) =>
      Resource.create({
        name: taxFacility.sitename == taxFacility.borough ? `${taxFacility.providername} of ${taxFacility.borough}` : taxFacility.sitename,
         description: taxFacility.incomelimit,
        imageUrl:taxImages[Math.floor(Math.random() * taxImages.length)],
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


  const financeCtrImages = [
    'https://media.istockphoto.com/id/1221442174/vector/young-family-investing-money-for-future-flat-vector-illustration.jpg?s=612x612&w=0&k=20&c=9Df5qxtDm2NBqXOTGcc5b4k2HJMPqURT6sksLAWiNXY=',
    "https://us.123rf.com/450wm/blocberry/blocberry1705/blocberry170500006/blocberry170500006.jpg?ver=6",
    "https://treasurer.sc.gov/media/81532/financial-empowerment.jpg?anchor=center&mode=crop&width=670&upscale=false&rnd=132066232320000000",
    'https://media.istockphoto.com/id/1278695302/vector/accounting-financial-banking-data-tiny-accountant-characters-around-of-huge-clip-board.jpg?s=612x612&w=0&k=20&c=iVp2oxJuhCi4f7YXjrK-WWzZ7vVVLhFODSP6i-V5pIY=',
  ]
  const financeCtrSeed = await Promise.all(financialEmpowermentCtr.data.map(financeCtr => Resource.create({
    name:financeCtr.host_organization === 'Neighborhood Trust Financial Partners' ? `Neighborhood Trust Financial Partners of ${financeCtr.borough}`: financeCtr.host_organization,
    description:'NYC Financial Empowerment Centers provide FREE one-on-one professional financial counseling and coaching to support you in reaching your goals. Financial counseling is free and confidential, regardless of income or immigration status.',
    address:`${financeCtr.building} ${financeCtr.street}, ${financeCtr.borough}, NY ${financeCtr.zip_code}`,
    borough:[financeCtr.borough],
    imageUrl: financeCtrImages[Math.floor(Math.random() * financeCtrImages.length)],
    tag:['finance'] ,
    hyperlink:'https://www.nyc.gov/site/dca/consumers/get-free-financial-counseling.page#:~:text=Empowerment%20Center%20Brochure-,NYC%20Financial%20Empowerment%20Centers%20provide%20FREE%20one%2Don%2Done%20professional,Center%20brochure%20in%2011%20languages.',
    latitude: financeCtr.latitude,
    longitude:financeCtr.longitude ,
  }) ))


  const educationImages = [
    'https://assets.edvoy.com/~article-banner-large/live/images/articles/9-extracurricular-activities-to-do-at-university-that-can-give-your-cv-a-boost.png',
    'https://www.careeraddict.com/uploads/article/58364/illustration-college-campus-students.jpg',
    'https://thecollegesolution.com/wp-content/uploads/2018/08/shutterstock_2412716621-1024x418-1024x360-1.jpg',
    'https://leverageedu.com/blog/wp-content/uploads/2019/12/Co-Curricular-Activities-in-School.jpg',
  ]
  const educationSeed = await Promise.all(
    education.data
      //.filter((program) => program.longitude)
      .map((program) =>
        Resource.create({
          name: `${program.provider} at ${program.program_site_name}`,
          description: program.service_category,
          address: `${program.street_address}, ${
            program.city}, NY ${program.zipcode} `,
          borough: [program.borough],
          latitude: program.latitude,
          longitude: program.longitude,
          imageUrl:educationImages[Math.floor(Math.random() * educationImages.length)],
          tag: ["education"],
          hyperlink: "https://www.nyc.gov/site/dycd/services/after-school.page",
        })
      )
  );


  console.log(`seeded  ${event.length} events, ${users.length} users, ${educationSeed.length + healthFacilitiesSeed.length +financeCtrSeed.length + taxFacilitySeed.length + resource.length + employmentFacilitySeed.length } facilities`);
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