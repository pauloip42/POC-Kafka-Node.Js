require('./kafka_server');
const express = require('express');
const cors = require('cors');
const ProducerPort = require('./producer');

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use(express.json());

const port = process.env.PORT || 4000;

app.post('/', async (req, res) => {
    const message = req.body.message;
    console.log('Mensagem: ',req.body.message)
    ProducerPort.publish('topic-test', message);
    res.status(200);
    res.send('')
});

app.listen(port, () => {console.log('Started!')});