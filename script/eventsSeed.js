const events = [
  {
    title: "Central Park Tour: Iconic Views of Central Park",
    address: "Central Park, NY",
    description:
      "Take our signature tour, and let Central Park Conservancy guides give you an insider's look at some of the most iconic features of the world's greatest urban park.",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg-vimbly-com-images.imgix.net%2Ffull_photos%2Fcentral-park-pedicab-tour-4.jpg%3Fauto%3Dcompress%26fit%3Dcrop%26h%3D490%26ixlib%3Dphp-1.2.1%26w%3D730&f=1&nofb=1&ipt=121f8762a9b462ccc9560bc64fa9397b9a8896f113384fb0be15072b8efd100c&ipo=images",
    start: "2022-12-30 13:00",
    end: "2022-12-30 15:00",
    tags: ["outdoors", "family-friendly"],
    borough: "Manhattan",
    eventLink: "https://www.centralpark.com/tours",
    status: "approved",
    latitude: "40.78163154967519",
    longitude: "-73.96667599082012",
  },
  {
    title: "Bryant Park Winter Village Tree Lighting Ceremony",
    address: "Bryant Park, 42nd Street and Sixth Avenue, New York, NY, 10018",
    description:
      "This year's tree is a 50-foot Norway spruce that will be lit during a fireworks display. Olympic-medalist Johnny Weir will be among the talented skaters to hit the ice rink for a special performance that will include live music.",
    image:
      "https://secretnyc.co/wp-content/uploads/2017/11/bryparktree4-1024x710.jpg",
    start: "2022-12-20 17:00",
    end: "2022-12-20 22:00",
    tags: ["outdoors", "family-friendly", "arts"],
    borough: "Manhattan",
    eventLink: "https://bryantpark.org/",
    status: "pending",
    latitude: "40.75361130200964",
    longitude: "-73.98318113600838",
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
    start: "2022-12-01 12:00",
    end: "2022-12-01 18:00",
    tags: ["outdoors", "family-friendly"],
    borough: "Queens",
    eventLink:
      "https://home.nps.gov/gate/learn/historyculture/jamaica-bay-wildlife-refuge.htm",
    status: "pending",
    latitude: "40.61679384055135",
    longitude: "-73.82495690679576",
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
    tags: ["multicultural", "outdoors"],
    borough: "Manhattan",
    status: "pending",
    latitude: "40.660701751709",
    longitude: "-73.965400695801",
    userId: 4,
  },
  {
    title: "Stargazing Tuesdays at the High Line",
    address: "10th Ave and West 23rd St., New York City, NY 10011",
    description:
      "Head to the High Line each Tuesday night for a romantic walk along the park and a chance to take a closer look at the stars.",
    image:
      "https://www.nps.gov/articles/000/images/ARCH_stargazing.jpeg?maxwidth=650&autorotate=false",
    start: "2022-12-27 17:00",
    end: "2022-12-27 21:00",
    tags: ["family-friendly"],
    borough: "Manhattan",
    eventLink: "https://www.thehighline.org/",
    status: "approved",
    longitude: "-74.0048936460346",
    latitude: "40.7480534602401",
    userId: 5,
  },
  {
    title: "School's Out Summer Bash 2023",
    address: "1300 Greene Ave, Brooklyn, NY, 11237",
    description:
      "Celebrate the start of summer fun at Parks at our fun-filled School's Out Festival with inflatables, games, face painting, music, popcorn, and more!",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.timeout.com%2Fimages%2F102735335%2F1372%2F772%2Fimage.jpg&f=1&nofb=1&ipt=af220fff75ef2939b3edf0653278a7416bf1e5e4d5dc9d04a12e8d53157318ed&ipo=images",
    start: "2023-06-25 16:00",
    end: "2023-06-25 18:00",
    tags: ["arts", "outdoors"],
    borough: "Brooklyn",
    eventLink:
      "https://www.nyc.gov/site/dycd/services/after-school/schools-out-new-york-city-sonyc.page",
    status: "approved",
    latitude: "40.69803025985018",
    longitude: "-73.91866967089781",
  },
  // {
  //   title: "Bronx Sports Extravaganza: Flag Football and Softball",
  //   address: "765 Manida Street Bronx, New York, NY, 10474",
  //   description:
  //     "Kids ages 6-12 are invited for free sports instruction at Hunts Point Recreation Center!",
  //   image:
  //     "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bxtimes.com%2Fwp-content%2Fuploads%2F2018%2F08%2F32-a-palsportsday-2018-08-10-bx01_z-768x512.jpg&f=1&nofb=1&ipt=2512493b9c86cf516bf9fcb87401d01bdbbb3dd25f37b2775ee51038833967c5&ipo=images",
  //   start: "2023-05-15 17:00",
  //   end: "2023-05-15 19:00",
  //   tags: ["sports", "multicultural", "family-friendly"],
  //   borough: "Bronx",
  //   eventLink:
  //     "https://www.nyc.gov/events/bronx-sports-extravaganza-street-hockey/12059/7",
  //   status: "approved",
  //   latitude: "40.815130995747595",
  //   longitude: "-73.8890485869093",
  // },
  {
    title: "Latin American Cultural Fiesta",
    address: "West 34th Street, New York, NY, 10001",
    description:
      "New York City-wide annual festival, showcasing the richness and variety of the cultures of Latin America, the Caribbean, and Spain.",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DhXKTK_C8oiXsee2dYVYlAHaFX%26pid%3DApi&f=1&ipt=47576a1b788c1fdfd2634e4cb6349c3f03f625d18eec39e846f915ad3fe62802&ipo=images",
    start: "2023-08-30 13:00",
    end: "2023-08-30 18:00",
    tags: ["multicultural", "arts", "family-friendly"],
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
    start: "2023-06-26 11:00",
    end: "2023-06-26 17:00",
    tags: ["outdoors"],
    borough: "Manhattan",
    eventLink: "https://www.nycpride.org/event/nyc-pride-march",
    status: "pending",
    latitude: "40.74228682409983",
    longitude: "-73.98798057341881",
  },
  {
    title: "Dauphinette's Holiday Flea Market in Dumbo",
    address: "53 Bridge Street Brooklyn, NY 11201",
    description:
      "First-ever Holiday Flea Market! We're opening up our Dumbo studio and filling it with samples, vintagse, and much, much more.",
    image:
      "https://cdn.vox-cdn.com/thumbor/_9_d8u8eAQfwX-Diuzoi0MlyRxw=/0x205:2460x1435/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/13592622/shutterstock_393727495.jpg",
    start: "2022-12-03 12:00",
    end: "2022-12-04 18:00",
    tags: ["holidays", "family-friendly"],
    borough: "Brooklyn",
    eventLink:
      "https://www.eventbrite.com/e/dauphinettes-holiday-flea-market-in-dumbo-tickets-431279497587?aff=ebdssbdestsearch",
    status: "approved",
    latitude: "40.70296041662417",
    longitude: "-73.98429778009917",
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
    tags: ["holidays", "family-friendly", "outdoors"],
    borough: "Staten-Island",
    eventLink: "https://www.mallscenters.com/malls/new-york/staten-island-mall",
    status: "approved",
    latitude: "40.582024341911826",
    longitude: "-74.1657740714884",
  },
  {
    title: "Lower East Side Holiday Parade 2022",
    address: "440 Grand St, New York, NY 10002",
    description:
      "Spread holiday cheer throughout the community with Christmas carols, festive crafts, sips and snacks, and more.",
    image:
      "https://www.tripsavvy.com/thmb/dLVe8--_UwBa7nYniaREpBUPiUQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-895677840-5c1a715946e0fb0001576046.jpg",
    start: "2022-12-19 13:00",
    end: "2022-12-19 18:00",
    tags: ["holidays", "family-friendly", "outdoors"],
    borough: "Manhattan",
    eventLink: "https://www.nyc.gov/events/les-holiday-parade-2022/430802/1",
    status: "approved",
    latitude: "40.71545118502942",
    longitude: "-73.98455757996675",
  },
  {
    title: "Forest Fitness",
    address: "Fort Tryon Park, Riverside, Dr To Broadway, New York, NY 10040",
    description:
      "A free, year-round fitness class that incorporates climbing multiple staircases, stretches and strengthening exercises, notable tree identification, and forest bathing. ",
    image:
      "https://images.seattletimes.com/wp-content/uploads/2022/03/WEB-2016-06-08RHawk400Parks.jpg?d=780x507",
    start: "2023-05-17 8:30",
    end: "2023-05-17 10:30",
    tags: ["health", "sports", "outdoors"],
    borough: "Manhattan",
    eventLink: "https://www.nyc.gov/events/forest-fitness/331550/47",
    status: "approved",
    latitude: "40.86181428562175",
    longitude: "-73.93291955642407",
  },
  {
    title: "Queens Tech Night 2022 - Designing New York",
    address: "Culture Lab LIC, 5-25 46th Avenue Queens, NY 11101",
    description:
      "Queens Tech Night returns for 2022 with a special meetup focused on design in, of, and for New York City.",
    image:
      "https://qns.com/wp-content/uploads/2020/01/November-Crowd-Thank-You.jpg",
    start: "2022-12-01 13:00",
    end: "2022-12-01 17:00",
    tags: ["family-friendly", "outdoors"],
    borough: "Staten-Island",
    eventLink:
      "https://www.eventbrite.com/e/queens-tech-night-2022-designing-new-york-tickets-445165611327?aff=ebdssbdestsearch",
    status: "approved",
    latitude: "40.74760623549599",
    longitude: "-73.95513383089151",
  },
  {
    title: "Workforce1 Job Fair(In-Person): Brooklyn",
    address:
      "East New York Urban Youth Corp Inc., 2324 Pitkin Avenue, Brooklyn NY 11207",
    description:
      "A wonderful employment opportunity for job seekers! We are recruiting within the following sectors Food Service, Security (Licensed), Customer Service, Human Services, and Maintenance. Please come dressed professionally with 2 or more printed copies of your upstartd resume.",
    image:
      "https://gray-wrdw-prod.cdn.arcpublishing.com/resizer/vIQMLTRQ9PxKVcxZdUWktUau848=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/4NJQM5U3X5BKJIVJDZQ33HRYUE.jpg",
    start: "2023-06-18 13:00",
    end: "2023-06-18 15:00",
    tags: ["employment", "city services"],
    borough: "Brooklyn",
    eventLink: "https://www.nyc.gov/site/sbs/careers/recruitment-events.page",
    status: "approved",
    latitude: "40.66285955593711",
    longitude: "-73.89626817708192",
  },
  // {
  //   title: "Puerto Rican Day Parade",
  //   address: "598 5th Ave, New York, NY 10036",
  //   description:
  //     "A parade designed to celebrate and advance Art, Culture and Education in the Puerto Rican community, both in Puerto Rico and the mainland U.S.",
  //   image:
  //     "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2017_21/2013061/puerto-rican-day-parade.jpg",
  //   start: "2023-06-11 11:00",
  //   end: "2023-06-11 16:00",
  //   tags: ["multicultural", "city services", "outdoors"],
  //   borough: "Manhattan",
  //   eventLink: "https://www.nprdpinc.org",
  //   status: "approved",
  //   latitude: "40.7574893581487",
  //   longitude: "-73.97824346208284",
  // },
  {
    title: "Kwanzaa Crawl",
    address: "Commodore Barry Park, Flushing Ave, Brooklyn, NY 11201",
    description:
      "Kwanzaa Crawl® is a one-day event where people of the African diaspora join together to support Black-owned bars in their neighborhoods",

    image:
      "https://www.essence.com/wp-content/uploads/2019/12/Kwanzaa-Crawl-1832x1374.jpg",
    start: "2022-12-26 18:00",
    end: "2022-12-26 23:00",
    tags: ["multicultural", "holidays"],
    borough: "Brooklyn",
    eventLink: "https://www.kwanzaacrawl.com",
    status: "approved",
    latitude: "40.69737502147545",
    longitude: "-73.97888485874641",
  },
  {
    title: "Cedar Hill Sledding Extravaganza",
    address: "Cedar Hill, East Dr. &, 79th St Transverse, New York, 10021",
    description: "A free sledding event in NYC for people of all ages.",

    image:
      "https://wvstateparks.com/wp-content/uploads/2022/01/DSC07243-scaled.jpg",
    start: "2023-01-13 10:00",
    end: "2023-01-13 13:00",
    tags: ["family-friendly", "holidays", "outdoors"],
    borough: "Manhattan",
    eventLink: "https://secretnyc.co/sledding-in-nyc/",
    status: "approved",
    latitude: "40.777475637062985",
    longitude: "-73.96620708942594",
  },
  {
    title: "Toys for Tots Distribution",
    address:
      "Queens Community House - Forest Hills Community Center, 108-25 62nd Dr, Queens, NY 11375",
    description:
      "Toys for Tots is a program run by the United States Marine Corps Reserve which distributes toys to children whose parents cannot afford to buy them gifts for Christmas.",

    image:
      "https://www.powelltribune.com/uploads/original/20201029-093510-Gift-1.jpg",
    start: "2022-12-23 17:00",
    end: "2022-12-23 19:00",
    tags: ["family-friendly", "holidays"],
    borough: "Queens",
    eventLink:
      "https://brooklyn-ny.toysfortots.org/local-coordinator-sites/lco-sites/default.aspx?nPageID=100&nPreviewInd=200&nRedirectInd=3",
    status: "approved",
    latitude: "40.739672343419386",
    longitude: "-73.84941062842637",
  },
  {
    title: "Roller-Skating Lessons at Pier 2",
    address: "150 Furman St, Pier 2, Brooklyn, NY 11201",
    description:
      "Everyone is welcomed at this fun and immersive roller-skating class. All you need to bring is a positive attitude and willingness to learn... everything else will be provided.",

    image:
      "https://images.squarespace-cdn.com/content/v1/5fed90bc8500a82fe9d33785/1654574029429-98Q3Z56IFQW2A6U4VHMD/private-lesson.jpg",
    start: "2022-12-28 12:00",
    end: "2022-12-28 16:00",
    tags: ["outdoors", "family-friendly", "sports"],
    borough: "Brooklyn",
    eventLink: "https://www.brooklynbridgeskating.com/",
    status: "approved",
    latitude: "40.6997147822431",
    longitude: "-73.9987746181839",
  },
  {
    title: "Girls Who Code",
    address: "485 Clawson St, Staten Island, NY 10306",
    description:
      "A day of learning the fundamentals of computer science for free. This event aims to introduce school-aged girls to the vast and ever growing world of tech",
    image:
      "https://api.time.com/wp-content/uploads/2014/07/girls-who-code-tech-camp.jpg",
    start: "2023-02-26 11:00",
    end: "2023-02-26 13:30",
    tags: ["education"],
    borough: "Brooklyn",
    eventLink: "https://girlswhocode.com",
    status: "approved",
    latitude: "40.574098173799875",
    longitude: "-74.11939145168874",
  },
  {
    title: "Holiday Pictures With Santa in Brooklyn!",
    address: "Weylin, 175 Broadway Brooklyn, NY 11211",
    description:
      "Get your picture taken with Santa, right here in Brooklyn! Bring the kids, and make sure to dress up in your best holiday outfit.",
    image:
      "https://www.gannett-cdn.com/presto/2018/11/06/PNJM/c8666c42-8d45-4480-89e1-d5d6a7825bd2-Black_Friday_Willowbrook_Mall.JPG",
    start: "2022-12-18 12:00",
    end: "2022-12-18 16:00",
    tags: ["holidays", "family-friendly"],
    borough: "Brooklyn",
    eventLink:
      "https://www.eventbrite.com/e/pictures-with-santa-in-brooklyn-tickets-461541431847?aff=ebdssbdestsearch",
    status: "approved",
    latitude: "40.714526269767596",
    longitude: "-73.96297397649256",
  },
  {
    title: "Yule Ball: Harry Potter (Book) Trivia",
    address: "Overlook, 225 East 44th Street New York, NY 10017",
    description:
      "Deck the Great Hall with boughs of holly, grab a dancing partner, and test your Harry Potter knowledge at our special holiday-themed Yule Ball: Harry Potter (Book) Trivia at Overlook NYC on Monday, December 5 at 8pm! We'll have five rounds of trivia, covering all seven books in the Harry Potter series, with a fun holiday twist.",
    image:
      "https://digitalage.com.tr/wp-content/uploads/2021/12/harry-potter-20-835.jpg",
    start: "2022-12-05 18:00",
    end: "2022-12-05 21:00",
    tags: ["holidays"],
    borough: "Manhattan",
    eventLink:
      "https://www.eventbrite.com/e/yule-ball-harry-potter-book-trivia-tickets-432257573037?aff=ebdssbdestsearch",
    status: "approved",
    latitude: "40.75187070318369",
    longitude: "-73.97230586017716",
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
    tags: ["family-friendly", "education"],
    borough: "Brooklyn",
    eventLink:
      "https://www.eventbrite.com/e/farmhouse-family-day-festive-colors-tickets-420604267687?aff=ebdssbdestsearch",
    status: "approved",
    latitude: "40.68989098643826",
    longitude: "-73.92103898142189",
  },
  {
    title: "Self-Defense Workshop with Jess Cassetta",
    address: "PUMA Flagship 609 5th Avenue New York, NY 10017",
    description:
      "Join the Mile High Run Club and Puma as they partner with nationally recognized self defense expert, Jennifer Cassetta to learn both mental and physical self defense techniques to help you avoid danger when possible and protect yourself when necessary. You'll strike, elbow and knee your way to feeling strong, safe and powerful from the streets to the trail. No prior experience is necessary.",
    image:
      "https://shoutoutla.com/wp-content/uploads/2022/03/c-JenniferCassetta__JenniferCassettabyMichaelCinquinoNovember2018349_1647897009817.jpg",
    start: "2022-12-10 07:45",
    end: "2022-12-10 09:15",
    tags: ["health", "sports"],
    borough: "Manhattan",
    eventLink:
      "https://www.eventbrite.com/e/self-defense-workshop-with-jess-cassetta-tickets-468822981157?aff=ebdssbdestsearch",
    status: "approved",
    latitude: "40.75790374285874",
    longitude: "-73.97753608903936",
  },
  {
    title: "New York Tech Career Fair: Exclusive Tech Hiring Event",
    address: "Virtual",
    description:
      "Tech Career Fair focus on helping companies achieve their diversity and inclusivity initiative with more diverse non-traditional candidates",
    image:
      "https://cdn.uconnectlabs.com/wp-content/uploads/sites/25/2020/10/vitual-fair-image.jpg",
    start: "2023-01-13 12:00",
    end: "2022-12-10 15:00",
    tags: ["employment"],
    borough: "Virtual",
    eventLink:
      "https://www.eventbrite.com/e/new-york-tech-career-fair-exclusive-tech-hiring-event-tickets-146584912419?aff=ebdssbcitybrowse",
    status: "approved",
    latitude: "40.68942021855546",
    longitude: "-74.04442530020495",
  },
  {
    title: "Free Fashion NYC Week Runway Show",
    address: "347 W 34th St. 347 West 34th Street New York, NY 10001",
    description:
      "Free NYC Fashion Week runway show for those looking to get a sneak peek at new fashion trends!",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F387440129%2F555841001127%2F1%2Foriginal.20221105-004831?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=252%2C809%2C3846%2C1923&s=7eee74fb5e504c8516b1ce81b628b33e",
    start: "2023-02-11 19:00",
    end: "2023-02-11 22:00",
    tags: ["health", "sports"],
    borough: "Manhattan",
    eventLink:
      "https://www.eventbrite.com/e/free-fashion-nyc-week-runway-show-tickets-462044025117?aff=ebdssbdestsearch",
    status: "approved",
    latitude: "40.75344819604527",
    longitude: "-73.99523591741003",
  },
  {
    title: "New York Career Fair",
    address: "Hilton Doubletree Hotel 525 8th Ave New York City, NY 10018",
    description:
      "Meet live with New York City Employers on Friday, March 3, 2023",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F394575169%2F316131771624%2F1%2Foriginal.20221116-141434?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2000%2C1000&s=b726e56e4f6863186083a19b7e130e81",
    start: "2023-03-03 09:30",
    end: "2023-03-03 12:30",
    tags: ["employment"],
    borough: "Manhattan",
    eventLink:
      "https://www.eventbrite.com/e/new-york-career-fair-tickets-469118434867?aff=ebdssbdestsearch",
    status: "pending",
    latitude: "40.75397385294336",
    longitude: "-73.99263607136704",
  },
  {
    title: "Live Jazz at Nook",
    address: "Nook 45 Irving Avenue #Unit 1 Brooklyn, NY 11237",
    description: "Free Live Jazz at Nook in Brooklyn!",
    image:
      "https://images.pexels.com/photos/733767/pexels-photo-733767.jpeg?auto=compress&cs=tinysrgb&w=800",
    start: "2023-03-18 20:00",
    end: "2023-03-19 00:00",
    tags: ["music"],
    borough: "Brooklyn",
    eventLink:
      "https://www.eventbrite.com/e/live-jazz-at-nook-tickets-205149606997?aff=ebdssbdestsearch",
    status: "approved",
    latitude: "40.70540857713098",
    longitude: "-73.92452754439564",
  },
  {
    title: "Serious/Long-Term Relationship New York City Virtual Speed Dating",
    address: "Virtual",
    description:
      "Meet singles online! Single and Ready to Mingle? Then make yourself known and register today for Speed Dating for Professional Singles.",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F203778769%2F440079347442%2F1%2Foriginal.20211221-211745?w=720&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C9%2C1226%2C613&s=c160feaa579192e40ba2c9ebcc6992a9",
    start: "2023-02-03 19:00",
    end: "2023-02-03 20:00",
    tags: ["social"],
    borough: "Virtual",
    eventLink:
      "https://www.eventbrite.com/e/seriouslong-term-relationship-new-york-city-virtual-speed-dating-tickets-231302541127?aff=ebdssbdestsearch",
    status: "approved",
    latitude: "40.68945275930983",
    longitude: "-74.04451113090403",
  },
  {
    title:
      "Nutrition 101 Webinar: Increase Your Metabolism and Burn Fat Naturally",
    address: "Virtual",
    description:
      "Join Dr. Kevin to learn how to increase your metabolism and burn fat! Don't get confused with all the nutrition information overload online.",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F156221439%2F158727551274%2F1%2Foriginal.20210926-173426?w=720&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C163%2C1200%2C600&s=bf0ef96a0216ecc41900987160d90f74",
    start: "2023-03-06 19:00",
    end: "2023-03-06 20:00",
    tags: ["health"],
    borough: "Virtual",
    eventLink:
      "https://www.eventbrite.com/e/nutrition-101-webinar-increase-your-metabolism-and-burn-fat-naturally-tickets-75905903601?aff=ebdssbdestsearch",
    status: "approved",
    latitude: "40.68945275930983",
    longitude: "-74.04451113090403",
  },
  {
    title: "Stand-Up Comedy",
    address: "Postmark Cafe 326 6th Street Brooklyn, NY 11215",
    description:
      "The longest running stand-up comedy show in Brooklyn presented by Turner Sparks and Aaron Kominos-Smith (now in it’s 15th year)!",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F104189980%2F57237649397%2F1%2Foriginal.jpg?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C112%2C960%2C480&s=42cccd93ae72f091bc0ec81ca9aa051c",
    start: "2023-02-22 20:00",
    end: "2023-02-22 21:15",
    tags: ["social"],
    borough: "Brooklyn",
    eventLink:
      "https://www.eventbrite.com/e/free-standup-comedy-in-brooklyn-with-top-comics-from-nyc-tickets-44540055505?aff=ebdssbdestsearch",
    status: "approved",
    latitude: "40.67126471481234",
    longitude: "-73.98518887323263",
  },
  {
    title: "ArtAccess: Open Studio at Queens Museum",
    address: "Queens Museum Meridian Road Queens, NY 11368",
    description:
      "The Queens Museum welcomes teens (ages 13+) and adults with disabilities to join us at the museum for art-making and exhibition exploration.",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F336569939%2F686900417773%2F1%2Foriginal.20220209-174018?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C251%2C3000%2C1500&s=14d6b5212d97b1e1ab9b6910f9d886e8",
    start: "2023-04-01 14:00",
    end: "2023-12-10 16:00",
    tags: ["disability services", "family-friendly", "arts"],
    borough: "Queens",
    eventLink:
      "https://www.eventbrite.com/e/artaccess-open-studio-teensadults-registration-403646105367?aff=ebdssbdestsearch",
    status: "approved",
    latitude: "40.746052160111056",
    longitude: "-73.8466710578864",
  },
  {
    title: "Poetry Writing Workshop",
    address: "Hudson Park Library 66 Leroy Street New York, NY 10014",
    description:
      "Free IN-PERSON poetry writing workshop for all levels focusing on generating new work and sharing in a welcoming environment.",
    image:
      "https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    start: "2023-01-17 16:00",
    end: "2023-01-17 17:30",
    tags: ["education, social"],
    borough: "Manhattan",
    eventLink:
      "https://www.eventbrite.com/e/poetry-writing-workshop-tickets-412311584047?aff=ebdssbdestsearch",
    status: "approved",
    latitude: "40.7302469836151",
    longitude: "-74.0052027290396",
  },
  {
    title: "Harlem Car Seat Safety Training",
    address:
      "East Harlem Neighborhood Health Action Center 158 East 115th Street New York, NY 10029",
    description:
      "NYC Department of Transportation’s Office of Safety Education and Outreach offers vibrant workshops, publications and trainings. Helping parents, families and caregivers reduce injuries and keep children safe in New York City's traffic environment and at home.",
    image:
      "https://images.pexels.com/photos/6182086/pexels-photo-6182086.jpeg?auto=compress&cs=tinysrgb&w=800",
    start: "2023-01-17 13:30",
    end: "2023-01-17 15:40",
    tags: ["city services", "education"],
    borough: "Manhattan",
    eventLink:
      "https://www.eventbrite.com/e/harlem-car-seat-safety-training-tickets-466478438567?aff=ebdssbdestsearch",
    status: "approved",
    latitude: "40.797845581495025",
    longitude: " -73.9419633878003",
  },
  {
    title: "Newborn Care Course",
    address: "1826 Arthur Avenue The Bronx, NY 10457",
    description:
      "Newborn Care Course hosted by the Tremont Neighborhood Health Action Center.",
    image: "https://medlineplus.gov/images/InfantandNewbornCare_share.jpg",
    start: "2023-03-01 18:00",
    end: "2023-03-01 20:00",
    tags: ["family-friendly", "education"],
    borough: "Bronx",
    eventLink:
      "https://www.eventbrite.com/e/free-newborn-care-course-tremont-tickets-469593856867?aff=ebdssbdestsearch",
    status: "approved",
    latitude: "40.844283504615426",
    longitude: "-73.89408685788342",
  },
  {
    title: "English Conversation Club",
    address: "2147 Barnes Avenue Bronx, NY 10462",
    description:
      "Come to the Pelham Parkway-Van Nest Library and meet other people who are practicing English, just like you!",
    image:
      "https://media.istockphoto.com/id/1191628351/photo/share-your-vision-with-people-wholl-work-to-achieve-it.jpg?s=612x612&w=0&k=20&c=CpcQX_NhQ_k9mNlY01N3lOZmHimsSdwVFrJD8YZlpKo=",
    start: "2023-02-10 15:00",
    end: "2023-02-10 16:30",
    tags: ["education", "social"],
    borough: "Bronx",
    eventLink:
      "https://www.eventbrite.com/e/english-conversation-club-tickets-490945470117?aff=ebdssbdestsearch",
    status: "approved",
    latitude: "40.85513598736674",
    longitude: "-73.86414618671903",
  },
  {
    title: "Hashtag Lunchbag Queens",
    address: "233-10 Linden Boulevard Queens, NY 11411",
    description:
      "Come join us at Cambria Center for the Gifted Child for #HashtagLunchbag Queens and help us end world hunger one lunch bag at a time!",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F412984529%2F2452504192%2F1%2Foriginal.20221221-162006?w=720&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C76%2C1080%2C540&s=837404aecc4ba7fc95f6eb08027887f6",
    start: "2023-02-05 12:00",
    end: "2022-02-05 14:00",
    tags: ["family-friendly", "social"],
    borough: "Queens",
    eventLink:
      "https://www.eventbrite.com/e/hashtag-lunchbag-queens-tickets-493903547807?aff=ebdssbdestsearch",
    status: "approved",
    latitude: "40.691133449430026",
    longitude: "-73.728643873232",
  },
  {
    title: "H.E.A.L.T.H for Youths Pop-up Pantry Drop Off Site",
    address: "1 Clyde Place Staten Island, NY 10301",
    description:
      "Join us in feeding our community by dropping off food/non-perishable goods!",
    image:
      "https://summitlife.org/wp-content/uploads/2016/01/Second-Harvest-Items.jpg",
    start: "2023-02-19 09:00",
    end: "2023-02-19 11:00",
    tags: ["food"],
    borough: "Staten-Island",
    eventLink:
      "https://www.eventbrite.com/e/health-for-youths-pop-up-pantry-program-tickets-459702240777?aff=ebdssbdestsearch",
    status: "approved",
    latitude: "40.64007808622913",
    longitude: "-74.09030263090557",
  },
  {
    title: "Tree Care and Pruning by NYC Parks GreenThumb",
    address:
      "College Avenue Community Garden 1420 College Ave. Bronx, NY 10456",
    description:
      "In this workshop participants will learn some of the basic biology around pruning (stem structure, vascular tissue), the function of pruning, some of the primary types of pruning (thinning cuts, reduction cuts, heading cuts), and how to identify healthy tree structure.",
    image:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F382254859%2F234449876952%2F1%2Foriginal.20221028-144744?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C303%2C3024%2C1512&s=5a4d4d99fbae291db5e5f5e5ff1cb4a8",
    start: "2022-02-25 11:00",
    end: "2022-02-25 13:00",
    tags: ["city services", "education", "outdoors"],
    borough: "Bronx",
    eventLink:
      "https://www.eventbrite.com/e/tree-care-and-pruning-tickets-453898301037?aff=ebdssbdestsearch",
    status: "approved",
    latitude: "40.83820293652829",
    longitude: "-73.90990877322749",
  },
  {
    title: "Hands on History: Victorian Valentines",
    address: "King Manor Museum 150-03 Jamaica Avenue Queens, NY 11432",
    description:
      "Happy Valentine’s Day! Kick off the Season of Love with Victorian valentine making using reproductions of historic patterns and ephemera. Mean valentines, known as Vinegar Valentines, were also popular during this period, so broken hearts are welcome!",
    image:
      "https://images.squarespace-cdn.com/content/v1/5ef3ad9e35f57066d6bf11b9/a689d954-551f-4692-9c8c-f1802488e3ed/PXL_20210323_185106887.jpg?format=2500w",
    start: "2023-02-04 13:00",
    end: "2023-02-04 16:00",
    tags: ["family-friendly", "holidays"],
    borough: "Queens",
    eventLink:
      "https://www.eventbrite.com/e/hands-on-history-victorian-valentines-tickets-435732968037?aff=ebdssbdestsearch",
    status: "approved",
    latitude: "40.703229750788005",
    longitude: "-73.80343413701542",
  },
  {
    title: "Lunar New Year Celebration",
    address: "Queens Place Mall 8801 Queens Boulevard Queens, NY 11373",
    description:
      "Celebrate Lunar New Year and the Year of the Rabbit with Queens Place + New York Chinese Cultural Center! Traditional Chinese and Lion Dance Performances, Sugar Painting Demonstration + Giveaway, Festive Music, Raffles & More.",
    image:
      "https://imgs.6sqft.com/wp-content/uploads/2022/01/28131619/lion-dancers-on-CM-main-concourse.jpg",
    start: "2023-01-24 15:00",
    end: "2023-01-24 17:00",
    tags: ["family-friendly", "holidays"],
    borough: "Queens",
    eventLink:
      "https://www.eventbrite.com/e/lunar-new-year-celebration-tickets-498749893357?aff=ebdssbdestsearch",
    status: "approved",
    latitude: "40.73599424671328",
    longitude: "-73.87374398539173",
  },
  {
    title: "Lunar New Year Celebration at Queens Museum",
    address: "Queens Place Mall 8801 Queens Boulevard Queens, NY 11373",
    description:
      "Please join us to celebrate Lunar New Year 2023 as the New York Chinese Cultural Center (NYCCC) returns to Queens Museum with its signature program. Together we will be celebrating the year of the rabbit with folk dances, Lion Dance, Kung fu demonstrations, and traditional arts and crafts. The event will showcase a 45-minute performance program featuring professional artists and students of NYCCC’s School of the Arts, as well as a hands-on Chinese calligraphy and ink brush painting workshop for kids and adults. The Queens Museum’s education programs will offer an all-ages art-making workshop offered in English, Spanish and Mandarin.",
    image:
      "https://queensmuseum.org/wp-content/uploads/2022/12/4k1a7022_edit.jpg",
    start: "2023-01-29 13:00",
    end: "2023-01-29 16:00",
    tags: ["family-friendly", "holidays"],
    borough: "Queens",
    eventLink: "https://queensmuseum.org/event/lunar-new-year-celebration/",
    status: "approved",
    latitude: "40.74597494147367",
    longitude: "-73.84600587019669",
  },
  {
    title: "Lunar New Year Family Festival",
    address: "Museum of Chinese in America, 215 Centre St, New York, NY 10013",
    description:
      "It’s almost time tù (兔) celebrate! Ring in the Year of the Rabbit with an afternoon of festivities for the whole family— hop, skip, or jump on over! Performances, Demonstrations, and More!",
    image: "https://media.timeout.com/images/103114120/750/422/image.jpg",
    start: "2023-01-21 14:30",
    end: "2023-01-21 17:30",
    tags: ["family-friendly", "holidays"],
    borough: "Queens",
    eventLink:
      "https://www.mocanyc.org/event/lunar-new-year-family-festival-2/",
    status: "approved",
    latitude: "40.719569570061516",
    longitude: "-73.99902914449947",
  },
  {
    title: "The Office Trivia: Valentine's Day Edition",
    address: "McCarren Parkhouse, 855 Lorimer Street, Brooklyn, New York",
    description:
      "Roses are red, violets are blue, come down to Overlook NYC to find your first clue! Celebrate the anniversary of Ryan and Kelly's first hookup by joining us for The Office Trivia: Valentine's Day Edition at McCarren Park House on Valentine's Day, Tuesday, February 14 at 8pm! Bring your special someone (and the bobblehead you had made for them) or assemble your own Lonely Hearts Party.",
    image: "https://i.ytimg.com/vi/Iv22Ko4LQEQ/maxresdefault.jpg",
    start: "2023-02-14 20:00",
    end: "2023-02-14 22:00",
    tags: ["holidays"],
    borough: "Brooklyn",
    eventLink:
      "https://www.unation.com/event/the-office-trivia-valentines-day-edition-13532916",
    status: "approved",
    latitude: "40.722231718465935",
    longitude: "-73.95142763341207",
  },
  {
    title: "Black History Month Concert at the Brooklyn Public Library",
    address:
      "Brooklyn Public Library - Central Library, 10 Grand Army Plaza Brooklyn, NY 11238",
    description:
      "From the Brooklyn Public Library: We are very excited to have you back at our events and would like to remind you that we are still in the midst of the pandemic. Please be considerate of your fellow guests and stay home if you’re feeling unwell. Also, consider wearing a mask when attending indoor BPL Presents events. You’ll be doing your part to help keep yourself and everyone healthy and safe.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5fc4f9b65bcb0228a29c94e8/c0b764a7-363d-4c18-a217-bb885caedb76/BPL-Black+History+Month+Concert-2023.png?format=750wg",
    start: "2023-02-12 16:00",
    end: "2023-02-12 17:45",
    tags: ["holidays", "arts"],
    borough: "Brooklyn",
    eventLink:
      "https://www.harlemchamberplayers.org/event/black-history-month-concert-at-the-brooklyn-public-library2023",
    status: "approved",
    latitude: "40.722231718465935",
    longitude: "-73.95142763341207",
  },
];

module.exports = events;
