import { app } from '../src/app.js';

const test = async () => {
  const response = await app.inject({
    method: 'GET',
    url: '/health'
  });

  console.log('status code: ', response.statusCode);
  console.log('body: ', response.body);
}
test();