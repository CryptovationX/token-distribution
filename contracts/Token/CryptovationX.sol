/**
 * CryptovationX
 * The Best One-Stop-Solution Robo-advisor for Blockchain Investment.
*/

pragma solidity ^0.4.18;

import '../Helpers/ERC20/StandardToken.sol';
import '../Helpers/ERC20/BurnableToken.sol';
import '../Helpers/ownership/Ownable.sol';

contract CryptovationX is StandardToken, BurnableToken, Ownable {

  // Constants
  string  public constant name = "CryptovationX";
  string  public constant symbol = "CXO";
  uint8   public constant decimals = 18;
  uint256 public constant INITIAL_SUPPLY = 900000000 * (10 ** uint256(decimals));

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
