const resources = [
  {
    name: "St. Mary's Hospital for Children",
    description: "Traumatic brain injury and coma recovery",
    address: "2601 216th Street, Bayside, NY",
    boro: ["Queens"],
    tag: ["health"],
    hyperlink: "https://www.stmaryskids.org/",
    latitude: "40.7765° N",
    longitude: "73.7687° W",
  },
  {
    name: "New York City Coalition Against Hunger",
    description:
      "The New York City Coalition Against Hunger (NYCCAH) represents and is the voice for the more than 1,100 nonprofit soup kitchens and food pantries in New York City and the 1.5 million low-income New Yorkers who live in households that can’t afford enough food.",
    address: "16 Beaver Street, New York, NY, 10004",
    boro: ["Manhattan"],
    tag: ["food"],
    hyperlink: "https://www.hungerfreeamerica.org/en-us/nyc/",
  },
  {
    name: "Bronx EOC",
    description:
      "Tuition Free Programs - The career path and life that you deserve are easier to obtain. Get the right training and preparation at no cost to you.",
    address: "1666 Bathgate Ave, Bronx, NY, 10457",
    boro: ["Bronx"],
    tag: ["education", "employment"],
    hyperlink: "http://www.bronxeoc.org/",
    latitude: "40.859583",
    longitude: "-73.89796",
  },
  {
    name: "Meals on Wheels of Staten Island Inc.",
    description:
      "Meals on Wheels of Staten Island, Inc. is a private not-for-profit agency whose mission is to provide two nutritious meals each day to those 60 years of age or older who can no longer shop for or prepare their own meals.",
    address: "304 PORT RICHMOND AVENUE, Staten Island, NY, 10302",
    boro: ["Staten Island"],
    tag: ["seniors", "food"],
    hyperlink: "https://mealsonwheelsofstatenisland.com/",
    latitude: "40.6342243583",
    longitude: "-74.136274509",
  },
  {
    name: "Spanish Speaking Elderly Council RAICES Inc.",
    description:
      "RAICES was founded in 1978 by retired Hispanic older adults who saw the need for an organization which would provide services, educate and organize the Latino, minority and low-income aging community in the borough of Brooklyn.",
    address: "420 Baltic St, Brooklyn, NY 11217",
    boro: ["Brooklyn"],
    tag: ["seniors", "education"],
    hyperlink: "https://www.raices.us/",
    latitude: "40.6827202248",
    longitude: "-73.9890473043",
  },
  {
    name: "ICD- International Center for the Disabled",
    description:
      "ICD is a not-for-profit workforce development organization based in New York City. Our mission is to help people transform their lives through career development and employment.",
    address: "123 William St #5, New York, NY 10038",
    boro: ["Manhattan"],
    tag: ["employment", "education", "finance", "disability services"],
    hyperlink: "https://www.icdnyc.org/about",
  },
  {
    name: "Bottomless Closet",
    description:
      "The mission of Bottomless Closet is to promote economic self sufficiency by providing interview skills, business clothing, and ongoing career development and support programs to economically disadvantaged New York City women. By enhancing their self-confidence and self-esteem, we enable them to enter and succeed in the workforce and transform the vision for their lives.",
    address: "15 Penn Plaza, Level B, Suite 40, New York, NY 10001",
    boro: ["Manhattan"],
    tag: ["clothes", "employment"],
    hyperlink: "http://www.bottomlessclosetnyc.org",
    latitude: "40.750009",
    longitude: "-73.991327",
  },
  {
    name: "VHA New York Harbor Healthcare-Brooklyn Campus",
    description:
      "Veterans hospital providing inpatient/outpatient care including mental health and social services.",
    address: "800 Poly Place, Brooklyn, NY 11209",
    boro: ["Brooklyn"],
    tag: ["city services", "health"],
    hyperlink: "http://va.gov",
    latitude: "40.609263",
    longitude: "-74.02399",
  },
  {
    name: "Achieve Beyond",
    description:
      "We believe that all children have potential. We are guided by the mission to support children with special needs to Achieve Beyond their current abilities. We are always striving for continuous improvement by setting goals and measuring performance.",
    address: "7000 Austin St #200, Queens, NY 11375",
    boro: ["Queens"],
    tag: ["disability services"],
    hyperlink: "https://www.achievebeyondusa.com/",
    latitude: "40.72192117025954",
    longitude: "-73.84803082313802",
  },
  {
    name: "Neighborhood Coalition for Shelter ",
    description:
      "Neighborhood Coalition for Shelter provides New Yorkers who are homeless or at risk of homelessness with a home, a community, and access to the services that they need to thrive. We create innovative solutions and engage community partners to provide housing and support that can transform lives.",
    address: "50 Broadway Suite 1301, New York, NY 10004",
    boro: ["Manhattan"],
    tag: ["city services", "food"],
    hyperlink: "https://www.ncsinc.org/",
    latitude: "40.70678804768581",
    longitude: "-74.01213389629794",
  },
  {
    name: "Legal Services NYC",
    description:"Provides free civil legal services, with a focus on cases involving housing, family, domestic violence, public benefits, income tax, employment, education, consumer rights, economic development, AIDS/HIV and elderly citizens facing eviction and unsafe living conditions. Offices in every borough of NYC.",
    address: "40 Worth Street, Suite 606, New York, NY 10013",
    boro: ["Manhattan"],
    tag: ["finance", "city services"],
    hyperlink: "https://www.legalservicesnyc.org/",
    latitude: "40.7174902418268162",
    longitude: "-74.0069998312454",
  },
  {
    name:"Food Bank For New York City",
    description:"Website contains information about food programs in NYC.",
    address:"39 Broadway, 10th Floor, New York, NY, 10006",
    boro:["Manhattan", "Queens", "Brooklyn", "Bronx", "Staten Island"],
    tag:["food", "city services"],
    hyperlink:"https://www.foodbanknyc.org/",
    latitude:"40.70652020649824",
    longitude:"-74.01299067172296"
  },
  {
    name:"NYC Human Resources Administration, Department of Social Services",
    description:"Offers applications for subsidized child care, resources and referrals. Provides support services, such as temporary cash assistance, child care, domestic violence protection, medical support services, and energy assistance.",
    address:"Online",
    boro:["Manhattan", "Queens", "Brooklyn", "Bronx", "Staten Island"],
    tag:["city services", "food", "health", "finance"],
    hyperlink:"https://www.nyc.gov/site/hra/index.page",
  },
  {
    name:"Immigration Advocacy Services, Inc.",
    description:"Outreach service that provides assistance with immigration procedures, computer filings, certification, translation and notarization of documents and citizenship drives; anti-fraud help; information about new laws; immigration legal services and fingerprinting.",
    address:"36-16 Astoria Blvd S, Astoria, NY 11103",
    boro:["Queens"],
    tag:["city services", "finance"],
    hyperlink:"https://immigrationadvocacy.com/",
    latitude:"40.76994506138066",
    longitude: "-73.91317499870944"
  },
  {
    name:"Growing Up Healthy Hotline",
    description:"Provides information about health care, nutrition and other health and human services.",
    address:"Online",
    boro:["Manhattan", "Queens", "Brooklyn", "Bronx", "Staten Island"],
    tag:["city services", "food"],
    hyperlink:"https://www.health.ny.gov/community/pregnancy/health_care/prenatal/guh.htm",
  },
  {
    name:"NYC Tech Talent Pipeline",
    description:"The NYC Tech Talent Pipeline (TTP) is New York City’s tech industry partnership. Founded in 2014, TTP is a mayoral initiative built to bridge the gap between City government, employers, and educators to support the city’s growing tech industry.",
    address:"Online",
    boro:["Manhattan", "Queens", "Brooklyn", "Bronx", "Staten Island"],
    tag:["education", "employment"],
    hyperlink:"https://techtalentpipeline.nyc/",
  },
  {
    name:"Workforce Connect",
    description:"The New York City Department of Youth and Community Development (DYCD) is the City's lead agency for youth employment programs. DYCD is committed to expanding opportunities for New York City's young people. Our employment programs help youth between the ages of 14 and 24 gain work experience and further their education.",
    address:"Online",
    boro:["Manhattan", "Queens", "Brooklyn", "Bronx", "Staten Island"],
    tag:["education", "employment"],
    hyperlink:"https://www.nyc.gov/site/dycd/services/jobs-internships.page",
  },
  {
    name:"Project Hospitality",
    description:"For over 30 years, we have provided Food and Nutrition services through Soup Kitchens and Food Pantries. Our Community Initiatives/Outreach programs have grown to include Outreach & Education, Volunteer Services,  Help Center, Healthy Families Program, Senior Health & Wellness Services, Youth Programs, Disaster Recovery Services, Women’s Emergency Services and Domestic Violence Intervention, and more.",
    address:"514 Bay St, Staten Island, NY 10304",
    boro:["Staten Island"],
    tag:["food", "clothes"],
    hyperlink:"https://projecthospitality.org/",
    latitude:"40.630735301356914",
    longitude: "-74.07692937970033"
  },


];

module.exports = { resources };

