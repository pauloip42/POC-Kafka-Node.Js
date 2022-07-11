let producer = null;

const ProducerPort = {
  async setProducer(producerRef) {
    if (producerRef) {
      producer = producerRef;
    }
  },

  async publish(topicName, message) {
    try {
      const response = await producer.send({
        topic: topicName,
        messages: [{
          value: JSON.stringify(message),
        }],
      });
      return response[0];
    } catch (e) {
      return e;
    }
  },
};

module.exports = ProducerPort;
