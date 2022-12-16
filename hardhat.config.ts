import "@nomicfoundation/hardhat-toolbox";
import assert from 'assert';
import dotenv from 'dotenv';
import { HardhatUserConfig } from "hardhat/config";

dotenv.config();

assert(process.env.GOERLI_INFURA_KEY, "Please add GOERLI_INFURA_KEY value to .env file");

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
    },
    goerli: {
      url: process.env.GOERLI_INFURA_KEY!,
      accounts: [process.env.PRIVATE_KEY1!]
    }
  },
  etherscan: {
    apiKey: {
      goerli: process.env.ETHERSCAN_GOERLI_API_KEY!,
    },
  },
};

export default config;
