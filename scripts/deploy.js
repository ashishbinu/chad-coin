async function main() {
  const ChadTokenFactory = await hre.ethers.getContractFactory("ERC20Token");
  const chadTokenContract = await ChadTokenFactory.deploy("69420000000", "Chad", "CHD");
  await chadTokenContract.deployed();

  console.log("ChadToken :", chadTokenContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
