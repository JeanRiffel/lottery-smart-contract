# Lottery Smart Contract

## Project Overview

This project serves educational purposes, offering a web application that allows users to place bets on randomly generated numbers using Ether. A smart contract manages the bets, receives Ether, and determines the winning number randomly. The participant with the correct number receives the accumulated Ether sum.

## Technologies Used

### Front-End: Next.js

Next.js is employed for building the front-end of the application. For more information, visit [Next.js](https://nextjs.org/).

#### Installation Instructions

```bash
npx create-next-app .
```

### Back-End: Express.js

Express.js is utilized for building the back-end of the application. Learn more about Express.js [here](https://expressjs.com/).

#### Installation Instructions

```bash
npm init -y
npm install express body-parser
npm install --save-dev typescript @types/express @types/node
```

### Smart Contract Environment

#### Truffle

Truffle is the chosen framework for smart contract development. Learn more about Truffle [here](https://trufflesuite.com/).

#### Installation Instructions

```bash
npm install -g truffle
```

### TypeScript

TypeScript is used to enhance the development experience. Learn more about TypeScript [here](https://www.typescriptlang.org/).

#### Installation and Execution Instructions

1. Initialize Truffle project:

```bash
truffle init
```

2. Create a new Solidity file in the contracts folder.

3. Compile the Solidity program:

```bash
truffle compile
```

4. Migrate the smart contract:

```bash
truffle migrate
```

5. Access the Truffle console:

```bash
truffle console
```

#### Ganache

Ganache is employed to run the Ethereum blockchain locally. More details about Ganache can be found [here](https://trufflesuite.com/ganache/).

### Solidity

Solidity is the programming language for writing smart contracts on the Ethereum blockchain. Learn more about Solidity [here](https://soliditylang.org/).
