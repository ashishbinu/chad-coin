//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Token is ERC20{
  constructor(uint256 initialSupply,string memory _name,string memory _symbol) ERC20(_name,_symbol) {
    console.log("Supply :",initialSupply);
    console.log("Name :",_name);
    console.log("Symbol :",_symbol);
    _mint(msg.sender, initialSupply);
  }
}
