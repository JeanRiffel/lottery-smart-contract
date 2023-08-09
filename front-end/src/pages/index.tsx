import { useState, useEffect } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';

export default function Home() {
  const [betValue, setBetValue] = useState('');
  const [betAmount, setBetAmount] = useState('');
  const [gambler, setGambler] = useState('');
  const [address, setAddress] = useState('')
  const [contractName, setContractName] = useState('');
  const [randomNumber, setRandomNumber] = useState('');
  const [winner, setWinner] = useState('');

  useEffect( ()=>{
    handleContractName();
  }, [])

  const handleWinner = async () => {
    const instance = axios.create({ 
      baseURL: 'http://localhost:3001'
    })

    await instance.get('/winner')
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      });    

  }

  const handleBet = async () => {

    const payload = {
      betValue,
      betAmount,
      address
    }

    const instance = axios.create({ 
      baseURL: 'http://localhost:3001'
    })

    await instance.post('/place-bet', payload )
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      });
  };

  const handleContractName = async () =>{
    const instance = axios.create({ 
      baseURL: 'http://localhost:3001'
    })

    await instance.get('/contract-name')
      .then(response => {
        console.log(response.data.contractName)
        setContractName(response.data.contractName)
      })
      .catch(error => {
        console.log(error)
      });
  }

  return (
    <div>
      <Typography
        variant="h2" 
        gutterBottom
      >
       {contractName}
      </Typography>
      <div>
        <TextField
          variant="outlined"    
          label="Gambler"
          onChange={(e) => setGambler(e.target.value)}
        />
        <TextField
          variant="outlined"    
          label="Bet Value" 
          onChange={(e) => setBetValue(e.target.value)}
        />
        <TextField
          variant="outlined" 
          label="Bet Amount"          
          onChange={(e) => setBetAmount(e.target.value)}
        />
        <TextField
          variant="outlined" 
          label="Address"          
          onChange={(e) => setAddress(e.target.value)}
        />        
        <Button 
          variant="contained"
          onClick={handleBet}
        >
          Place Bet
        </Button>

        <Button 
          variant="contained"
          onClick={handleWinner}
        >
          Get Winner
        </Button>
      </div>
      {randomNumber && <p>Random Number: {randomNumber}</p>}
      {winner && <p>Winner: {winner}</p>}
    </div>
  );
}
