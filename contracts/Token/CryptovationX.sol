/**
 * CryptovationX - The Best Friend for Crypto Investors
*/

pragma solidity ^0.4.18;

import "../Helpers/ERC20/StandardToken.sol";
import "../Helpers/ERC20/BurnableToken.sol";

contract CryptovationX is StandardToken, BurnableToken {

  // Constants
  string  public constant name = "CryptovationX";
  string  public constant symbol = "CXA";
  uint8   public constant decimals = 18;
  uint256 public constant INITIAL_SUPPLY = 12000000000 * (10 ** uint256(decimals));

  // Properties
  address public creatorAddress;

  /**
   * Constructor - instantiates token supply and allocates balance of
   * to the admin (msg.sender).
  */
  function CryptovationX(address _creator) public {

    // Mint all tokens to creator
    balances[msg.sender] = INITIAL_SUPPLY;
    totalSupply_ = INITIAL_SUPPLY;

    // Set creator address
    creatorAddress = _creator;
  }

}
