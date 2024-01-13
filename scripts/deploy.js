const hre = require("hardhat");

async function main() {
  const ContractF = await hre.ethers.getContractFactory("UnownableNft");
  const contr = await ContractF.deploy(
    "Unownable NFT",
    "UNFT",
    "https://bafybeidrw3rbuicnyra4rterlp3bh64qexkox33zvezhtnhglolejp5moa.ipfs.nectarnode.io/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaWQiOiJiYWZ5YmVpZHJ3M3JidWljbnlyYTRydGVybHAzYmg2NHFleGtveDMzenZlemh0bmhnbG9sZWpwNW1vYSIsInByb2plY3RfdXVpZCI6ImFhZDliNmMxLTNiYzgtNDQ0YS1hZjQxLTM2ZTVlYjMwMDBmNyIsImlhdCI6MTcwMDkxMTE0MCwic3ViIjoiSVBGUy10b2tlbiJ9.oF9C4WHdoI-cT4iovJwe06ywvaSf4fT2yqavlSJIuJA"
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
