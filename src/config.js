"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "constants/blend_mode.js"));
const { NETWORK } = require(path.join(basePath, "constants/network.js"));

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Gunslinger";
const description = "An inner outlaw lives within us all. Hidden deep within the strands of our blood lies the spirit of a legendary gunslinger that seeks to show no mercy on the range. Only those willing enough can reignite this ancient spirit of western ecstasy. So the question remains. Will you be the one to take up arms? Will you drive your free hand towards your pistol? Or will you live the rest of your days in regret, letting the chance slip by? Only you can decide. May your cigar remain everlasting, and may the barrel of your gun never cool.";
const baseUri = "ipfs://QmWXrLE8LjJVxUGnyWGA7SZu6TzJL8swp8CjLiBbbRKGkH";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  //external_url: "https://www.website.com/c/name",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    //Poncho-Tobacco
    growEditionSizeTo: 10,
    layersOrder: [
      { name: "Background" },
      { name: "Boots" },
      { name: "Pants" },
      { name: "Gloves" },
      { name: "Grip" },
      { name: "Barrel" },
      { name: "Cylinder" },
      { name: "Outfit" },
      { name: "Belt" },
      { name: "Skin" },
      { name: "Poncho" },
      { name: "Poncho Design" },
      { name: "Beard" },
      { name: "Hair" },
      { name: "Hat" },
      { name: "Accessory" },
      { name: "Bandolier" },
      { name: "Gun Effect" },
    ],
  },
  {
    //Poncho-NoTobacco
    growEditionSizeTo: 20,
    layersOrder: [
      { name: "Background" },
      { name: "Boots" },
      { name: "Pants" },
      { name: "Gloves" },
      { name: "Grip" },
      { name: "Barrel" },
      { name: "Cylinder" },
      { name: "Outfit" },
      { name: "Belt" },
      { name: "Skin" },
      { name: "Poncho" },
      { name: "Poncho Design" },
      { name: "Bandana" },
      { name: "Hair" },
      { name: "Hat" },
      { name: "Bandolier" },
      { name: "Gun Effect" },
    ],
  },
  {
    //NoPoncho-Tobacco
    growEditionSizeTo: 30,
    layersOrder: [
      { name: "Background" },
      { name: "Boots" },
      { name: "Pants" },
      { name: "Gloves" },
      { name: "Grip" },
      { name: "Barrel" },
      { name: "Cylinder" },
      { name: "Outfit" },
      { name: "Belt" },
      { name: "Skin" },
      { name: "Beard" },
      { name: "Hair" },
      { name: "Hat" },
      { name: "Accessory" },
      { name: "Bandolier" },
      { name: "Gun Effect" },
    ],
  },
  {
    //NoPoncho-NoTobacco
    growEditionSizeTo: 40,
    layersOrder: [
      { name: "Background" },
      { name: "Boots" },
      { name: "Pants" },
      { name: "Gloves" },
      { name: "Grip" },
      { name: "Barrel" },
      { name: "Cylinder" },
      { name: "Outfit" },
      { name: "Belt" },
      { name: "Skin" },
      { name: "Bandana" },
      { name: "Hair" },
      { name: "Hat" },
      { name: "Bandolier" },
      { name: "Gun Effect" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 990,
  height: 990,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

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
};
