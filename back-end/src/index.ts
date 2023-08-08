import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
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

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({status: 'ok' });
});

app.listen(3001, () => {
  console.log('Backend server is running on port 3001');
});
