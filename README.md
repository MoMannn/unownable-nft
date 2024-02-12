# Unownable token (U0T) - unownable NFT

This repo contains smart contract for Unownable NFT. This is a part of discovering different ownership properties that humans put on things. It is part of [Miha Artnak's](https://themihaartnak.com/) exibit through which he shows 7 different art pieces each showcasing a distinct type of ownership.

Smart contract address: https://polygonscan.com/address/0x911B67ef816E6434781f101e6a52aC52fe9aC192

## About

You can learn more about the art and meaning for which this contract was created by visiting the [exhibit website](https://themihaartnak.com/last/), or more specifically its [detailed exhibit page](https://themihaartnak.com/last/abstract).

## Technical about

This contract is based on ERC721 standard. With one specific distinction. It has a `takePossession()` function which anyone can at any time call and the possession of the NFT. This means that in technical ERC721 context you take its "ownership". But since any one can take the possession at any time and it does not matter on what wallet or smart contract the NFT currently resides there is no ownership of this NFT. Because of this there is no point in trying to list this NFT on marketplace or trying to sell it.

## Deploy

`npx hardhat run --network mumbai scripts/deploy.js`

## Test

`npm test`
