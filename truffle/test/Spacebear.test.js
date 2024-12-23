const Spacebear = artifacts.require("Spacebear");
const truffleAssert = require("truffle-assertions");

contract("Spacebear", (accounts) => {
it("Should Credit an NFT to a specific Account", async() =>{
    const spacebearInstance = await Spacebear.deployed();
    let txResult = await spacebearInstance.safeMint(accounts[1], "spacebear_1.json");
    // assert.equal(txResult.logs[0].event, "Transfer", "Not Transfer Event");
    // assert.equal(txResult.logs[0].args.from, "0x0000000000000000000000000000000000000000", "From is not zero Address")

    truffleAssert.eventEmitted(txResult, "Transfer", {from: '0x0000000000000000000000000000000000000000', to: accounts[1], tokenId: web3.utils.toBN("0")});
    assert.equal(await spacebearInstance.ownerOf(0), accounts[1], "Owner of account 1 is not equal to 2");
} )
})