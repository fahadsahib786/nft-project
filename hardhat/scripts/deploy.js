const hre = require("hardhat");

(async () => {
  try {
    const Spacebear = await hre.ethers.getContractFactory("Spacebear");
    const spacebearInstance = await Spacebear.deploy(); // Deploy the contract

    // Wait for the contract deployment to be mined
    await spacebearInstance.deployTransaction.wait();

    console.log(`Deployed contract at ${spacebearInstance.address}`);
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
})();
