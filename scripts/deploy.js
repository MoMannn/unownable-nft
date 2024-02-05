const hre = require("hardhat");

async function main() {
  const ContractF = await hre.ethers.getContractFactory("UnownableNft");
  const contr = await ContractF.deploy(
    "Unownable NFT",
    "U0T",
    "https://bafybeiejhrmqf3yoly4l6osquhb2qceoy73mqedkskashaupwsi2tk5hgq.ipfs.nectarnode.io/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaWQiOiJiYWZ5YmVpZWpocm1xZjN5b2x5NGw2b3NxdWhiMnFjZW95NzNtcWVka3NrYXNoYXVwd3NpMnRrNWhncSIsInByb2plY3RfdXVpZCI6ImFhZDliNmMxLTNiYzgtNDQ0YS1hZjQxLTM2ZTVlYjMwMDBmNyIsImlhdCI6MTcwNzE2NDMwOSwic3ViIjoiSVBGUy10b2tlbiJ9.OJ_HsFK8qIV5mS_xzMvvE4pypK4tknMZVHGXHl47xQg"
  );

  await contr.deployed();

  console.log(
    "UnownableNft deployed to: %saddress/%s",
    hre.network.config.explorer,
    contr.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
