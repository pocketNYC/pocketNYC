const events = [
  {
    title: "Central Park Tour: Iconic Views of Central Park",
    address: "Central Park, NY",
    description:
      "Take our signature tour, and let Central Park Conservancy guides give you an insider's look at some of the most iconic features of the world's greatest urban park.",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg-vimbly-com-images.imgix.net%2Ffull_photos%2Fcentral-park-pedicab-tour-4.jpg%3Fauto%3Dcompress%26fit%3Dcrop%26h%3D490%26ixlib%3Dphp-1.2.1%26w%3D730&f=1&nofb=1&ipt=121f8762a9b462ccc9560bc64fa9397b9a8896f113384fb0be15072b8efd100c&ipo=images",
    date: "2022-11-24",
    time: "15:00",
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
    date: "2022-11-20",
    time: "18:00",
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
    date: "2022-11-16",
    time: "15:00",
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
    date: "2023-06-05",
    time: "12:00",
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
    date: "2022-11-26",
    time: "17:00",
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
    date: "2022-12-15",
    time: "16:00",
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
    date: "2022-05-15",
    time: "17:00",
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
    date: "2022-11-30",
    time: "13:00",
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
    date: "2023-06-26",
    time: "11:00",
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
    date: "2022-11-29",
    time: "13:00",
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
    date: "2022-12-17",
    time: "13:00",
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
    date: "2022-12-11",
    time: "14:00",
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
    date: "2022-12-17",
    time: "8:30",
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
    date: "2022-12-01",
    time: "13:00",
    tag: ["holidays", "family-friendly", "outdoors"],
    borough: "Staten-Island",
    eventLink:
      "https://www.eventbrite.com/e/queens-tech-night-2022-designing-new-york-tickets-445165611327?aff=ebdssbdestsearch",
    status: "approved",
    latitude: 40.74760623549599,
    longitude: -73.95513383089151,
  },
  {
    title: "Workfore1 Job Fair: Brooklyn",
    address:
      "East New York Urban Youth Corp Inc., 2324 Pitkin Avenue, Brooklyn NY 11207",
    description:
      "A wonderful employment opportunity for job seekers! We are recruiting within the following sectors Food Service, Security (Licensed), Customer Service, Human Services, and Maintenance. Please come dressed professionally with 2 or more printed copies of your updated resume.",
    image:
      "https://gray-wrdw-prod.cdn.arcpublishing.com/resizer/vIQMLTRQ9PxKVcxZdUWktUau848=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/4NJQM5U3X5BKJIVJDZQ33HRYUE.jpg",
    date: "2022-12-18",
    time: "13:00",
    tag: ["employment", "city-services"],
    borough: "Brooklyn",
    eventLink: "https://www.nyc.gov/site/sbs/careers/recruitment-events.page",
    status: "approved",
    latitude: 40.66285955593711,
    longitude: -73.89626817708192,
  },
  {
    title: "Puerto Rican Day Parade",
    address: "598 5th Ave, New York, NY 10036",
    description:
      "A parade designed to celebrate and advance Art, Culture and Education in the Puerto Rican community, both in Puerto Rico and the mainland U.S.",
    image:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2017_21/2013061/puerto-rican-day-parade.jpg",
    date: "2023-06-11",
    time: "12:00",
    tag: ["multi-cultural", "city-services", "outdoors"],
    borough: "Manhattan",
    eventLink: "https://www.nprdpinc.org",
    status: "approved",
    latitude: 40.7574893581487,
    longitude: -73.97824346208284,
  },
  {
    title: "Kwanzaa Crawl",
    address: "Commodore Barry Park, Flushing Ave, Brooklyn, NY 11201",
    description:
      "Kwanzaa Crawl® is a one-day event where people of the African diaspora join together to support Black-owned bars in their neighborhoods",

    image: "https://www.essence.com/wp-content/uploads/2019/12/Kwanzaa-Crawl-1832x1374.jpg",
    date: "2022-12-26",
    time: "12:00",
    tag: ["multi-cultural", "holidays"],
    borough: "Brooklyn",
    eventLink: "https://www.kwanzaacrawl.com",
    status: "approved",
    latitude: 40.69737502147545,
    longitude: -73.97888485874641,
  },
  {
    title: "Cedar Hill Sledding Extravaganza",
    address: "Cedar Hill, East Dr. &, 79th St Transverse, New York, 10021",
    description: "A free sledding event in NYC for people of all ages.",

    image:
      "https://wvstateparks.com/wp-content/uploads/2022/01/DSC07243-scaled.jpg",
    date: "2023-01-13",
    time: "12:00",
    tag: ["Family-friendly", "holidays", "outdoors"],
    borough: "Manhattan",
    eventLink: "https://secretnyc.co/sledding-in-nyc/",
    status: "approved",
    latitude: 40.777475637062985,
    longitude: -73.96620708942594,
  },
  {
    title: "Toys for Tots Distribution",
    address:
      "Queens Community House - Forest Hills Community Center, 108-25 62nd Dr, Queens, NY 11375",
    description:
      "Toys for Tots is a program run by the United States Marine Corps Reserve which distributes toys to children whose parents cannot afford to buy them gifts for Christmas.",

    image:
      "https://www.powelltribune.com/uploads/original/20201029-093510-Gift-1.jpg",
    date: "2022-12-23",
    time: "17:00",
    tag: ["family-friendly", "holidays"],
    borough: "Queens",
    eventLink:
      "https://brooklyn-ny.toysfortots.org/local-coordinator-sites/lco-sites/default.aspx?nPageID=100&nPreviewInd=200&nRedirectInd=3",
    status: "approved",
    latitude: 40.739672343419386,
    longitude: -73.84941062842637,
  },
  {
    title: "Roller-skating Lessons | Pier 2",
    address: "150 Furman St, Pier 2, Brooklyn, NY 11201",
    description:
      "Everyone is welcomed at this fun and immersive roller-skating class. All you need to bring is a positive attitude and willingness to learn... everything else will be provided.",

    image:
      "https://images.squarespace-cdn.com/content/v1/5fed90bc8500a82fe9d33785/1654574029429-98Q3Z56IFQW2A6U4VHMD/private-lesson.jpg",
    date: "2022-12-26",
    time: "12:00",
    tag: ["outdoors", "family-friendly", "sports"],
    borough: "Brooklyn",
    eventLink: "https://www.brooklynbridgeskating.com/",
    status: "approved",
    latitude: 40.6997147822431,
    longitude: -73.9987746181839,
  },
  {
    title: "Girls Who Code",
    address: "485 Clawson St, Staten Island, NY 10306",
    description:
      "A day of learning the fundamentals of computer science for free. This event aims to introduce school-aged girls to the vast and ever growing world of tech",

    image:
      "https://api.time.com/wp-content/uploads/2014/07/girls-who-code-tech-camp.jpg",
    date: "2022-02-26",
    time: "10:00",
    tag: ["education"],
    borough: "Brooklyn",
    eventLink: "https://girlswhocode.com",
    status: "approved",
    latitude: 40.574098173799875,
    longitude: -74.11939145168874,
  },
];

module.exports = events;
