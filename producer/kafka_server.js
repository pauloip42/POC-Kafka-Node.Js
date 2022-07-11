const { Kafka } = require('kafkajs');
const ip = require('ip')

require('dotenv').config();

const host = process.env.HOST_IP || ip.address()

const kafka = new Kafka({
  clientId: 'example-producer',
  brokers: [`${host}:9092`],
});

const producer = kafka.producer();
producer.connect();

require('./producer').setProducer(producer);

module.exports = kafka;
