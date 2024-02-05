// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract UnownableNft is ERC721 {

  /**
   * This collection can only have 1 NFT.
   */
  string public _tokenURI;
  
  /**
   * @param _name collection name
   * @param _symbol collection symbol
   * @param _uri metadata uri
   */
  constructor(
    string memory _name,
    string memory _symbol,
    string memory _uri
  ) ERC721(_name, _symbol) {
    _safeMint(msg.sender, 1);
    _tokenURI = _uri;
  }

  /**
   * Take possesion of the Unownable NFT.
   */
  function takePossession()
    external
  {
    require(ownerOf(1) != msg.sender, "You already have NFT in possession.");
    _update(msg.sender, 1, address(0));

  }

  /**
   * @dev Get token uri
   * @param tokenId nft id
   */
  function tokenURI(uint256 tokenId)
    public
    view
    virtual
    override
    returns (string memory)
  {
    _requireOwned(tokenId);
    return _tokenURI;
  }
}