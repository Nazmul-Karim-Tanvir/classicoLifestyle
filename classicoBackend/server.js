import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

// app config
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// db connection
connectDB();

app.get('/', (req, res) => {
  res.send('Classico LifeStyle API Running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// mongodb+srv://classicocode:124365789mojaTa@cluster0.bwipms0.mongodb.net/?

// 103.73.197.109/32
