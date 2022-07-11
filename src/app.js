import Fastify from 'fastify';
import 'dotenv/config';
import { addSoldier } from './mongodb.js';

export const app = Fastify({
  logger: false,
});

app.get('/health', (request, reply) => {
  reply.status(200).send();
});

app.post('/soldiers', (req, res) => {
  addSoldier({"_id":"qwe", "name":"123", "degree":"asd", "limitations":"zxc"})
  res.status(201).send('sol');
});
