const axios = require('axios');
const Tokens = async(req,res)=>{
    const apiUrl = 'https://api.1inch.dev/swap/v5.2/1/tokens';
    const authToken = process.env.TOKEN; 

    const headers = {
      Authorization: `Bearer ${authToken}`
    };
    fetch(apiUrl, { headers })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      res.send(data);
      console.log(data);
    })
    .catch(error => {
      res.send(error);
      console.error('Fetch error:', error);
    });
};
const Quote =  async(req,res)=>{
    
    const src = req.body.src;
    const dst = req.body.dst;
    const amount = req.body.amount;
    const apiUrl = `https://api.1inch.dev/swap/v5.2/1/quote?src=${src}&dst=${dst}&amount=${amount}`
    const authToken = process.env.TOKEN; 

    const headers = {
      Authorization: `Bearer ${authToken}`
    };

    await axios.get(apiUrl, { headers })
    .then(response => {
      res.json(response.data);
      console.log(response.data);
    })
    .catch(error => {
      res.json(error);
      console.error('Axios error:', error);
    });

}
const Swap = async(req,res)=>{
    const src = req.body.src;
    const dst = req.body.dst;
    const amount = req.body.amount;
    const from = process.env.PRIVATE_KEY1;
    const slippage = req.body.slippage;
    console.log(from);
    const apiUrl = `https://api.1inch.dev/swap/v5.2/1/swap?src=${src}&dst=${dst}&amount=${amount}&from=${from}&slippage=${slippage}`
    const authToken = process.env.TOKEN; 

    const headers = {
      Authorization: `Bearer ${authToken}`
    };
    await axios.get(apiUrl, { headers })
    .then(response => {
      res.json(response);
      console.log(response.data);
    })
    .catch(error => {
      res.json(error);
      console.error('Axios error:', error);
    });
}
module.exports = {Tokens,Quote,Swap};
