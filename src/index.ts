import Express from 'express';
import path from 'path';

const app = Express();

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
})

app.listen(3000, () => {
  console.log('server listening port 3000...');
})
