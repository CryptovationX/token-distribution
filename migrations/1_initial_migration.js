var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer, network, accounts) {
  console.log('Migrate to network ==>', network);
  deployer.deploy(Migrations);
};