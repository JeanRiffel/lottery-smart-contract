# Lottery Smart Contract

# The project

This project is intended for educational purposes. 

Through a web application, users can place bets on randomly generated numbers by offering a certain amount of Ether. 

A smart contract will receive both the bet and the corresponding Ether amount. 

The winning number will be determined randomly, and the successful participant will receive the accumulated Ether sum.

## Tecnologies applied

### NextJS 

Used to build the front-end

To know more about NextJS click [here](https://nextjs.org/)

#### Instruction to install

npx create-next-app .

### ExpressJS 

Used to build the back-end

To know more about ExpressJS click [here](https://expressjs.com/)

#### Instruction to install

npm init -y
npm install express body-parser
npm install --save-dev typescript @types/express @types/node


### Enviroment to Smart Contract

#### Truffle

Install Truffle

To know more about Truffle click [here](https://trufflesuite.com/)

### TypeScript

To know more about TypeScript click [here](https://www.typescriptlang.org/)

#### Instruction to install and execute

* truffle init

Move into the contracts folder and create a new file.

After create a Solidity program type the command below

truffle compile

After that, the new folder build will be created, so type the command below:

* truffle migrate

After that, you smart contract will be running on Ganache blockchain on your local machine, which is a copy from a Ethereum blockchain.

So you can access the console of truffle in order to get access to your Smart Contract.

* truffle console

#### Ganache

To know more about Ganache click [here](https://trufflesuite.com/ganache/)

### Solidity

To know more about Solidity click [here](https://soliditylang.org/)
