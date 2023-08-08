Install NextJS

npx create-next-app .

Install ExpressJS

npm init -y
npm install express body-parser
npm install --save-dev typescript @types/express @types/node


Install Truffle

truffle init

Move into the contracts folder and create a new file.

After create a Solidity program type the command below

truffle compile

After that, the new folder build will be created, so type the command below:

truffle migrate

After that, you smart contract will be running on Ganache blockchain on your local machine, which is a copy from a Ethereum blockchain.

So you can access the console of truffle in order to get access to your Smart Contract.

truffle console