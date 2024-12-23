const Spacebear = artifacts.require("Spacebear");

module.exports = function (deployer, network, accounts) {
    console.log(network, accounts);
    deployer.deploy(Spacebear);
}