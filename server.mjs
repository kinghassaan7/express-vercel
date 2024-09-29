import express from "express";

const app = express();
const PORT = 3000;

app.get('/api/users',(req,res)=>{
  res.status(200).json({message: 'The server is successfully running'})
})

app.listen(PORT, ()=>{
  console.log(`The server is listening at http://localhost:${PORT}`)  
})