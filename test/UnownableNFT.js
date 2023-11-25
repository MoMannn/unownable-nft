const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("UnownableNft", function () {
  let UnownableNft, account1, account2;

  beforeEach(async () => {
    [account1, account2] = await ethers.getSigners();

    const UnownableNftContract = await ethers.getContractFactory(
      "UnownableNft"
    );
    UnownableNft = await UnownableNftContract.deploy(
      "Unownable NFT",
      "UNFT",
      "http://example.com/"
    );
    await UnownableNft.deployed();
  });

  it("Check current possessor.", async function () {
    const possessor = await UnownableNft.ownerOf(1);
    expect(possessor).to.be.equal(account1.address);
  });

  it("Takes possession of the NFT.", async function () {
    await UnownableNft.connect(account2).takePossession();
    const possessor = await UnownableNft.ownerOf(1);
    expect(possessor).to.be.equal(account2.address);
  });
});
