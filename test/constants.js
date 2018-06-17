
// Address of the owner of creator
const creatorAddr = "0xa42b712e7e332582031ddce93dc3106f19636ecb";
// Address of the receiver
const receiverAddr = "0x9077a19de4ae8fcd0a80759a823d238c8dc5b5d6";

// Vanity information of the token
const tokenName = "CryptovationX";
const tokenDecimals = 18;
const tokenSymbol = "CXA";

// Number of tokens minted to creator
const maxTokenSupply = 12000000000 * Math.pow(10, 18);

module.exports = {
  creatorAddr: creatorAddr,
  receiverAddr: receiverAddr,
  tokenName: tokenName,
  tokenDecimals: tokenDecimals,
  tokenSymbol: tokenSymbol,
  maxTokenSupply: maxTokenSupply
};