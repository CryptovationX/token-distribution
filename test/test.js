constants = require('./constants.js');

var CryptovationX = artifacts.require("./CryptovationX.sol");

contract('CryptovationX', (accounts) => {

    it("Should verify max total supply", function(done) {
        CryptovationX.deployed().then(function(instance) {
            return instance.INITIAL_SUPPLY.call();
        }).then(function(supply) {
            assert.equal(supply.toNumber(), constants.maxTokenSupply, "Wrong max total supply");
        }).then(done);
    });

});