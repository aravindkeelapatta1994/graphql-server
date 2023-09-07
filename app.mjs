import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
   return res.json({
     message: "Home Pages"
   })
})

const port = process.env.PORT

app.listen(port, () => {
    console.log("Server Started...")
})
