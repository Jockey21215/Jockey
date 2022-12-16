import { run } from "hardhat";

async function main() {
  try {
    await run("verify:verify", {
      address: process.env.DEPLOYED_COUNTER_CONTRACT_ADDRESS!,
      constructorArguments: [],
      contract: "contracts/Counter.sol:Counter",
    });
  } catch (err) {
    console.log(err);
  }
}
