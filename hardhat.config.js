require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/488c8fd0514b42f6bca72fda395a211c",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
