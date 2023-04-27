const rooms = [
  {
    name: "Charming Studio < 10 Miles to Wells' Beaches!",
    pricePerNight: 168,
    description:
      "A friendly atmosphere and natural delights await your visit to the town of Wells! Stay at this well-equipped 1-bath studio and enjoy easy access to several beaches, including Wells Beach and Drakes Island Beach, as well as Rachel Carson National Wildlife Refuge - the best spot for wildlife viewing just 8 miles away. Not to mention, with the downtown area just 10 minutes from the vacation rental,",
    address: "4667 Bicetown Street, New York, NY, 10004",
    guestCapacity: 1,
    numOfBeds: 1,
    internet: true,
    breakfast: true,
    airConditioned: false,
    petsAllowed: false,
    roomCleaning: true,
    images: [
      {
        public_id: "bookit/rooms/1_bzynlv",
        url: "https://res.cloudinary.com/bookit/image/upload/v1618590762/bookit/rooms/1_bzynlv.jpg",
      },
      {
        public_id: "bookit/rooms/2_s1u52n",
        url: "https://res.cloudinary.com/bookit/image/upload/v1618590761/bookit/rooms/2_s1u52n.jpg",
      },
    ],
    category: "King",
  },
  {
    name: "Picturesque 2-Story Farmhouse w/Private Hot Tub",
    pricePerNight: 242,
    description:
      "Find plenty of space for a family or a large group at this picturesque Wells home, the perfect spot for a relaxing getaway in charming, quintessential Maine style! Spend your days on the beautiful nearby beaches, and come home to a large backyard and orchard where your kids can play, as well as a patio with a gas grill for barbecues on summer afternoons.",
    address: "200 Olympic Dr, Stafford, VS, 22554",
    guestCapacity: 2,
    numOfBeds: 2,
    internet: true,
    breakfast: false,
    airConditioned: true,
    petsAllowed: false,
    roomCleaning: true,
    images: [
      {
        public_id: "bookit/rooms/3_quuli7.jpg",
        url: "https://res.cloudinary.com/bookit/image/upload/v1618590762/bookit/rooms/3_quuli7.jpg",
      },
    ],
    category: "Twins",
  },
  {
    name: "Downtown Portsmouth Private Getaway! Hot Tub",
    pricePerNight: 85,
    description:
      "Absolutely the best location in Portsmouth! Beautifully furnished, this spacious and private home is perfectly suited for taking in all of the must-see sights and historic landmarks that make this vibrant city so unique. Situated near the banks of the Piscataqua River just minutes away from Strawbery Banke Museum, Prescott Park, USS Albacore Museum, Market Square and more!",
    address: "3747 Parkway Street, Apple Valley, CA, 92307",
    guestCapacity: 3,
    numOfBeds: 2,
    internet: true,
    breakfast: true,
    airConditioned: true,
    petsAllowed: true,
    roomCleaning: false,
    images: [
      {
        public_id: "bookit/rooms/4_sju0ql",
        url: "https://res.cloudinary.com/bookit/image/upload/v1618590765/bookit/rooms/4_sju0ql.jpg",
      },
    ],
    category: "King",
  },
  {
    name: "Spacious Suite in a quiet Boston neighborhood.",
    pricePerNight: 95,
    description:
      "Our largest room with a queen bed and foldable sofa. Comfortably fits 2-3 adults, four adults maximum. Decorated with Irish-themed colors and arts. It has a private bathroom with a shower, equipped with smart TV, mini-fridge, desk, chairs. Enjoy City views at the sitting area by the window. Located on the 3rd floor with no elevator.",
    address: "224 Cherry St, Buffalo, NY, 14202",
    guestCapacity: 6,
    numOfBeds: 3,
    internet: true,
    breakfast: true,
    airConditioned: true,
    petsAllowed: false,
    roomCleaning: true,
    images: [
      {
        public_id: "bookit/rooms/5_jmydt6",
        url: "https://res.cloudinary.com/bookit/image/upload/v1618590762/bookit/rooms/5_jmydt6.jpg",
      },
      {
        public_id: "bookit/rooms/6_nwmr5f",
        url: "https://res.cloudinary.com/bookit/image/upload/v1618590764/bookit/rooms/6_nwmr5f.jpg",
      },
    ],
    category: "Single",
  },
  {
    name: "Shangri-La Hotel, Washington",
    pricePerNight: 105,
    description:
      "Our largest room with a queen bed and foldable sofa. Comfortably fits 2-3 adults, four adults maximum. Decorated with Irish-themed colors and arts. It has a private bathroom with a shower, equipped with smart TV, mini-fridge, desk, chairs. Enjoy City views at the sitting area by the window. Located on the 3rd floor with no elevator.",
    address: "4724  Mudlick Road, Yakima, WA, 98902",
    guestCapacity: 2,
    numOfBeds: 1,
    internet: true,
    breakfast: true,
    airConditioned: true,
    petsAllowed: false,
    roomCleaning: true,
    images: [
      {
        public_id: "bookit/rooms/7_hshhzq",
        url: "https://res.cloudinary.com/bookit/image/upload/v1618590764/bookit/rooms/7_hshhzq.jpg",
      },
    ],
    category: "King",
  },
  {
    name: "Hotel Chimayo de Santa Fe Rooms",
    pricePerNight: 36,
    description:
      "Our largest room with a queen bed and foldable sofa. Comfortably fits 2-3 adults, four adults maximum. Decorated with Irish-themed colors and arts. It has a private bathroom with a shower, equipped with smart TV, mini-fridge, desk, chairs. Enjoy City views at the sitting area by the window. Located on the 3rd floor with no elevator.",
    address: "1029  Godfrey Street, Portland, OR, 97205",
    guestCapacity: 2,
    numOfBeds: 2,
    internet: true,
    breakfast: true,
    airConditioned: true,
    petsAllowed: false,
    roomCleaning: true,
    images: [
      {
        public_id: "bookit/rooms/8_crn0xy",
        url: "https://res.cloudinary.com/bookit/image/upload/v1618590765/bookit/rooms/8_crn0xy.jpg",
      },
    ],
    category: "Twins",
  },
  {
    name: "Hotel Garni Ischgl ☆ 4 star room comfort",
    pricePerNight: 82,
    description:
      "Our largest room with a queen bed and foldable sofa. Comfortably fits 2-3 adults, four adults maximum. Decorated with Irish-themed colors and arts. It has a private bathroom with a shower, equipped with smart TV, mini-fridge, desk, chairs. Enjoy City views at the sitting area by the window. Located on the 3rd floor with no elevator.",
    address: "2645  Parrish Avenue, SAINT LOUIS, MO, 63116",
    guestCapacity: 5,
    numOfBeds: 3,
    internet: true,
    breakfast: true,
    airConditioned: true,
    petsAllowed: false,
    roomCleaning: false,
    images: [
      {
        public_id: "bookit/rooms/9_konrjf",
        url: "https://res.cloudinary.com/bookit/image/upload/v1618590849/bookit/rooms/9_konrjf.jpg",
      },
    ],
    category: "Single",
  },
  {
    name: "The Spa at Base Camp at Kerry Hotel",
    pricePerNight: 76,
    description:
      "Our largest room with a queen bed and foldable sofa. Comfortably fits 2-3 adults, four adults maximum. Decorated with Irish-themed colors and arts. It has a private bathroom with a shower, equipped with smart TV, mini-fridge, desk, chairs. Enjoy City views at the sitting area by the window. Located on the 3rd floor with no elevator.",
    address: "3118  Red Hawk Road, Garfield, MN, 56332",
    guestCapacity: 2,
    numOfBeds: 1,
    internet: true,
    breakfast: false,
    airConditioned: true,
    petsAllowed: false,
    roomCleaning: true,
    images: [
      {
        public_id: "bookit/rooms/10_w8w8yi",
        url: "https://res.cloudinary.com/bookit/image/upload/v1618590840/bookit/rooms/10_w8w8yi.jpg",
      },
    ],
    category: "Single",
  },
];

// export default rooms;
module.exports = rooms;
