const events = [
  {
    title: "Central Park Tour: Iconic Views of Central Park",
    address: "Central Park, NY",
    description:
      "Take our signature tour, and let Central Park Conservancy guides give you an insider's look at some of the most iconic features of the world's greatest urban park.",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg-vimbly-com-images.imgix.net%2Ffull_photos%2Fcentral-park-pedicab-tour-4.jpg%3Fauto%3Dcompress%26fit%3Dcrop%26h%3D490%26ixlib%3Dphp-1.2.1%26w%3D730&f=1&nofb=1&ipt=121f8762a9b462ccc9560bc64fa9397b9a8896f113384fb0be15072b8efd100c&ipo=images",
    date: "November 22, 2022",
    time: "2:00-6:00pm",
    tag: ["outdoors", "family-friendly"],
    borough: "Manhattan",
    eventLink: "https://www.centralpark.com/tours",
    status: "approved",
    latitude: 40.78163154967519,
    longitude: -73.96667599082012,
  },
  {
    title: "Bryant Park Winter Village Tree Lighting Ceremony",
    address: "Bryant Park, 42nd Street and Sixth Avenue, New York, NY 10018",
    description:
      "This year's tree is a 50-foot Norway spruce that will be lit during a fireworks display. Olympic-medalist Johnny Weir will be among the talented skaters to hit the ice rink for a special performance that will include live music.",
    image:
      "https://secretnyc.co/wp-content/uploads/2017/11/bryparktree4-1024x710.jpg",
    date: "December 6, 2022",
    time: "6:00pm",
    tag: ["outdoors", "family-friendly", "music/arts"],
    borough: "Manhattan",
    eventLink: "https://bryantpark.org/",
    status: "approved",
    latitude: 40.75361130200964,
    longitude: -73.98318113600838,
    userId: 2,
  },
  {
    title: "Birding Jamaica Bay",
    address:
      "Jamaica Bay Wildlife Refuge, Cross Bay Boulevard, Broad Channel, NY 11693",
    description:
      "New York City is home to an amazing abundance of wildlife. Our Urban Park Rangers will guide you to the best wildlife viewing spots in the urban jungle.",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.allaboutbirds.org%2Fnews%2Fwp-content%2Fuploads%2F2019%2F05%2FNYC-birds-Riepe.jpg&f=1&nofb=1&ipt=d859b3c5d5e170c8755c97eafe04b8c7aa8bde1d78b85734dc5294935341fe66&ipo=images",
    date: "November 22, 2022",
    time: "3:00pm",
    tag: ["outdoors", "family-friendly"],
    borough: "Queens",
    eventLink:
      "https://home.nps.gov/gate/learn/historyculture/jamaica-bay-wildlife-refuge.htm",
    status: "approved",
    latitude: 40.61679384055135,
    longitude: -73.82495690679576,
    userId: 3,
  },
  {
    title: "CultureFest NYC",
    address: "New York City, NY",
    description:
      "CultureFest NYC is an annual Music and Multi-Cultural event happening in NYC ",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.indianexpress.com%2F2016%2F09%2Fcaribbean-2.jpg&f=1&nofb=1&ipt=d44ae0f34b61fb93b8c96d8fb4b21f6f9b10ec76a89aceda45dd5a4cff8700a5&ipo=images",
    date: "June 20, 2023",
    time: "12:00pm",
    eventLink: "https://theculturefest.nyc/",
    tag: ["multicultural", "outdoors"],
    borough: "Manhattan",
    status: "pending",
    latitude: "40.660701751709",
    longitude: "-73.965400695801",
    userId: 4,
  },
  {
    title: "Stargazing",
    address: "10th Ave and West 23rd St., New York City, NY 10011",
    description:
      "Head to the High Line each Tuesday night for a romantic walk along the park and a chance to take a closer look at the stars.",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.jharchitecture.ie%2Fwp-content%2Fuploads%2F2011%2F12%2F0011.jpg&f=1&nofb=1&ipt=3dba70fe25fe6f960af803207e27bcee6a699b356393b561c391591c5ff47573&ipo=images",
    date: "November 24, 2022",
    time: "3:00-6:00pm",
    tag: ["family-friendly"],
    borough: "Manhattan",
    eventLink: "https://www.thehighline.org/",
    status: "approved",
    longitude: -74.0048936460346,
    latitude: 40.7480534602401,
    userId: 5,
  },
  {
    title: "School's Out Festival",
    address: "1300 Greene Ave, Brooklyn, NY 11237",
    description:
      "Celebrate the start of summer fun at Parks at our fun-filled School's Out Festival with inflatables, games, face painting, music, popcorn, and more!",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.timeout.com%2Fimages%2F102735335%2F1372%2F772%2Fimage.jpg&f=1&nofb=1&ipt=af220fff75ef2939b3edf0653278a7416bf1e5e4d5dc9d04a12e8d53157318ed&ipo=images",
    date: "December 15, 2022",
    time: "4:00-6:00pm",
    tag: ["music/arts", "outdoors"],
    borough: "Brooklyn",
    eventLink:
      "https://www.nyc.gov/site/dycd/services/after-school/schools-out-new-york-city-sonyc.page",
    status: "approved",
    latitude: 40.69803025985018,
    longitude: -73.91866967089781,
  },
  {
    title: "Bronx Sports Extravaganza: Flag Football and Softball",
    address: "765 Manida Street Bronx, New York 10474",
    description:
      "Kids ages 6-12 are invited for free sports instruction at Hunts Point Recreation Center!",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bxtimes.com%2Fwp-content%2Fuploads%2F2018%2F08%2F32-a-palsportsday-2018-08-10-bx01_z-768x512.jpg&f=1&nofb=1&ipt=2512493b9c86cf516bf9fcb87401d01bdbbb3dd25f37b2775ee51038833967c5&ipo=images",
    date: "May 15th, 2022",
    time: "5:00pm",
    tag: ["sports", "multicultural", "family-friendly"],
    borough: "Bronx",
    eventLink:
      "https://www.nyc.gov/events/bronx-sports-extravaganza-street-hockey/12059/7",
    status: "approved",
    latitude: 40.815130995747595,
    longitude: -73.8890485869093,
  },
  {
    title: "Latin American Cultural Fiesta",
    address: "West 34th Street, New York, NY, 10001",
    description:
      "New York City-wide annual festival, showcasing the richness and variety of the cultures of Latin America, the Caribbean, and Spain.",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DhXKTK_C8oiXsee2dYVYlAHaFX%26pid%3DApi&f=1&ipt=47576a1b788c1fdfd2634e4cb6349c3f03f625d18eec39e846f915ad3fe62802&ipo=images",
    date: "Nov 30, 2022",
    time: "1:00pm",
    tag: ["multicultural", "music/arts", "family-friendly"],
    borough: "Manhattan",
    eventLink: "https://lacw.net/",
    status: "approved",
    longitude: "-74.19256591796875",
    latitude: "40.521690368652344",
  },
  {
    title: "NYC Pride March",
    address: "East Village, New York, NY 10005",
    description:
      "The NYC Pride March is an annual event celebrating the LGBTQ community in New York City.",
    image:
      "https://cdn.vox-cdn.com/thumbor/WCQORxf3pX3gFvaGNJDY_smqkJ4=/0x0:3600x2025/1200x800/filters:focal(1512x725:2088x1301)/cdn.vox-cdn.com/uploads/chorus_image/image/64081690/983255578.jpg.0.jpg",
    date: "June 26, 2023",
    time: "11:00am",
    tag: ["outdoors"],
    borough: "Manhattan",
    eventLink: "https://www.nycpride.org/event/nyc-pride-march",
    status: "approved",
    latitude: 40.74228682409983,
    longitude: -73.98798057341881,
  },
  {
    title: "Dauphinette's Holiday Flea Market in Dumbo",
    address: "53 Bridge Street Brooklyn, NY 11201",
    description:
      "First-ever Holiday Flea Market! We're opening up our Dumbo studio and filling it with samples, vintage, and much, much more.",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F373168129%2F311252113458%2F1%2Foriginal.20221013-204056?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=ee276cff241c6d959da7dcfaf0a6cfde",
    date: "Nov 29, 2022",
    time: "1:00pm",
    tag: ["holidays", "family-friendly"],
    borough: "Brooklyn",
    eventLink:
      "https://www.eventbrite.com/e/dauphinettes-holiday-flea-market-in-dumbo-tickets-431279497587?aff=ebdssbdestsearch",
    status: "approved",
    latitude: 40.70296041662417,
    longitude: -73.98429778009917,
  },
  {
    title: "Christmas Caroling at Staten Island Mall",
    address: "2655 Richmond Ave, Staten Island, NY 10314",
    description:
      "Spread holiday cheer throughout the community with Christmas carols, festive crafts, sips and snacks, and more.",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nydailynews.com%2Fresizer%2Fwo_PpwUJsRuDhBm2uM2umWOmfkw%3D%2F1400x0%2Ftop%2Farc-anglerfish-arc2-prod-tronc.s3.amazonaws.com%2Fpublic%2FGD2U6JJ2G52EVGWI7IIEPRUTT4.jpg&f=1&nofb=1&ipt=de700b91c813bf4091a8f54354da3e6722cb488714bb85985120a12caed79a42&ipo=images",
    date: "December 17, 2022",
    time: "1:00pm",
    tag: ["holidays", "family-friendly", "outdoors"],
    borough: "Staten Island",
    eventLink: "https://www.mallscenters.com/malls/new-york/staten-island-mall",
    status: "pending",
    latitude: 40.582024341911826,
    longitude: -74.1657740714884,
  },
  {
    title: "Lower East Side Holiday Parade 2022",
    address: "440 Grand St, New York, NY 10002",
    description:
      "Spread holiday cheer throughout the community with Christmas carols, festive crafts, sips and snacks, and more.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5b345fbf5ffd20f6d3846596/1543446426669-JTEYBSL8N6K3WIJFIJI8/25396123_234610190412968_6197764132181031678_n.jpg",
    date: "December 11, 2022",
    time: "1:00pm",
    tag: ["holidays", "family-friendly", "outdoors"],
    borough: "Manhattan",
    eventLink: "https://www.nyc.gov/events/les-holiday-parade-2022/430802/1",
    status: "pending",
    latitude: 40.71545118502942,
    longitude: -73.98455757996675,
  },
  {
    title: "Forest Fitness",
    address: "Fort Tryon Park, Riverside, Dr To Broadway, New York, NY 10040",
    description:
      "A free, year-round fitness class that incorporates climbing multiple staircases, stretches and strengthening exercises, notable tree identification, and forest bathing. ",
    image:
      "https://images.seattletimes.com/wp-content/uploads/2022/03/WEB-2016-06-08RHawk400Parks.jpg?d=780x507",
    date: "December 17, 2022",
    time: "8:30am",
    tag: ["health", "sports", "outdoors"],
    borough: "Manhattan",
    eventLink: "https://www.nyc.gov/events/forest-fitness/331550/47",
    status: "pending",
    latitude: 40.86181428562175,
    longitude: -73.93291955642407,
  },
  {
    title: "Queens Tech Night 2022 - Designing New York",
    address: "Culture Lab LIC, 5-25 46th Avenue Queens, NY 11101",
    description:
      "Queens Tech Night returns for 2022 with a special meetup focused on design in, of, and for New York City.",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F377274049%2F621442366563%2F1%2Foriginal.20221020-143036?h=2000&w=720&auto=format%2Ccompress&q=75&sharp=10&s=411d2172363c10b829808dc6ca53cc6b",
    date: "December 1, 2022",
    time: "1:00pm",
    tag: ["holidays", "family-friendly", "outdoors"],
    borough: "Staten Island",
    eventLink:
      "https://www.eventbrite.com/e/queens-tech-night-2022-designing-new-york-tickets-445165611327?aff=ebdssbdestsearch",
    status: "pending",
    latitude: 40.74760623549599,
    longitude: -73.95513383089151,
  },
];

module.exports = events;
