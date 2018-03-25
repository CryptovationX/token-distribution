
constants = require('./constants.js');
secrets = require('../secrets.json');

var CryptovationX = artifacts.require("./CryptovationX.sol");

contract('CryptovationX', (accounts) => {

    var INSTANCE_DEPLOYED
    var ABI_INTERFACE

    describe("Check the token correct constants information", () => {

        it("Should verify max total supply", async () => {
            let instance = await CryptovationX.deployed();
            let maxSupply = await instance.INITIAL_SUPPLY.call();
            INSTANCE_DEPLOYED = instance;
            ABI_INTERFACE = instance.abi;
            assert.equal(maxSupply, constants.maxTokenSupply, "Wrong max total supply");
        });

        it('Should test correct setting of vanity information', async () => {
            let name = await INSTANCE_DEPLOYED.name.call();
            assert.strictEqual(name, constants.tokenName);

            let decimals = await INSTANCE_DEPLOYED.decimals.call();
            assert.strictEqual(decimals.toNumber(), constants.tokenDecimals);

            let symbol = await INSTANCE_DEPLOYED.symbol.call();
            assert.strictEqual(symbol, constants.tokenSymbol);
        });
    });

});