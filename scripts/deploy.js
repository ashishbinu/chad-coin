async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const coinSupply = "69420000000" + "".padEnd(18, "0");

  const ChadTokenFactory = await hre.ethers.getContractFactory("ERC20Token");
  const chadTokenContract = await ChadTokenFactory.deploy(coinSupply, "Chad", "CHD");
  await chadTokenContract.deployed();

  console.log("ChadToken :", chadTokenContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
