const NewHelloWorld = artifacts.require("NewHelloWorld");

module.exports = function (deployer) {
  deployer.deploy(NewHelloWorld);
};
