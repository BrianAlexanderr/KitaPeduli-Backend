const express = require('express');
const dotenv = require('dotenv');
const {PrismaClient} = require('./generated/prisma');

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

dotenv.config();

const PORT = process.env.PORT;

app.get('/api', (request, respons) => {
    respons.send('wow');
});

app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany();

    res.send(users)
})

app.listen(PORT, () => {
    console.log('Express API running in port: ' + PORT);
});