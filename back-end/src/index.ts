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
  address: string
}

const bets: Bet[] = [];

app.post('/place-bet', async(req: Request, res: Response) => {
  const { betValue, betAmount, address } = req.body as Bet;
  
  const wei = lotterySmartContract.getToWei(betAmount);
  const result = await contract.methods.enter().send({
    from: address,
    value: wei
  });

  //res.status(200).json({result})
  console.log(result)
});


app.get('/winner', async(req: Request, res: Response) => {
  
  const result = await contract.methods.pickWinner().call()

  //res.status(200).json({result})
  console.log('pickWinner', result)
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
