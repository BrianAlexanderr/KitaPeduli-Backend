import express from 'express';
import dotenv from 'dotenv';
import userRoute from './routes/user.routes.js';

const app = express();

app.use(express.json());

dotenv.config();

app.use('/api/save_user', userRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log('Express API running in port: ' + PORT);
});