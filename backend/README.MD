
First command
truffle init


1: /contracts: store original codes of the smart contract. We will place our HelloWorld.sol file here.
2: /migrations: deploy the smart contract in the “contracts” folder.
3: /test: test codes for your smart contract, support both JavaScript and Solidity.
4: truffle.js: configuration document.
5: truffle-config.js: configuration document for windows user. We can just leave it alone. (However, if your Ubuntu 16.04 is running on a virtual machine under Windows, then your configuration should also go here.)


truffle compile

truffle migrate

truffle console