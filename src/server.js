import {app} from './app.js';

const port = process.env.PORT || '3000';

app.listen({port}, (err, address) => {
  // if (err) {
  //   app.log.error(err)
  //   process.exit(1)
  // }
  // else{
  console.log(`listening to ${port}`);
  // }
});
