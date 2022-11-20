const events = [
  {
    title: "Central Park Tour: Iconic Views of Central Park",
    address: "Central Park, NY",
    description:
      "Take our signature tour, and let Central Park Conservancy guides give you an insider's look at some of the most iconic features of the world's greatest urban park.",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg-vimbly-com-images.imgix.net%2Ffull_photos%2Fcentral-park-pedicab-tour-4.jpg%3Fauto%3Dcompress%26fit%3Dcrop%26h%3D490%26ixlib%3Dphp-1.2.1%26w%3D730&f=1&nofb=1&ipt=121f8762a9b462ccc9560bc64fa9397b9a8896f113384fb0be15072b8efd100c&ipo=images",
    start: "2022-11-24 13:00",
    end: "2022-11-24 15:00",
    tag: ["outdoors", "family-friendly"],
    borough: "Manhattan",
    eventLink: "https://www.centralpark.com/tours",
    status: "approved",
    latitude: 40.78163154967519,
    longitude: -73.96667599082012,
  },
  {
    title: "Bryant Park Winter Village Tree Lighting Ceremony",
    address: "Bryant Park, 42nd Street and Sixth Avenue, New York, NY, 10018",
    description:
      "This year's tree is a 50-foot Norway spruce that will be lit during a fireworks display. Olympic-medalist Johnny Weir will be among the talented skaters to hit the ice rink for a special performance that will include live music.",
    image:
      "https://secretnyc.co/wp-content/uploads/2017/11/bryparktree4-1024x710.jpg",
    start: "2022-11-20 17:00",
    end: "2022-11-20 22:00",
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
      "Jamaica Bay Wildlife Refuge, Cross Bay Boulevard, Broad Channel, NY, 11693",
    description:
      "New York City is home to an amazing abundance of wildlife. Our Urban Park Rangers will guide you to the best wildlife viewing spots in the urban jungle.",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.allaboutbirds.org%2Fnews%2Fwp-content%2Fuploads%2F2019%2F05%2FNYC-birds-Riepe.jpg&f=1&nofb=1&ipt=d859b3c5d5e170c8755c97eafe04b8c7aa8bde1d78b85734dc5294935341fe66&ipo=images",
    start: "2022-11-16 12:00",
    end: "2022-11-16 18:00",
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
    start: "2023-06-05 12:00",
    end: "2023-06-05 19:00",
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
      "https://www.nps.gov/articles/000/images/ARCH_stargazing.jpeg?maxwidth=650&autorotate=false",
    start: "2022-11-26 17:00",
    end: "2022-11-26 21:00",
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
    address: "1300 Greene Ave, Brooklyn, NY, 11237",
    description:
      "Celebrate the start of summer fun at Parks at our fun-filled School's Out Festival with inflatables, games, face painting, music, popcorn, and more!",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.timeout.com%2Fimages%2F102735335%2F1372%2F772%2Fimage.jpg&f=1&nofb=1&ipt=af220fff75ef2939b3edf0653278a7416bf1e5e4d5dc9d04a12e8d53157318ed&ipo=images",
    start: "2022-12-15 16:00",
    end: "2022-12-15 18:00",
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
    address: "765 Manida Street Bronx, New York, NY, 10474",
    description:
      "Kids ages 6-12 are invited for free sports instruction at Hunts Point Recreation Center!",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bxtimes.com%2Fwp-content%2Fuploads%2F2018%2F08%2F32-a-palsportsday-2018-08-10-bx01_z-768x512.jpg&f=1&nofb=1&ipt=2512493b9c86cf516bf9fcb87401d01bdbbb3dd25f37b2775ee51038833967c5&ipo=images",
    start: "2022-05-15 17:00",
    end: "2022-05-15 19:00",
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
    start: "2022-11-30 13:00",
    end: "2022-11-30 18:00",
    tag: ["multicultural", "music/arts", "family-friendly"],
    borough: "Manhattan",
    eventLink: "https://lacw.net/",
    status: "approved",
    longitude: "-74.19256591796875",
    latitude: "40.521690368652344",
  },
  {
    title: "NYC Pride March",
    address: "East Village, New York, NY, 10005",
    description:
      "The NYC Pride March is an annual event celebrating the LGBTQ community in New York City.",
    image:
      "https://cdn.vox-cdn.com/thumbor/WCQORxf3pX3gFvaGNJDY_smqkJ4=/0x0:3600x2025/1200x800/filters:focal(1512x725:2088x1301)/cdn.vox-cdn.com/uploads/chorus_image/image/64081690/983255578.jpg.0.jpg",
    start: "2023-06-26 11:00",
    end: "2023-06-26 17:00",
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
    start: "2022-12-03 12:00",
    end: "2022-12-04 18:00",
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
    address: "2655 Richmond Ave, Staten Island, NY, 10314",
    description:
      "Spread holiday cheer throughout the community with Christmas carols, festive crafts, sips and snacks, and more.",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nydailynews.com%2Fresizer%2Fwo_PpwUJsRuDhBm2uM2umWOmfkw%3D%2F1400x0%2Ftop%2Farc-anglerfish-arc2-prod-tronc.s3.amazonaws.com%2Fpublic%2FGD2U6JJ2G52EVGWI7IIEPRUTT4.jpg&f=1&nofb=1&ipt=de700b91c813bf4091a8f54354da3e6722cb488714bb85985120a12caed79a42&ipo=images",
    start: "2022-12-17 13:00",
    end: "2022-12-17 18:00",
    tag: ["holidays", "family-friendly", "outdoors"],
    borough: "Staten-Island",
    eventLink: "https://www.mallscenters.com/malls/new-york/staten-island-mall",
    status: "approved",
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
    start: "2022-12-11 13:00",
    end: "2022-12-11 18:00",
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
    start: "2022-12-17 8:30",
    end: "2022-12-17 10:30",
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
    start: "2022-12-01 13:00",
    end: "2022-12-01 17:00",
    tag: ["holidays", "family-friendly", "outdoors"],
    borough: "Staten-Island",
    eventLink:
      "https://www.eventbrite.com/e/queens-tech-night-2022-designing-new-york-tickets-445165611327?aff=ebdssbdestsearch",
    status: "approved",
    latitude: 40.74760623549599,
    longitude: -73.95513383089151,
  },
  {
    title: "Workforce1 Job Fair: Brooklyn",
    address:
      "East New York Urban Youth Corp Inc., 2324 Pitkin Avenue, Brooklyn NY 11207",
    description:
      "A wonderful employment opportunity for job seekers! We are recruiting within the following sectors Food Service, Security (Licensed), Customer Service, Human Services, and Maintenance. Please come dressed professionally with 2 or more printed copies of your upstartd resume.",
    image:
      "https://gray-wrdw-prod.cdn.arcpublishing.com/resizer/vIQMLTRQ9PxKVcxZdUWktUau848=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/4NJQM5U3X5BKJIVJDZQ33HRYUE.jpg",
    start: "2022-12-18 13:00",
    end: "2022-12-18 15:00",
    tag: ["employment", "city-services"],
    borough: "Brooklyn",
    eventLink: "https://www.nyc.gov/site/sbs/careers/recruitment-events.page",
    status: "approved",
    latitude: 40.66285955593711,
    longitude: -73.89626817708192,
  },
  {
    title: "Pictures With Santa in Brooklyn!",
    address: "Weylin, 175 Broadway Brooklyn, NY 11211",
    description:
      "Get your picture taken with Santa, right here in Brooklyn! Bring the kids, and make sure to dress up in your best holiday outfit.",
    image:
      "https://www.gannett-cdn.com/presto/2018/11/06/PNJM/c8666c42-8d45-4480-89e1-d5d6a7825bd2-Black_Friday_Willowbrook_Mall.JPG",
    start: "2022-12-18 12:00",
    end: "2022-12-18 16:00",
    tag: ["holidays", "family-friendly"],
    borough: "Brooklyn",
    eventLink:
      "https://www.eventbrite.com/e/pictures-with-santa-in-brooklyn-tickets-461541431847?aff=ebdssbdestsearch",
    status: "approved",
    latitude: 40.714526269767596,
    longitude: -73.96297397649256,
  },
  {
    title: "Yule Ball: Harry Potter (Book) Trivia",
    address: "Overlook, 225 East 44th Street New York, NY 10017",
    description:
      "Deck the Great Hall with boughs of holly, grab a dancing partner, and test your Harry Potter knowledge at our special holiday-themed Yule Ball: Harry Potter (Book) Trivia at Overlook NYC on Monday, December 5 at 8pm! ",
    image:
      "https://digitalage.com.tr/wp-content/uploads/2021/12/harry-potter-20-835.jpg",
    start: "2022-12-05 18:00",
    end: "2022-12-05 21:00",
    tag: ["holidays"],
    borough: "Manhattan",
    eventLink:
      "https://www.eventbrite.com/e/yule-ball-harry-potter-book-trivia-tickets-432257573037?aff=ebdssbdestsearch",
    status: "approved",
    latitude: 40.75187070318369,
    longitude: -73.97230586017716,
  },
  {
    title: "Farmhouse Family Day: Festive Colors",
    address: "The Wyckoff House Museum 5816 Clarendon Road Brooklyn, NY 11203",
    description:
      "Join us this December as we light up our Farmhouse Family Day with a paper stained glass activity at the Wyckoff House Museum, perfect for brightening up the long winter days ahead.",
    image:
      "https://wyckoffmuseum.org/wp-content/uploads/2019/11/Wykoff-101819-093-scaled-e1575168804130.jpg",
    start: "2022-12-17 11:00",
    end: "2022-12-17 14:00",
    tag: ["family-friendly", "education"],
    borough: "Brooklyn",
    eventLink:
      "https://www.eventbrite.com/e/farmhouse-family-day-festive-colors-tickets-420604267687?aff=ebdssbdestsearch",
    status: "approved",
    latitude: 40.68989098643826,
    longitude: -73.92103898142189,
  },
  {
    title: "Self-Defense Workshop with Jess Cassetta",
    address: "PUMA Flagship 609 5th Avenue New York, NY 10017",
    description:
      "Join the Mile High Run Club and Puma as they partner with nationally recognized self defense expert, Jennifer Cassetta to learn both mental and physical self defense techniques to help you avoid danger when possible and protect yourself when necessary.",
    image:
      "https://shoutoutla.com/wp-content/uploads/2022/03/c-JenniferCassetta__JenniferCassettabyMichaelCinquinoNovember2018349_1647897009817.jpg",
    start: "2022-12-10 07:45",
    end: "2022-12-10 09:15",
    tag: ["health", "sports"],
    borough: "Manhattan",
    eventLink:
      "https://www.eventbrite.com/e/self-defense-workshop-with-jess-cassetta-tickets-468822981157?aff=ebdssbdestsearch",
    status: "approved",
    latitude: 40.75790374285874,
    longitude: -73.97753608903936,
  },
];

module.exports = events;
