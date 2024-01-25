const Lotery = artifacts.require("Lottery");

module.exports = function (deployer) {
  deployer.deploy(Lotery);
};
