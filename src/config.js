const basePath = process.cwd()
const { MODE } = require(`${basePath}/constants/blend_mode.js`)
const { NETWORK } = require(`${basePath}/constants/network.js`)

const network = NETWORK.eth

// General metadata for Ethereum
const namePrefix = 'JUST US'
const description =
  'Just an NFT collection of Us. Featuring Web3 You, Web3 Me, Web3 Us.'
const baseUri = 'ipfs://bafybeigspo622ffqssakmet3x45js4c7spsuc2xoqhx27dplvbaij5rwny'

const solanaMetadata = {
  symbol: 'YC',
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: 'https://www.youtube.com/c/hashlipsnft',
  creators: [
    {
      address: '7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC',
      share: 100,
    },
  ],
}

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 5762,
    layersOrder: [
      {
        name: 'Background Basic',
        options: {
          displayName: 'Background',
        },
      },
      { name: 'Base' },
      { name: 'Eyes' },
      { name: 'Mouth' },
      { name: 'Outfit' },
      { name: 'Head' },
      { name: 'Accessories' },
    ],
  },
  {
    growEditionSizeTo: 6762,
    layersOrder: [
      {
        name: 'Background Rare',
        options: {
          displayName: 'Background',
        },
      },
      { name: 'Base' },
      { name: 'Eyes' },
      { name: 'Mouth' },
      { name: 'Outfit' },
      { name: 'Head' },
      { name: 'Accessories' },
    ],
  },
  {
    growEditionSizeTo: 7762,
    layersOrder: [
      {
        name: 'Background Basic',
        options: {
          displayName: 'Background',
        },
      },
      { name: 'Base' },
      { name: 'Eyes' },
      { name: 'Mouth' },
      { name: 'Outfit' },
      { name: 'Head Rare', options: {
        displayName: "Head"
      } },
      { name: 'Accessories' },
    ],
  },
  {
    growEditionSizeTo: 7763,
    layersOrder: [
      { name: 'Legendary/Artist/Layer 1' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Artist/Layer 2' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Artist/Layer 3' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Artist/Layer 4' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Artist/Layer 5' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Artist/Layer 6' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Artist/Layer 7' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Artist/Layer 8' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Artist/Layer 9' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Artist/Layer 10' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Artist/Layer 11' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Artist/Layer 12' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Artist/Layer 13' , options: {displayName: "Legendary"}},
    ],
  },
  {
    growEditionSizeTo: 7764,
    layersOrder: [
      { name: 'Legendary/Astronaut/Layer 1' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Astronaut/Layer 2' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Astronaut/Layer 3' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Astronaut/Layer 4' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Astronaut/Layer 5' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Astronaut/Layer 6' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Astronaut/Layer 7' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Astronaut/Layer 8' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Astronaut/Layer 9' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Astronaut/Layer 10' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Astronaut/Layer 11' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Astronaut/Layer 12' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Astronaut/Layer 14' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Astronaut/Layer 15' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Astronaut/Layer 16' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Astronaut/Layer 17' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Astronaut/Layer 18' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Astronaut/Layer 19' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Astronaut/Layer 20' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Astronaut/Layer 21' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Astronaut/Layer 22' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Astronaut/Layer 23' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Astronaut/Layer 24' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Astronaut/Layer 25' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Astronaut/Layer 26' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Astronaut/Layer 27' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Astronaut/Layer 28' , options: {displayName: "Legendary"}},
    ],
  },
  {
    growEditionSizeTo: 7765,
    layersOrder: [
      { name: 'Legendary/Biker/Layer 1' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Biker/Layer 2' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Biker/Layer 3' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Biker/Layer 4' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Biker/Layer 5' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Biker/Layer 6' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Biker/Layer 7' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Biker/Layer 8' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Biker/Layer 9' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Biker/Layer 10' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Biker/Layer 11' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Biker/Layer 12' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Biker/Layer 13' , options: {displayName: "Legendary"}},
    ],
  },
  {
    growEditionSizeTo: 7766,
    layersOrder: [
      { name: 'Legendary/Bodybuilder/Layer 1' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 2' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 3' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 4' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 5' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 6' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 7' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 8' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 9' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 10' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 11' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 12' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 14' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 15' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 16' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 17' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 18' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 19' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 20' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 21' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 22' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 23' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 24' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 25' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 26' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 27' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 28' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 29' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 30' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 31' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 32' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 33' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 34' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 35' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Bodybuilder/Layer 36' , options: {displayName: "Legendary"}},
    ],
  },
  {
    growEditionSizeTo: 7767,
    layersOrder: [
      { name: 'Legendary/Chef/Layer 1' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Chef/Layer 2' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Chef/Layer 3' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Chef/Layer 4' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Chef/Layer 5' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Chef/Layer 6' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Chef/Layer 7' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Chef/Layer 8' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Chef/Layer 9' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Chef/Layer 10' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Chef/Layer 11' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Chef/Layer 12' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Chef/Layer 13' , options: {displayName: "Legendary"}},
    ],
  },
  {
    growEditionSizeTo: 7768,
    layersOrder: [
      { name: 'Legendary/Clown/Layer 1' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Clown/Layer 2' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Clown/Layer 3' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Clown/Layer 4' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Clown/Layer 5' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Clown/Layer 6' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Clown/Layer 7' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Clown/Layer 8' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Clown/Layer 9' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Clown/Layer 10' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Clown/Layer 11' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Clown/Layer 12' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Clown/Layer 13' , options: {displayName: "Legendary"}},
    ],
  },
  {
    growEditionSizeTo: 7769,
    layersOrder: [
      { name: 'Legendary/Construction Worker/Layer 1' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Construction Worker/Layer 2' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Construction Worker/Layer 3' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Construction Worker/Layer 4' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Construction Worker/Layer 5' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Construction Worker/Layer 6' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Construction Worker/Layer 7' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Construction Worker/Layer 8' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Construction Worker/Layer 9' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Construction Worker/Layer 10' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Construction Worker/Layer 11' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Construction Worker/Layer 12' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Construction Worker/Layer 13' , options: {displayName: "Legendary"}},
    ],
  },
  {
    growEditionSizeTo: 7770,
    layersOrder: [
      { name: 'Legendary/Cowboy/Layer 1' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Cowboy/Layer 2' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Cowboy/Layer 3' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Cowboy/Layer 4' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Cowboy/Layer 5' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Cowboy/Layer 6' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Cowboy/Layer 7' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Cowboy/Layer 8' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Cowboy/Layer 9' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Cowboy/Layer 10' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Cowboy/Layer 11' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Cowboy/Layer 12' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Cowboy/Layer 13' , options: {displayName: "Legendary"}},
    ],
  },
  {
    growEditionSizeTo: 7771,
    layersOrder: [
      { name: 'Legendary/Doctor/Layer 1' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Doctor/Layer 2' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Doctor/Layer 3' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Doctor/Layer 4' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Doctor/Layer 5' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Doctor/Layer 6' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Doctor/Layer 7' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Doctor/Layer 8' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Doctor/Layer 9' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Doctor/Layer 10' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Doctor/Layer 11' , options: {displayName: "Legendary"}},
    ],
  },
  {
    growEditionSizeTo: 7772,
    layersOrder: [
      { name: 'Legendary/Farmer/Layer 1' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 2' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 3' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 4' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 5' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 6' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 7' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 8' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 9' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 10' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 11' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 12' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 14' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 15' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 16' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 17' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 18' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 19' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 20' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 21' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 22' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 23' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 24' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 25' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 26' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 27' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 28' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 29' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 30' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 31' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 32' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 33' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 34' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 35' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Farmer/Layer 36' , options: {displayName: "Legendary"}},
    ],
  },
  {
    growEditionSizeTo: 7773,
    layersOrder: [
      { name: 'Legendary/Fastfood Worker/Layer 1' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Fastfood Worker/Layer 2' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Fastfood Worker/Layer 3' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Fastfood Worker/Layer 4' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Fastfood Worker/Layer 5' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Fastfood Worker/Layer 6' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Fastfood Worker/Layer 7' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Fastfood Worker/Layer 8' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Fastfood Worker/Layer 9' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Fastfood Worker/Layer 10' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Fastfood Worker/Layer 11' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Fastfood Worker/Layer 12' , options: {displayName: "Legendary"}},
    ],
  },
  {
    growEditionSizeTo: 7774,
    layersOrder: [
      { name: 'Legendary/Pilot/Layer 1' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Pilot/Layer 2' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Pilot/Layer 3' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Pilot/Layer 4' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Pilot/Layer 5' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Pilot/Layer 6' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Pilot/Layer 7' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Pilot/Layer 8' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Pilot/Layer 9' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Pilot/Layer 10' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Pilot/Layer 11' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Pilot/Layer 12' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Pilot/Layer 13' , options: {displayName: "Legendary"}},
    ],
  },
  {
    growEditionSizeTo: 7775,
    layersOrder: [
      { name: 'Legendary/Police/Layer 1' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Police/Layer 2' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Police/Layer 3' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Police/Layer 4' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Police/Layer 5' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Police/Layer 6' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Police/Layer 7' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Police/Layer 8' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Police/Layer 9' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Police/Layer 10' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Police/Layer 11' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Police/Layer 12' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Police/Layer 14' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Police/Layer 15' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Police/Layer 16' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Police/Layer 17' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Police/Layer 18' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Police/Layer 19' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Police/Layer 20' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Police/Layer 21' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Police/Layer 22' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Police/Layer 23' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Police/Layer 24' , options: {displayName: "Legendary"}},
      
    ],
  },
  {
    growEditionSizeTo: 7776,
    layersOrder: [
      { name: 'Legendary/Prince/Layer 1' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Prince/Layer 2' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Prince/Layer 3' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Prince/Layer 4' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Prince/Layer 5' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Prince/Layer 6' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Prince/Layer 7' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Prince/Layer 8' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Prince/Layer 9' , options: {displayName: "Legendary"}},
    ],
  },
  {
    growEditionSizeTo: 7777,
    layersOrder: [
      { name: 'Legendary/Safari/Layer 1' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Safari/Layer 2' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Safari/Layer 3' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Safari/Layer 4' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Safari/Layer 5' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Safari/Layer 6' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Safari/Layer 7' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Safari/Layer 8' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Safari/Layer 9' , options: {displayName: "Legendary"}},
      { name: 'Legendary/Safari/Layer 10' , options: {displayName: "Legendary"}},
    ],
  },
  
  
  
]

const shuffleLayerConfigurations = true

const debugLogs = false

const format = {
  width: 1000,
  height: 1000,
  smoothing: false,
}

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 100,
}

const text = {
  only: false,
  color: '#ffffff',
  size: 20,
  xGap: 40,
  yGap: 40,
  align: 'left',
  baseline: 'top',
  weight: 'regular',
  family: 'Courier',
  spacer: ' => ',
}

const pixelFormat = {
  ratio: 2 / 128,
}

const background = {
  generate: true,
  brightness: '80%',
  static: false,
  default: '#000000',
}

const extraMetadata = {}

const rarityDelimiter = '#'

const uniqueDnaTorrance = 10000

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: 'preview.png',
}

const preview_gif = {
  numberOfImages: 5,
  order: 'ASC', // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: 'preview.gif',
}

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
}
