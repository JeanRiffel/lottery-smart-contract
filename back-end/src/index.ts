import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import LotterySmartContract from './LotterySmartContract';

const lotterySmartContract = new LotterySmartContract();
const contract = lotterySmartContract.getContract();

const app = express();
app.use(cors());
app.use(bodyParser.json());

interface Bet {
  betValue: string;
  betAmount: number;
}

const bets: Bet[] = [];

app.post('/place-bet', (req: Request, res: Response) => {
  const { betValue, betAmount } = req.body as Bet;
  bets.push({ betValue, betAmount });
});

app.get('/contract-name', async(req: Request, res: Response) => {
  const data = await contract.methods.contractName().call();
  res.status(200).json({contractName: data});
});

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({status: 'ok' });
});

app.listen(3001, () => {
  console.log('Backend server is running on port 3001');
});
