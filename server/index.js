// run the server
const app = require('./app');

app.listen(app.get('port'),
  // eslint-disable-next-line no-console
  () => console.log(`server run on http://localhost:${app.get('port')}`));
