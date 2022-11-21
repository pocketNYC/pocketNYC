const resources = [
  {
    name: "St. Mary's Hospital for Children",
    description: "Traumatic brain injury and coma recovery",
    imageUrl: "https://media.istockphoto.com/id/1215582607/vector/parents-visit-sick-son-in-bed-at-hospital-ward.jpg?s=612x612&w=0&k=20&c=iwCt-j9oYFMLSf9kGGA4KyFP7ilYDjZ213gmwlNBuOQ=",
    address: "2601 216th Street, Bayside, NY",
    borough: ["Queens"],
    tag: ["health"],
    hyperlink: "https://www.stmaryskids.org/",
    latitude: "40.7765° N",
    longitude: "73.7687° W",
  },
  {
    name: "New York City Coalition Against Hunger",
    description:
      "The New York City Coalition Against Hunger (NYCCAH) represents and is the voice for the more than 1,100 nonprofit soup kitchens and food pantries in New York City and the 1.5 million low-income New Yorkers who live in households that can’t afford enough food.",
    imageUrl: "https://i.imgur.com/YfrinD9.png",
    address: "16 Beaver Street, New York, NY, 10004",
    borough: ["Manhattan"],
    tag: ["food"],
    hyperlink: "https://www.hungerfreeamerica.org/en-us/nyc/",
  },
  {
    name: "Bronx EOC",
    description:
      "Tuition Free Programs - The career path and life that you deserve are easier to obtain. Get the right training and preparation at no cost to you.",
    imageUrl: "https://i.imgur.com/FW2Spsj.png",
    address: "1666 Bathgate Ave, Bronx, NY, 10457",
    borough: ["Bronx"],
    tag: ["education", "employment"],
    hyperlink: "http://www.bronxeoc.org/",
    latitude: "40.859583",
    longitude: "-73.89796",
  },
  {
    name: "Meals on Wheels of Staten Island Inc.",
    description:
      "Meals on Wheels of Staten Island, Inc. is a private not-for-profit agency whose mission is to provide two nutritious meals each day to those 60 years of age or older who can no longer shop for or prepare their own meals.",
    imageUrl: "https://i.imgur.com/Tfdznnx.png",
    address: "304 PORT RICHMOND AVENUE, Staten Island, NY, 10302",
    borough: ["Staten Island"],
    tag: ["seniors", "food"],
    hyperlink: "https://mealsonwheelsofstatenisland.com/",
    latitude: "40.6342243583",
    longitude: "-74.136274509",
  },
  {
    name: "Spanish Speaking Elderly Council RAICES Inc.",
    description:
      "RAICES was founded in 1978 by retired Hispanic older adults who saw the need for an organization which would provide services, educate and organize the Latino, minority and low-income aging community in the boroughugh of Brooklyn.",
    imageUrl: "https://i.pinimg.com/originals/47/d4/40/47d440bbc3a8057074e1553e522e3ef0.png",
    address: "420 Baltic St, Brooklyn, NY 11217",
    borough: ["Brooklyn"],
    tag: ["seniors", "education"],
    hyperlink: "https://www.raices.us/",
    latitude: "40.6827202248",
    longitude: "-73.9890473043",
  },
  {
    name: "ICD - International Center for the Disabled",
    description:
      "ICD is a not-for-profit workforce development organization based in New York City. Our mission is to help people transform their lives through career development and employment.",
    imageUrl:
      "https://media.istockphoto.com/id/1298415912/vector/group-diverse-of-people-with-disabilities-work-together-in-office-disabled-different-people.jpg?s=612x612&w=0&k=20&c=mUql1CSbWa4uE5HwKn_5gwMa3syPmgzMhVgt611h_ZM=",
    address: "123 William St #5, New York, NY 10038",
    borough: ["Manhattan"],
    tag: ["employment", "education", "finance", "disability services"],
    hyperlink: "https://www.icdnyc.org/about",
    latitude: 40.70802130774009,
    longitude: -74.0077641630858,
  },
  {
    name: "Bottomless Closet",
    description:
      "The mission of Bottomless Closet is to promote economic self sufficiency by providing interview skills, business clothing, and ongoing career development and support programs to economically disadvantaged New York City women. By enhancing their self-confidence and self-esteem, we enable them to enter and succeed in the workforce and transform the vision for their lives.",
    imageUrl:
      "https://news.cgtn.com/news/2020-10-10/China-to-boost-employment-with-multi-pronged-measures-Ut5aNsEZAQ/img/21c47235c71c4476ae4454011829e9de/21c47235c71c4476ae4454011829e9de.jpeg",
    address: "15 Penn Plaza, Level B, Suite 40, New York, NY 10001",
    borough: ["Manhattan"],
    tag: ["clothes", "employment"],
    hyperlink: "http://www.bottomlessclosetnyc.org",
    latitude: "40.750009",
    longitude: "-73.991327",
  },
  {
    name: "VHA New York Harbor Healthcare-Brooklyn Campus",
    description:
      "Veterans hospital providing inpatient/outpatient care including mental health and social services.",
    imageUrl: "https://media.istockphoto.com/id/1306535183/vector/male-nurse-and-veteran-soldier-in-military-uniform-on-a-wheelchair.jpg?s=612x612&w=0&k=20&c=h6J3nFT3Tql1-0T4E_2l487uR3YsTYuuXOBi4u0uKnY=",
    address: "800 Poly Place, Brooklyn, NY 11209",
    borough: ["Brooklyn"],
    tag: ["city services", "health"],
    hyperlink: "http://va.gov",
    latitude: "40.609263",
    longitude: "-74.02399",
  },
  {
    name: "Achieve Beyond",
    description:
      "We believe that all children have potential. We are guided by the mission to support children with special needs to Achieve Beyond their current abilities. We are always striving for continuous improvement by setting goals and measuring performance.",
    imageUrl: "https://i.imgur.com/jWoI5bI.png",
    address: "7000 Austin St #200, Queens, NY 11375",
    borough: ["Queens"],
    tag: ["disability services"],
    hyperlink: "https://www.achievebeyondusa.com/",
    latitude: "40.72192117025954",
    longitude: "-73.84803082313802",
  },
  {
    name: "Neighborhood Coalition for Shelter ",
    description:
      "Neighborhood Coalition for Shelter provides New Yorkers who are homeless or at risk of homelessness with a home, a community, and access to the services that they need to thrive. We create innovative solutions and engage community partners to provide housing and support that can transform lives.",
    imageUrl: "https://i.imgur.com/YfrinD9.png",
    address: "50 Broadway Suite 1301, New York, NY 10004",
    borough: ["Manhattan"],
    tag: ["city services", "food"],
    hyperlink: "https://www.ncsinc.org/",
    latitude: "40.70678804768581",
    longitude: "-74.01213389629794",
  },
  {
    name: "Legal Services NYC",
    description:
      "Provides free civil legal services, with a focus on cases involving housing, family, domestic violence, public benefits, income tax, employment, education, consumer rights, economic development, AIDS/HIV and elderly citizens facing eviction and unsafe living conditions. Offices in every borough of NYC.",
    imageUrl: "https://www.pngitem.com/pimgs/m/54-548394_lawyers-lawyer-png-clipart-transparent-png.png",
    address: "40 Worth Street, Suite 606, New York, NY 10013",
    borough: ["Manhattan"],
    tag: ["finance", "city services"],
    hyperlink: "https://www.legalservicesnyc.org/",
    latitude: "40.7174902418268162",
    longitude: "-74.0069998312454",
  },
  {
    name: "Food Bank For New York City",
    description: "Website contains information about food programs in NYC.",
    imageUrl:
      "https://cdn.dribbble.com/users/2390791/screenshots/6889596/1_3_.jpg",
    address: "39 Broadway, 10th Floor, New York, NY, 10006",
    borough: ["Manhattan", "Queens", "Brooklyn", "Bronx", "Staten Island"],
    tag: ["food", "city services"],
    hyperlink: "https://www.foodbanknyc.org/",
    latitude: "40.70652020649824",
    longitude: "-74.01299067172296",
  },
  {
    name: "NYC Human Resources Administration, Department of Social Services",
    description:
      "Offers applications for subsidized child care, resources and referrals. Provides support services, such as temporary cash assistance, child care, domestic violence protection, medical support services, and energy assistance.",
    imageUrl: "https://i.imgur.com/jWoI5bI.png",
    address: "Online",
    borough: ["Manhattan", "Queens", "Brooklyn", "Bronx", "Staten Island"],
    tag: ["city services", "food", "health", "finance"],
    hyperlink: "https://www.nyc.gov/site/hra/index.page",
  },
  {
    name: "Immigration Advocacy Services, Inc.",
    description:
      "Outreach service that provides assistance with immigration procedures, computer filings, certification, translation and notarization of documents and citizenship drives; anti-fraud help; information about new laws; immigration legal services and fingerprinting.",
    imageUrl: "https://img.freepik.com/free-vector/immigrants-queueing-registration_74855-17065.jpg?w=2000",
    address: "36-16 Astoria Blvd S, Astoria, NY 11103",
    borough: ["Queens"],
    tag: ["city services", "finance"],
    hyperlink: "https://immigrationadvocacy.com/",
    latitude: "40.76994506138066",
    longitude: "-73.91317499870944",
  },
  {
    name: "Growing Up Healthy Hotline",
    description:
      "Provides information about health care, nutrition and other health and human services.",
    imageUrl: "https://i.imgur.com/FW2Spsj.png",
    address: "Online",
    borough: ["Manhattan", "Queens", "Brooklyn", "Bronx", "Staten Island"],
    tag: ["city services", "food"],
    hyperlink:
      "https://www.health.ny.gov/community/pregnancy/health_care/prenatal/guh.htm",
  },
  {
    name: "NYC Tech Talent Pipeline",
    description:
      "The NYC Tech Talent Pipeline (TTP) is New York City’s tech industry partnership. Founded in 2014, TTP is a mayoral initiative built to bridge the gap between City government, employers, and educators to support the city’s growing tech industry.",
    imageUrl: "https://i.imgur.com/Tfdznnx.png",
    address: "Online",
    borough: ["Manhattan", "Queens", "Brooklyn", "Bronx", "Staten Island"],
    tag: ["education", "employment"],
    hyperlink: "https://techtalentpipeline.nyc/",
  },
  {
    name: "Workforce Connect",
    description:
      "The New York City Department of Youth and Community Development (DYCD) is the City's lead agency for youth employment programs. DYCD is committed to expanding opportunities for New York City's young people. Our employment programs help youth between the ages of 14 and 24 gain work experience and further their education.",
    imageUrl: "https://i.imgur.com/jWoI5bI.png",
    address: "Online",
    borough: ["Manhattan", "Queens", "Brooklyn", "Bronx", "Staten Island"],
    tag: ["education", "employment"],
    hyperlink: "https://www.nyc.gov/site/dycd/services/jobs-internships.page",
  },
  {
    name: "Project Hospitality",
    description:
      "For over 30 years, we have provided Food and Nutrition services through Soup Kitchens and Food Pantries. Our Community Initiatives/Outreach programs have grown to include Outreach & Education, Volunteer Services,  Help Center, Healthy Families Program, Senior Health & Wellness Services, Youth Programs, Disaster Recovery Services, Women’s Emergency Services and Domestic Violence Intervention, and more.",
    imageUrl: "https://i.imgur.com/YfrinD9.png",
    address: "514 Bay St, Staten Island, NY 10304",
    borough: ["Staten Island"],
    tag: ["food", "clothes"],
    hyperlink: "https://projecthospitality.org/",
    latitude: "40.630735301356914",
    longitude: "-74.07692937970033",
  },
  {
    name: "NY Common Pantry",
    description:
      "New York Common Pantry works toward the reduction of hunger and food insecurity through an array of programs that function to establish long-term independence for those we serve. Our whole-person approach starts with food provision through the distribution of nutritious, fresh food pantry packages in Choice Pantry and hearty balanced breakfast and dinner in the Hot Meals program. Supplemental food is provided to seniors aged 60 and older through Nourish.",
    imageUrl: "https://i.imgur.com/FW2Spsj.png",
    address: "8 E 109th St, New York, NY 10029",
    borough: ["Manhattan"],
    tag: ["food", "seniors"],
    hyperlink: "https://projecthospitality.org/",
    latitude: "40.796497993399456",
    longitude: "-73.94926791534391",
  },
  {
    name: "St Edward Food Pantry",
    description:
      "St. Edward Food Pantry has been feeding those in need since 1928, starting as a Ministry of the Franciscan Handmaids of Mary. Families come to our Food Pantry from across Staten Island as well as the outer boroughs. St. Edward Food Pantry serves anyone in need of food and does not discriminate against against anyone irregardless of their race, religion, gender, age, sexual preferences, etc. All persons are served.",
    imageUrl: "https://i.imgur.com/Tfdznnx.png",
    address: " 6581 Hylan Blvd, Staten Island, NY 10309",
    borough: ["Staten Island"],
    tag: ["food"],
    hyperlink: "https://www.nycservice.org/organizations/index.php?org_id=1154",
    latitude: "40.510880188739556",
    longitude: "-74.2195538238504",
  },
  {
    name: "Murray Hill Neighborhood Association",
    description:
      "The mission of The Murray Hill Neighborhood Association is to continue to make Murray Hill a highly desirable place to live, work and visit. We do this through programs to preserve the neighborhood's historic character, greening and beautification, liaising with local government officials about quality of life issues, providing information about the neighborhood to members, and social events.",
    imageUrl:
      "https://img.freepik.com/free-vector/illustration-hands-holding-junk-food_53876-26715.jpg?w=2000",
    address: "15020 Barclay Ave, Queens, NY 11355",
    borough: ["Queens"],
    tag: ["food"],
    hyperlink:
      "https://www.murrayhillnyc.org/common/11037/default.cfm?clientID=11037&ThisPage=home",
    latitude: "40.76254917789113",
    longitude: "-73.81258532407988",
  },
  {
    name: "Destination Tomorrow",
    description:
      "Destination Tomorrow is a grassroots agency and the LGBTQ+ center of the Bronx borough. It is our belief that no individual should have to leave his, her, or their neighborhood to access LGBTQ+ specific services. It is our belief that all LGBTQ+ young people deserve a space to grow, learn, and flourish. It is our belief that people, regardless of their sexual identity or gender expression, deserve a space they can call their own.",
    imageUrl: "https://i.imgur.com/YfrinD9.png",
    address: "452 E 149th St 3rd floor, The Bronx, NY 10455",
    borough: ["Bronx"],
    tag: ["food", "education"],
    hyperlink: "https://destinationtomorrow.org/",
    latitude: "40.81572421982161",
    longitude: "-73.91553025454304",
  },
  {
    name: "We Create Community Food Pantry",
    description:
      "We Create Community Inc. was born from the idea that not all needs within our community are one size fits all. So we created a holistic eco-system that covers the primary pillars for a healthy human to thrive and start building a foundation to grow past economic barriers. It is our belief that old school values of taking care of our neighbors is the single biggest remedy for this season in history. Immigrant families have historically been the economic entrepreneurial spark and back-bone of New York city.",
    imageUrl: "https://i.imgur.com/FW2Spsj.png",
    address: "8501 New Utrecht Ave, Brooklyn, NY 11214",
    borough: ["Brooklyn"],
    tag: ["food"],
    hyperlink:
      "https://ampleharvest.org/food-pantries/we-create-community-inc-10159/",
    latitude: "40.60802466475073",
    longitude: "-74.00130745457646",
  },
  {
    name: "Cityline Ozone Park Civilian Patrol Food Pantry",
    description:
      "We are committed to supporting families in our community and beyond. Since March 2020, the Cityline Ozone Park Civilian Patrol has been serving families in need throughout City Line, Ozone Park, Woodhaven, South Ozone Park, and beyond. The Ozone Park Pantry is a weekly service that began at the height of the pandemic, serving over 1,000 families. Every Saturday at Digby Place and Rockaway Blvd, we distributed a large variety of fresh produce, dry goods, and canned goods. Our pantry is open to anyone in need judgment-free.",
    imageUrl: "https://i.imgur.com/Tfdznnx.png",
    address: "77-03 101st Ave, Queens, NY 11416",
    borough: ["Queens"],
    tag: ["food"],
    hyperlink: "https://copcp.org/pantry/",
    latitude: "40.68111316243781",
    longitude: "-73.86037616980799",
  },
  {
    name: "OnTrackNY",
    description:
      "OnTrackNY is a mental health treatment program that empowers young people to make meaning of their experiences and to pursue their goals for school, work, and relationships. We support the well-being of young people across New York State who are impacted by unexpected changes in their thinking and perceptions. Equity, inclusion, rapid access, and self-determination are at the core of everything we do.",
    imageUrl: "https://media.istockphoto.com/id/1270641282/vector/mental-health-or-psychology-concept-with-flowering-human-head.jpg?s=612x612&w=0&k=20&c=-ZycQUvWskTvH_BoF1LoGJ3XpfrN7jVs8Nu3-NHjDZE=",
    address: "1051 Riverside Dr, New York, NY 10032",
    borough: ["Manhattan"],
    tag: ["food", "health"],
    hyperlink: "https://ontrackny.org/",
    latitude: "40.84319484961128",
    longitude: "-73.94451258528993",
  },
  {
    name: "NYC Health + Hospitals",
    description:
      "NYC Health + Hospitals is the nation’s largest municipal health care delivery system in the United States dedicated to providing the highest quality health care services to all New Yorkers with compassion, dignity and respect, and regardless of immigration status or ability to pay.",
    imageUrl: "https://i.imgur.com/YfrinD9.png",
    address: "Online",
    borough: ["Manhattan", "Queens", "Brooklyn", "Bronx", "Staten Island"],
    tag: ["city services", "health"],
    hyperlink: "https://www.nychealthandhospitals.org/",
  },
  {
    name: "Department for the Aging",
    description:
      "New York City is home to approximately 1.64 million older adults, and the Department for the Aging (DFTA) is committed to helping them age in their homes and communities. Our mission is to eliminate ageism and ensure the dignity and quality of life of diverse older adults. We also work to support caregivers through service, advocacy, and education.",
    imageUrl: "https://i.imgur.com/FW2Spsj.png",
    address: "Online",
    borough: ["Manhattan", "Queens", "Brooklyn", "Bronx", "Staten Island"],
    tag: ["seniors"],
    hyperlink: "https://www.nyc.gov/site/dfta/index.page",
  },
  {
    name: "Center For Independence of the Disabled, New York",
    description:
      "CIDNY is a nonprofit organization founded in 1978. We are part of the Independent Living Centers movement: a national network of grassroots and community-based organizations that enhance opportunities for all people with disabilities to direct their own lives.",
    imageUrl: "https://media.istockphoto.com/id/1298415912/vector/group-diverse-of-people-with-disabilities-work-together-in-office-disabled-different-people.jpg?s=612x612&w=0&k=20&c=mUql1CSbWa4uE5HwKn_5gwMa3syPmgzMhVgt611h_ZM=",
    address: "1010 6th Ave, New York, NY 10018",
    borough: ["Manhattan", "Queens"],
    tag: ["disability services", "education"],
    hyperlink: "https://www.cidny.org/",
    latitude: "40.752652504809866",
    longitude: "-73.98590558835792",
  },
  {
    name: "Access NYC",
    description:
      "Identifies and screens for over 30 city, state, and federal human service benefit programs; provides support services including child care support, employment services, tax assistance, energy and utility support, food stamps and nutritional programs, health care services, health insurance programs and services, and housing programs.",
    imageUrl: "https://i.imgur.com/jWoI5bI.png",
    address: "Online",
    borough: ["Manhattan", "Queens", "Brooklyn", "Bronx", "Staten Island"],
    tag: ["food", "city services", "finance"],
    hyperlink: "https://access.nyc.gov/",
  },
  {
    name: "The Door",
    description:
      "The Door’s mission is to empower young people to reach their potential by providing comprehensive youth development services in a diverse and caring environment.",
    imageUrl: "https://img.freepik.com/free-vector/international-group-young-happy-children-concept-kids-holiday-cute-cartoon-characters_71593-949.jpg?w=2000",
    address: "Online",
    borough: ["Manhattan", "Queens", "Brooklyn", "Bronx", "Staten Island"],
    tag: ["education", "city services"],
    hyperlink: "https://door.org/",
  },
  {
    name: "Union Health Center",
    description:
      "Provides health care services, including primary care, specialty care, pharmacy, physical therapy, nutritional services, radiology services, lab services, social services, support groups, and mental health services.",
    imageUrl: "https://i.imgur.com/FW2Spsj.png",
    address: "160 W 26th St, New York, NY 10001",
    borough: ["Manhattan"],
    tag: ["health"],
    hyperlink: "https://unionhealthcenter.org/",
    latitude: "40.746295205990876",
    longitude: "-73.99402254232842",
  },
  {
    name: "Crown Heights STD Clinic",
    description:
      "Clinic offering free and low-cost STD testing and other medical services.",
    address: "1218 Prospect Place, 1st Floor, Brooklyn, NY 11213",
    borough: ["Brooklyn"],
    latitude: 40.67348409656334,
    longitude: -73.93592094872969,
    imageUrl:
      "https://media.istockphoto.com/id/1268743281/vector/school-sexuality-education-program-schools-lesson-on-safe-sex-teens.jpg?s=612x612&w=0&k=20&c=B-cj3ACV7KkURu3noTCxSu9a5j36LNdcXdZl_9q7wk0=",
    tag: ["health", "city-services"],
    hyperlink:
      "https://www.nyc.gov/site/doh/services/sexual-health-clinics.page",
  },
  {
    name: "Central Harlem STD Clinic",
    description:
      "Clinic offering free and low-cost STD testing and other medical services.",
    address: "2238 5th Avenue, 1st Floor, Brooklyn, NY 10037",
    borough: ["Manhattan"],
    latitude: 40.81401625864816,
    longitude: -73.9370823587415,
    imageUrl:
      "https://www.prioritystdtesting.com/wp-content/uploads/2021/01/prio_accuracy-blog_cover-03-1024x546.jpg",
    tag: ["health", "city-services"],
    hyperlink:
      "https://www.nyc.gov/site/doh/services/sexual-health-clinics.page",
  },
  {
    name: "Corona STD Clinic",
    description:
      "Clinic offering free and low-cost STD testing and other medical services.",
    address: "34-33 Junction Boulevard, Jackson Heights, NY, 11372",
    borough: ["Queens"],
    latitude: 40.75440907899731,
    longitude: -73.87199685874401,
    imageUrl:
      "https://www.prioritylabtesting.com/wp-content/uploads/2021/06/hero-illustration_STD-Testing.png",
    tag: ["health", "city-services"],
    hyperlink:
      "https://www.nyc.gov/site/doh/services/sexual-health-clinics.page",
  },
  {
    name: "Manhattanville Renaissance STD Clinic",
    description:
      "Clinic offering free and low-cost STD testing and other medical services.",
    address: "21 Old Broadway, 2nd Floor, New York, NY 10027",
    borough: ["Manhattan"],
    latitude: 40.81573783150304,
    longitude: -73.95667903175362,
    imageUrl:
      "https://images.ctfassets.net/982hy6slwllg/22Uh7ifR3JrBJ7p79G7foD/3ade225d089ad9fa36f99ba60852805e/company-14159015000-photoURL-ef139c7f-4f42-40c4-a2b0-760b998275e9.png",
    tag: ["health", "city-services"],
    hyperlink:
      "https://www.nyc.gov/site/doh/services/sexual-health-clinics.page",
  },
  {
    name: "Fort Greene STD Clinic",
    description:
      "Clinic offering free and low-cost STD testing and other medical services.",
    address: "295 Flatbush Avenue Extension, 2nd Floor, Brooklyn, NY 11201",
    borough: ["Brooklyn"],
    latitude: 40.691855463118834,
    longitude: -73.98197308758192,
    imageUrl:
      "https://images.ctfassets.net/982hy6slwllg/22Uh7ifR3JrBJ7p79G7foD/3ade225d089ad9fa36f99ba60852805e/company-14159015000-photoURL-ef139c7f-4f42-40c4-a2b0-760b998275e9.png",
    tag: ["health", "city-services"],
    hyperlink:
      "https://www.nyc.gov/site/doh/services/sexual-health-clinics.page",
  },
  {
    name: "Jamaica STD Clinic",
    description:
      "Clinic offering free and low-cost STD testing and other medical services.",
    address: "90-37 Parsons Blvd 1st Floor, Jamaica, NY 11432",
    borough: ["Queens"],
    latitude: 40.70415078068194,
    longitude: -73.80028246059362,
    imageUrl:
      "https://www.prioritystdtesting.com/wp-content/uploads/2020/06/prio_blog_stdTesting-before-sex_061820-768x424.jpg",
    tag: ["health", "city-services"],
    hyperlink:
      "https://www.nyc.gov/site/doh/services/sexual-health-clinics.page",
  },
  {
    name: "Morrisania STD Clinic",
    description:
      "Clinic offering free and low-cost STD testing and other medical services.",
    address: "1309 Fulton Ave 2nd floor, The Bronx, NY 10456",
    borough: ["Bronx"],
    latitude: 40.83286997945421,
    longitude: -73.90328351641145,
    imageUrl:
      "https://www.ntdaily.com/wp-uploads/2019/04/1-1024x570.png",
    tag: ["health", "city-services"],
    hyperlink:
      "https://www.nyc.gov/site/doh/services/sexual-health-clinics.page",
  },
];

module.exports = { resources };
