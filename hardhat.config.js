require("@nomiclabs/hardhat-waffle");
require("hardhat-abi-exporter");
require("hardhat-contract-sizer");

const { privateKeyMainnet, privateKeyTestnet } = require("./secrets.json");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          outputSelection: {
            "*": {
              "*": [
                "evm.bytecode",
                "evm.deployedBytecode",
                "devdoc",
                "userdoc",
                "metadata",
                "abi",
              ],
            },
          },
          // viaIR : true,
        },
      },
    ],
  },
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/dlpVfjITj-ymHsThj3PvSbHlWuUZsJBH",
      chainId: 80001,
      gasPrice: 5000000000, // 50gwei
      gas: 2000000,
      accounts: [privateKeyTestnet],
      explorer: "https://mumbai.polygonscan.com/",
    },
    polygon: {
      url: "",
      chainId: 137,
      gasPrice: 250000000000, // 250gwei
      gas: 2000000,
      accounts: [privateKeyMainnet],
      explorer: "https://polygonscan.com/",
    },
  },
  abiExporter: {
    path: "./data/abi",
    clear: true,
    flat: true,
    only: [],
  },
};
