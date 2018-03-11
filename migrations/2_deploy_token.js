const CryptovationX = artifacts.require('./CryptovationX.sol');

module.exports = function(deployer, network, accounts) {
  return createDeploy(deployer, accounts);
};

function createDeploy(deployer, accounts) {

  const accountToDeploy = accounts[0];
  console.log("Deploy to account ===>");

  return deployer.deploy(CryptovationX, accountToDeploy).then( async () => {
    const instance = await CryptovationX.deployed();
    console.log('CryptovationX Address ===>', instance.address);
  })
}