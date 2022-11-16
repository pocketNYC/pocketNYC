const events = [
  {
    title: "Central Park Tour: Iconic Views of Central Park",
    address: "Central Park, NY",
    description:
      "Take our signature tour, and let Central Park Conservancy guides give you an insider's look at some of the most iconic features of the world's greatest urban park.",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg-vimbly-com-images.imgix.net%2Ffull_photos%2Fcentral-park-pedicab-tour-4.jpg%3Fauto%3Dcompress%26fit%3Dcrop%26h%3D490%26ixlib%3Dphp-1.2.1%26w%3D730&f=1&nofb=1&ipt=121f8762a9b462ccc9560bc64fa9397b9a8896f113384fb0be15072b8efd100c&ipo=images",
    date: "2022-11-24",
    time: "3:00pm",
    tag: ["outdoors", "family-friendly"],
    borough: "Manhattan",
    eventLink: "https://www.centralpark.com/tours",
    status: "pending",
    longitude: "-73.965400695801",
    latitude: "40.660701751709",
    userId: 1,
  },
  {
    title: "Bryant Park Winter Village Tree Lighting Ceremony",
    address: "Bryant Park, 42nd Street and Sixth Avenue, New York, NY, 10018",
    description:
      "This year's tree is a 50-foot Norway spruce that will be lit during a fireworks display. Olympic-medalist Johnny Weir will be among the talented skaters to hit the ice rink for a special performance that will include live music.",
    image:
      "https://secretnyc.co/wp-content/uploads/2017/11/bryparktree4-1024x710.jpg",
    date: "2022-11-20",
    time: "6:00pm",
    tag: ["outdoors", "family-friendly", "music/arts"],
    borough: "Manhattan",
    eventLink: "https://bryantpark.org/",
    status: "pending",
    longitude: "40.660701751709",
    latitude: "-73.965400695801",
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
    date: "2022-11-02",
    time: "3:00pm",
    tag: ["outdoors", "family-friendly"],
    borough: "Queens",
    eventLink:
      "https://home.nps.gov/gate/learn/historyculture/jamaica-bay-wildlife-refuge.htm",
    status: "pending",
    longitude: "40.660701751709",
    latitude: "-73.965400695801",
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
    time: "12:00pm",
    eventLink: "https://theculturefest.nyc/",
    tag: ["multicultural", "outdoors"],
    borough: "Manhattan",
    status: "pending",
    longitude: "-73.965400695801",
    latitude: "40.660701751709",
    userId: 4,
  },
  {
    title: "Stargazing",
    address: "Gansevoort and West 30 St., New York City, NY 10011",
    description:
      "Head to the High Line each Tuesday night for a romantic walk along the park and a chance to take a closer look at the stars.",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.jharchitecture.ie%2Fwp-content%2Fuploads%2F2011%2F12%2F0011.jpg&f=1&nofb=1&ipt=3dba70fe25fe6f960af803207e27bcee6a699b356393b561c391591c5ff47573&ipo=images",
    date: "2022-11-24",
    time: "5:00pm",
    tag: ["family-friendly"],
    borough: "Manhattan",
    eventLink: "https://www.thehighline.org/",
    status: "pending",
    longitude: "-73.965400695801",
    latitude: "40.660701751709",
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
    time: "4:00-6:00pm",
    tag: ["music/arts", "outdoors"],
    borough: "Brooklyn",
    eventLink:
      "https://www.nyc.gov/site/dycd/services/after-school/schools-out-new-york-city-sonyc.page",
    status: "pending",
    longitude: "-73.87855219841",
    latitude: "40.876696912441",
  },
  {
    title: "Bronx Sports Extravaganza: Flag Football and Softball",
    address: "765 Manida Street Bronx, New York, NY, 10474",
    description:
      "Kids ages 6-12 are invited for free sports instruction at Hunts Point Recreation Center!",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bxtimes.com%2Fwp-content%2Fuploads%2F2018%2F08%2F32-a-palsportsday-2018-08-10-bx01_z-768x512.jpg&f=1&nofb=1&ipt=2512493b9c86cf516bf9fcb87401d01bdbbb3dd25f37b2775ee51038833967c5&ipo=images",
    date: "2022-05-15",
    time: "5:00pm",
    tag: ["sports", "multicultural", "family-friendly"],
    borough: "Bronx",
    eventLink:
      "https://www.nyc.gov/events/bronx-sports-extravaganza-street-hockey/12059/7",
    status: "pending",
    longitude: "-74.19256591796875",
    latitude: "40.521690368652344",
  },
  {
    title: "Latin American Cultural Fiesta",
    address: "West 34th Street, New York, NY, 10001",
    description:
      "New York City-wide annual festival, showcasing the richness and variety of the cultures of Latin America, the Caribbean, and Spain.",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DhXKTK_C8oiXsee2dYVYlAHaFX%26pid%3DApi&f=1&ipt=47576a1b788c1fdfd2634e4cb6349c3f03f625d18eec39e846f915ad3fe62802&ipo=images",
    date: "2022-11-30",
    time: "1:00pm",
    tag: ["multicultural", "music/arts", "family-friendly"],
    borough: "Manhattan",
    eventLink: "https://lacw.net/",
    status: "pending",
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
    time: "11:00am",
    tag: ["outdoors"],
    borough: "Manhattan",
    eventLink: "https://www.nycpride.org/event/nyc-pride-march",
    status: "pending",
    longitude: "-74.19256591796875",
    latitude: "40.521690368652344",
  },
  {
    title: "Dauphinette's Holiday Flea Market in Dumbo",
    address: "53 Bridge St 53 Bridge Street Brooklyn, NY 11201",
    description:
      "First-ever Holiday Flea Market! We're opening up our Dumbo studio and filling it with samples, vintage, and much, much more.",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F373168129%2F311252113458%2F1%2Foriginal.20221013-204056?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=ee276cff241c6d959da7dcfaf0a6cfde",
    date: "2022-11-29",
    time: "1:00pm",
    tag: ["holidays", "family-friendly"],
    borough: "Brooklyn",
    eventLink:
      "https://www.eventbrite.com/e/dauphinettes-holiday-flea-market-in-dumbo-tickets-431279497587?aff=ebdssbdestsearch",
    status: "pending",
    longitude: "-74.19256591796875",
    latitude: "40.521690368652344",
  },
  {
    title: "Christmas Caroling at Staten Island Mall",
    address: "2655 Richmond Ave, Staten Island, NY, 10314",
    description:
      "Spread holiday cheer throughout the community with Christmas carols, festive crafts, sips and snacks, and more.",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nydailynews.com%2Fresizer%2Fwo_PpwUJsRuDhBm2uM2umWOmfkw%3D%2F1400x0%2Ftop%2Farc-anglerfish-arc2-prod-tronc.s3.amazonaws.com%2Fpublic%2FGD2U6JJ2G52EVGWI7IIEPRUTT4.jpg&f=1&nofb=1&ipt=de700b91c813bf4091a8f54354da3e6722cb488714bb85985120a12caed79a42&ipo=images",
    date: "2022-12-17",
    time: "1:00pm",
    tag: ["holidays", "family-friendly", "outdoors"],
    borough: "Staten-Island",
    eventLink: "https://www.mallscenters.com/malls/new-york/staten-island-mall",
    status: "pending",
    longitude: "-74.19256591796875",
    latitude: "40.521690368652344",
  },
];

module.exports = events;
