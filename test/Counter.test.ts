import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract, BigNumber } from 'ethers';

describe("Counter", async () => {
    let counterContract: Contract;

    beforeEach(async () => {
        const CounterContractFactory = await ethers.getContractFactory("Counter");
        counterContract = await CounterContractFactory.deploy();
        await counterContract.deployed();
    });

    it("Test", async () => {
        let counter = await counterContract.counter();
        console.log(counter);
        expect(counter).to.be.equals(BigNumber.from("0"));

        await counterContract.plus(BigNumber.from("2"));

        counter = await counterContract.counter();

        await counterContract.minus(BigNumber.from("1"));

        counter = await counterContract.counter();

        await counterContract.times(BigNumber.from("6"));
        counter = await counterContract.counter();

        await counterContract.divide(BigNumber.from("2"));
        counter = await counterContract.counter();
        console.log(counter);
        expect(await counterContract.counter()).to.be.equals(BigNumber.from("3"));
    });
});
