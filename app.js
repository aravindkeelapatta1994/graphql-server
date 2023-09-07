import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
   return res.send("<h1> Welcome to IMDB APP </h1>")
})

app.post('/movie/create', (req, res) => {
    const reqBody = req.body;
    console.log(reqBody)
    return res.json({message: "Movie Created!"})
})

const port = process.env.PORT

app.listen(port, () => {
    console.log("Server Started...")
})