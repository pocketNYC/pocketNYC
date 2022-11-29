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
    "https://data.cityofnewyork.us/resource/ji82-xba5.json?$$app_token=LzDaPTC5Zu2IK2INj52pgYxOO&facgroup=HEALTH%20CARE&$limit=12",
 
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

  const clothes = await axios.get(
    "https://data.cityofnewyork.us/resource/ji82-xba5.json?$$app_token=LzDaPTC5Zu2IK2INj52pgYxOO&$q=TEXTILE&$limit=18"
  );

  const senior = await axios.get(
    "https://data.cityofnewyork.us/resource/ji82-xba5.json?$$app_token=LzDaPTC5Zu2IK2INj52pgYxOO&$q=SENIOR&$limit=15"
  );

  const disability = await axios.get(
    "https://data.cityofnewyork.us/resource/ji82-xba5.json?$$app_token=LzDaPTC5Zu2IK2INj52pgYxOO&$q=DISABILITY&$limit=33"
  );

  const food = await axios.get(
    "https://data.cityofnewyork.us/resource/ji82-xba5.json?$$app_token=LzDaPTC5Zu2IK2INj52pgYxOO&$q=FOOD&$limit=30"
  );

  const cityService = await axios.get(
    "https://data.cityofnewyork.us/resource/ji82-xba5.json?$$app_token=LzDaPTC5Zu2IK2INj52pgYxOO&$q=COMMUNITY%20CENTER&$limit=40"
  );

  const users = await Promise.all(userInfo.map((user) => User.create(user)));

  const resource = await Promise.all(
    resources.map((resource) => Resource.create(resource))
  );

  const event = await Promise.all(events.map((event) => Event.create(event)));

  const healthImages = [
    "https://media.istockphoto.com/id/1152830331/vector/young-woman-and-man-sit-with-crossed-legs-and-meditate-with-brain-icon-on-the-background.jpg?s=612x612&w=0&k=20&c=zIW80mB1Mf_opP7soEwpvUeA3V3gkMQKC78icFdgDfo=",
    "https://webstockreview.net/images/nutrition-clipart-physical-wellness-1.png",
    "https://media.istockphoto.com/id/470476912/vector/beautiful-african-american-ethnic-woman-doctor-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=-k5kcegCPi2q-jmg-oJUE_BXtITBFQU2n2tTQBNPLvE=",
    "https://media.istockphoto.com/id/1216870085/vector/doctors-and-nurses-characters-in-medical-masks-standing-together-vector-illustration.jpg?s=612x612&w=0&k=20&c=q3AfPmIwhwi1ySyDHXqZaT5JsDWHKZmp5BHQDjCoboU=",
    "  https://img.freepik.com/premium-vector/doctors-nurses-healthcare-workers-team_316839-602.jpg?w=2000",
  ];
  console.log(health);
  console.log(typeof health.data);

  console.log("heathData", health);

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
            if (word == "PSYCHOSISI") {
              return "Psychosis";
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
    "https://miro.medium.com/max/1005/1*s5EQ45D3MBcRgOUPiArhPg.jpeg",
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
        imageUrl:
          employmentImages[Math.floor(Math.random() * employmentImages.length)],
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
        longitude: employmentFacility.longitude,
      })
    )
  );

  const taxImages = [
    "https://www.pinclipart.com/picdir/big/105-1050340_sales-tax-connector-apps-tax-clipart.png",
    "https://www.pngitem.com/pimgs/m/161-1617330_tax-income-taxes-clipart-hd-png-download.png",
    "https://media.istockphoto.com/id/1187389767/vector/tax.jpg?s=612x612&w=0&k=20&c=vztAZMIBkjlD7u5r93uJODl-S-A-3c25lSDApIV01_M=",
    "https://www.sableinternational.com/images/default-source/blog/woman-investigating-tax-matters.png?sfvrsn",
  ];

  const taxFacilitySeed = await Promise.all(
    tax.data.map((taxFacility) =>
      Resource.create({
        name:
          taxFacility.sitename == taxFacility.borough
            ? `${taxFacility.providername} of ${taxFacility.borough}`
            : taxFacility.sitename,
        description: taxFacility.incomelimit,
        imageUrl: taxImages[Math.floor(Math.random() * taxImages.length)],
        address: taxFacility.mappedaddress
          .split("")
          .filter((ele) => ele != '"')
          .join(""),
        borough: [taxFacility.borough],
        tag: ["finance"],
        hyperlink: "https://www.tax.ny.gov/pit/efile/",
        latitude: taxFacility.latitude,
        longitude: taxFacility.longitude,
      })
    )
  );

  const financeCtrImages = [
    "https://media.istockphoto.com/id/1221442174/vector/young-family-investing-money-for-future-flat-vector-illustration.jpg?s=612x612&w=0&k=20&c=9Df5qxtDm2NBqXOTGcc5b4k2HJMPqURT6sksLAWiNXY=",
    "https://us.123rf.com/450wm/blocberry/blocberry1705/blocberry170500006/blocberry170500006.jpg?ver=6",
    "https://treasurer.sc.gov/media/81532/financial-empowerment.jpg?anchor=center&mode=crop&width=670&upscale=false&rnd=132066232320000000",
    "https://media.istockphoto.com/id/1278695302/vector/accounting-financial-banking-data-tiny-accountant-characters-around-of-huge-clip-board.jpg?s=612x612&w=0&k=20&c=iVp2oxJuhCi4f7YXjrK-WWzZ7vVVLhFODSP6i-V5pIY=",
  ];
  const financeCtrSeed = await Promise.all(
    financialEmpowermentCtr.data.map((financeCtr) =>
      Resource.create({
        name:
          financeCtr.host_organization ===
          "Neighborhood Trust Financial Partners"
            ? `Neighborhood Trust Financial Partners of ${financeCtr.borough}`
            : financeCtr.host_organization,
        description:
          "NYC Financial Empowerment Centers provide FREE one-on-one professional financial counseling and coaching to support you in reaching your goals. Financial counseling is free and confidential, regardless of income or immigration status.",
        address: `${financeCtr.building} ${financeCtr.street}, ${financeCtr.borough}, NY ${financeCtr.zip_code}`,
        borough: [financeCtr.borough],
        imageUrl:
          financeCtrImages[Math.floor(Math.random() * financeCtrImages.length)],
        tag: ["finance"],
        hyperlink:
          "https://www.nyc.gov/site/dca/consumers/get-free-financial-counseling.page#:~:text=Empowerment%20Center%20Brochure-,NYC%20Financial%20Empowerment%20Centers%20provide%20FREE%20one%2Don%2Done%20professional,Center%20brochure%20in%2011%20languages.",
        latitude: financeCtr.latitude,
        longitude: financeCtr.longitude,
      })
    )
  );

  const educationImages = [
    "https://assets.edvoy.com/~article-banner-large/live/images/articles/9-extracurricular-activities-to-do-at-university-that-can-give-your-cv-a-boost.png",
    "https://www.careeraddict.com/uploads/article/58364/illustration-college-campus-students.jpg",
    "https://thecollegesolution.com/wp-content/uploads/2018/08/shutterstock_2412716621-1024x418-1024x360-1.jpg",
    "https://leverageedu.com/blog/wp-content/uploads/2019/12/Co-Curricular-Activities-in-School.jpg",
  ];
  const educationSeed = await Promise.all(
    education.data
      //.filter((program) => program.longitude)
      .map((program) =>
        Resource.create({
          name: `${program.provider} at ${program.program_site_name}`,
          description: program.service_category,
          address: `${program.street_address}, ${program.city}, NY ${program.zipcode} `,
          borough: [program.borough],
          latitude: program.latitude,
          longitude: program.longitude,
          imageUrl:
            educationImages[Math.floor(Math.random() * educationImages.length)],
          tag: ["education"],
          hyperlink: "https://www.nyc.gov/site/dycd/services/after-school.page",
        })
      )
  );

  const clothesImages = [
    "https://thumbs.dreamstime.com/b/colored-clothes-apparel-hanging-hangers-garment-rack-rail-isolated-white-background-clothing-organization-storage-inner-120845037.jpg",
    "https://media.istockphoto.com/id/1223169039/vector/clothing-donation-box.jpg?s=612x612&w=0&k=20&c=iSWltxvBXcq4snbrCNaG3BbiRpr8Rc-bYXmPglwX59M=",
    "https://t4.ftcdn.net/jpg/04/46/49/07/360_F_446490788_X2nf4OdVjq9casKZ83guVx0xq1uoNC5R.jpg",
    "https://t3.ftcdn.net/jpg/05/25/44/42/360_F_525444283_Uag1V1BQOkKlYNt0bwos7B1Lh8msD5zj.jpg",
    "https://img.freepik.com/free-vector/clothing-donation-concept-flat-hand-drawn_52683-55267.jpg?w=2000",
  ];

  const clothesFacilitiesSeed = await Promise.all(
    clothes.data.map((clothesFacility) =>
      Resource.create({
        name: clothesFacility.facname
          .split(" ")
          .map((word) => word[0] + word.slice(1).toLowerCase())
          .join(" "),
        description: clothesFacility.factype
          .split(" ")
          .map((word) => word[0] + word.slice(1).toLowerCase())
          .join(" "),
        imageUrl:
          clothesImages[Math.floor(Math.random() * clothesImages.length)],
        address: `${clothesFacility.address
          .split(" ")
          .map((word) => {
            if (Number(word)) {
              return word;
            }
            return word[0] + word.slice(1).toLowerCase();
          })
          .join(" ")}, ${[
          clothesFacility.boro[0] + clothesFacility.boro.slice(1).toLowerCase(),
        ]}, NY ${clothesFacility.zipcode}`,
        borough: [
          clothesFacility.boro[0] + clothesFacility.boro.slice(1).toLowerCase(),
        ],
        tag: ["clothes"],
        hyperlink:
          "https://data.cityofnewyork.us/City-Government/Facilities-Database/ji82-xba5/data",
        latitude: clothesFacility.latitude,
        longitude: clothesFacility.longitude,
      })
    )
  );
  const seniorImages = [
    "https://us.123rf.com/450wm/jeysent/jeysent1711/jeysent171100015/jeysent171100015.jpg?ver=6",
    "https://img.freepik.com/premium-vector/senior-people-couple-playing-chess-nursing-home_316839-3053.jpg",
    "https://img.freepik.com/free-vector/old-couple-bikes-park_74855-5905.jpg?w=2000",
    "https://us.123rf.com/450wm/tartila/tartila1807/tartila180700162/tartila180700162.jpg?ver=6",
  ];

  const seniorFacilitySeed = await Promise.all(
    senior.data
      .filter((seniorFacility) => seniorFacility.address)
      .map((seniorFacility) =>
        Resource.create({
          name: seniorFacility.facname
            .split(" ")
            .map((word) => {
              if (word == "Inc") {
                return word + ".";
              }
              return word[0] + word.slice(1).toLowerCase();
            })
            .join(" "),
          description: seniorFacility.facsubgrp
            .split(" ")
            .map((word) => word[0] + word.slice(1).toLowerCase())
            .join(" "),
          imageUrl:
            seniorImages[Math.floor(Math.random() * seniorImages.length)],
          address: `${seniorFacility.address
            .split(" ")
            .map((word) => {
              if (Number(word)) {
                return word;
              }
              return word[0] + word.slice(1).toLowerCase();
            })
            .join(" ")}, ${[
            seniorFacility.boro[0] + seniorFacility.boro.slice(1).toLowerCase(),
          ]}, NY ${seniorFacility.zipcode}`,
          borough: [
            seniorFacility.boro[0] + seniorFacility.boro.slice(1).toLowerCase(),
          ],
          tag: ["seniors"],
          hyperlink: "https://www.nyc.gov/site/dfta/index.page",
          latitude: seniorFacility.latitude,
          longitude: seniorFacility.longitude,
        })
      )
  );

  const disabilityServicesImages = [
    "https://media.istockphoto.com/id/1298415912/vector/group-diverse-of-people-with-disabilities-work-together-in-office-disabled-different-people.jpg?s=612x612&w=0&k=20&c=mUql1CSbWa4uE5HwKn_5gwMa3syPmgzMhVgt611h_ZM=",
    "https://media.istockphoto.com/id/1268410371/vector/disabled-people-help-and-diversity.jpg?s=612x612&w=0&k=20&c=7I-mbaXwfVtwXvwDlm6pl9EomlWBOZiip9Wb6MxvkK0=",
    "https://media.istockphoto.com/id/1248968658/vector/group-of-diverse-disabled-people-and-guide-dog.jpg?s=612x612&w=0&k=20&c=OFE_rrfOFxsPqpXm9nAcF4MIeCxXIge1b0YBI1ZeyZ0=",
    "https://media.istockphoto.com/vectors/blind-disabled-person-with-pooper-dog-flat-vector-stock-illustration-vector-id1342270118?b=1&k=20&m=1342270118&s=170667a&w=0&h=ort8-fBtmeR39mzXKJ9hncW1zpn8wbr70W8AhtCbY1M=",
    "https://techcrunch.com/wp-content/uploads/2020/07/getty-disabilities-group.jpg",
    "https://helios-i.mashable.com/imagery/articles/05VZhbtyqd2LoqSKVQmhmt1/hero-image.fill.size_1248x702.v1658499602.png",
  ];

  const disabilityServicesSeed = await Promise.all(
    disability.data
      .filter((disabilityServices) => disabilityServices.address)
      .map((disabilityServices) =>
        Resource.create({
          name: disabilityServices.facname
            .split(" ")
            .map((word) => word[0] + word.slice(1).toLowerCase())
            .join(" "),
          description: disabilityServices.factype
            .split(" ")
            .map((word) => word[0] + word.slice(1).toLowerCase())
            .join(" "),
          imageUrl:
            disabilityServicesImages[
              Math.floor(Math.random() * disabilityServicesImages.length)
            ],
          address: `${disabilityServices.address
            .split(" ")
            .map((word) => {
              if (Number(word)) {
                return word;
              }
              return word[0] + word.slice(1).toLowerCase();
            })
            .join(" ")}, ${[
            disabilityServices.boro[0] +
              disabilityServices.boro.slice(1).toLowerCase(),
          ]}, NY ${disabilityServices.zipcode}`,
          borough: [
            disabilityServices.boro[0] +
              disabilityServices.boro.slice(1).toLowerCase(),
          ],
          tag: ["disability services"],
          hyperlink: "https://www.nyc.gov/site/mopd/index.page",
          latitude: disabilityServices.latitude,
          longitude: disabilityServices.longitude,
        })
      )
  );

  const foodImages = [
    "https://media.istockphoto.com/id/1208586170/vector/food-donations-color-icon-charity-food-collection-box-with-meal-hearts-humanitarian.jpg?s=170667a&w=0&k=20&c=bv28ad8OTxowAY4WJaCngau_uajUHZbZg30DIKt59OY=",
    "https://media.istockphoto.com/id/1174097690/vector/homemade-food-fair-and-people-characters-cartoon.jpg?s=612x612&w=0&k=20&c=Znzr7Sykzhnn7Zk_NHzVzdysbwoEdTaZ_YTVaI15Wg0=",
    "https://media.istockphoto.com/id/1223169200/vector/food-and-grocery-donation.jpg?s=612x612&w=0&k=20&c=0fv8hwXeS9RCL-ewqkr2oyi0Nu8jAQxGtroS0XA9nsQ=",
    "https://media.istockphoto.com/id/1214244666/vector/street-food-market-flat-vector-illustration.jpg?s=612x612&w=0&k=20&c=G8ZKGeAJqACG0BkcyYSlgSsOn2R4NUGgDHineqbk_E0=",
    "https://media.istockphoto.com/id/1299977349/vector/charity-donation-box-with-food-humanitarian-support-vector-illustration-design.jpg?s=612x612&w=0&k=20&c=f34k_4gV46jC9KAwEIO5062mZ3ajckrbo8RkvLsfVt4=",
    "https://thumbs.dreamstime.com/b/food-clothes-donation-vector-flat-illustration-social-care-charity-concept-volunteer-collect-donations-people-boxes-145047407.jpg",
    "https://thumbs.dreamstime.com/b/group-volunteers-carry-hands-cardboard-boxes-donations-full-food-drinks-center-social-support-assistance-to-poor-198800199.jpg",
  ];

  const foodFacilitiesSeed = await Promise.all(
    food.data
      .filter((foodFacility) => foodFacility.address)
      .map((foodFacility) =>
        Resource.create({
          name: foodFacility.facname
            .split(" ")
            .map((word) => {
              if (word == "Bffy") {
                return "BFFY";
              }
              return word[0] + word.slice(1).toLowerCase();
            })
            .join(" "),
          description: foodFacility.factype
            .split(" ")
            .map((word) => word[0] + word.slice(1).toLowerCase())
            .join(" "),
          imageUrl: foodImages[Math.floor(Math.random() * foodImages.length)],
          address: `${foodFacility.address
            .split(" ")
            .map((word) => {
              if (Number(word)) {
                return word;
              }
              return word[0] + word.slice(1).toLowerCase();
            })
            .join(" ")}, ${[
            foodFacility.boro[0] + foodFacility.boro.slice(1).toLowerCase(),
          ]}, NY ${foodFacility.zipcode}`,
          borough: [
            foodFacility.boro[0] + foodFacility.boro.slice(1).toLowerCase(),
          ],
          tag: ["food"],
          hyperlink:
            "https://data.cityofnewyork.us/City-Government/Facilities-Database/ji82-xba5/data",
          latitude: foodFacility.latitude,
          longitude: foodFacility.longitude,
        })
      )
  );

  const cityServicesImages = [
    "https://media.istockphoto.com/id/1168800240/vector/skyline-of-new-york-city.jpg?s=612x612&w=0&k=20&c=yLbsaBg9G_RqGFBD3nAcy9UIEwI_ZKqatW6l6M11tBg=",
    "https://thumbs.dreamstime.com/b/municipal-building-city-hall-government-court-illustration-urban-landscape-vector-80243149.jpg",
    "https://cdn.theculturetrip.com/wp-content/uploads/2019/09/ia_0681_essential-nyc-etiquette-for-first-time_lt_header_v4-1-1024x576.jpg",
    "https://img.freepik.com/premium-vector/workers-repairing-road-men-overalls-spreading-asphalt-from-truck-illustration-city-service-blue-collars-transportation-concept_179970-2446.jpg",
    "https://media.istockphoto.com/id/1152829426/vector/smart-city-landscape-city-centre-with-many-building-airplane-is-flying-in-the-sky-and-people.jpg?s=170667a&w=0&k=20&c=KonN8aqzcyznRAOhLuGfimkR44eNKImBAThr0CSZO0M=",
  ];

  const cityServicesFacilitySeed = await Promise.all(
    cityService.data
      .filter((cityServicesFacility) => cityServicesFacility.address)
      .map((cityServicesFacility) =>
        Resource.create({
          name: cityServicesFacility.facname
            .split(" ")
            .map((word) => {
              if (
                word == "Ost" ||
                word === "I.s." ||
                word == "Ny" ||
                word == "P.s." ||
                word == "H.s." ||
                word == "Ymca"
              ) {
                return word.toUpperCase();
              }
              return word[0] + word.slice(1).toLowerCase();
            })
            .join(" "),
          description: cityServicesFacility.factype
            .split(" ")
            .map((word) => word[0] + word.slice(1).toLowerCase())
            .join(" "),
          imageUrl:
            cityServicesImages[
              Math.floor(Math.random() * cityServicesImages.length)
            ],
          address: `${cityServicesFacility.address
            .split(" ")
            .map((word) => {
              if (Number(word)) {
                return word;
              }
              return word[0] + word.slice(1).toLowerCase();
            })
            .join(" ")}, ${[
            cityServicesFacility.boro[0] +
              cityServicesFacility.boro.slice(1).toLowerCase(),
          ]}, NY ${cityServicesFacility.zipcode}`,
          borough: [
            cityServicesFacility.boro[0] +
              cityServicesFacility.boro.slice(1).toLowerCase(),
          ],
          tag: ["city services"],
          hyperlink:
            "https://www.nyc.gov/site/immigrants/help/city-services.page",
          latitude: cityServicesFacility.latitude,
          longitude: cityServicesFacility.longitude,
        })
      )
  );

  console.log(
    `seeded ${users.length} users, ${event.length} events, ${
      educationSeed.length +
      healthFacilitiesSeed.length +
      financeCtrSeed.length +
      taxFacilitySeed.length +
      resource.length +
      employmentFacilitySeed.length +
      clothesFacilitiesSeed.length +
      seniorFacilitySeed.length +
      disabilityServicesSeed.length +
      foodFacilitiesSeed.length +
      cityServicesFacilitySeed.length
    } resources`
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
