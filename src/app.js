import Fastify from 'fastify';
import 'dotenv/config';
import { addSoldier } from './mongodb.js';

export const app = Fastify({
  logger: false
});

app.get('/health', (request, reply) => {
  reply.status(200).send();
})

// app.post('/p' , (req,res) => {
//   res.send(req.body);
// })

// app.post('/soldiers', (req, res) => {
//   res.status(201).send('sol');
// });
