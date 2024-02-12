const hre = require("hardhat");

async function main() {
  const ContractF = await hre.ethers.getContractFactory("UnownableNft");
  const contr = await ContractF.deploy(
    "Unownable NFT",
    "U0T",
    "https://bafybeifoboitveplnlklte3qk4fz4wzdofnfvmydioojqa67gsvx5w2hy4.ipfs.nectarnode.io/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaWQiOiJiYWZ5YmVpZm9ib2l0dmVwbG5sa2x0ZTNxazRmejR3emRvZm5mdm15ZGlvb2pxYTY3Z3N2eDV3Mmh5NCIsInByb2plY3RfdXVpZCI6IjNkZDAzNTJhLWI4OWQtNGUxNC1iYTNkLTgxYjA2ZGQxMDJkMCIsImlhdCI6MTcwNzc2MDUzNSwic3ViIjoiSVBGUy10b2tlbiJ9.u0Ayrg_G4ySZJ0YJs-0DLses638KUWVFnHqQWiFlo9Q"
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
