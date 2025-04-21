import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cookieParser());


app.get("/", (req, res) => {
  res.send("Hello World! from LeetLabs 🚀");
});

app.use("/api/v1/auth", authRoutes);


app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
