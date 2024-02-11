const hre = require("hardhat");

async function main() {
  const ContractF = await hre.ethers.getContractFactory("UnownableNft");
  const contr = await ContractF.deploy(
    "Unownable NFT",
    "U0T",
    "https://bafybeidkz2mplwvtegay7jdzyojbd2iyolxqhzsib4outgkxbeurlptyti.ipfs.nectarnode.io/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaWQiOiJiYWZ5YmVpZGt6Mm1wbHd2dGVnYXk3amR6eW9qYmQyaXlvbHhxaHpzaWI0b3V0Z2t4YmV1cmxwdHl0aSIsInByb2plY3RfdXVpZCI6IjNkZDAzNTJhLWI4OWQtNGUxNC1iYTNkLTgxYjA2ZGQxMDJkMCIsImlhdCI6MTcwNzE2NTkxMiwic3ViIjoiSVBGUy10b2tlbiJ9.RI9wvZf_0IUf9WONddKWLVCVJVcKIEPUC8M16Z188lI"
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
