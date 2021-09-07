import Express from 'express';

const app = Express();

app.get('/', (req, res, next) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('안녕하세요!!인썸입니다.');
})

app.get('/:id', (req, res, next) => {
  const name = req.params.id;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end(`${name}님 안녕하세요~~!!!`);
})

app.listen(3000, () => {
  console.log('server listening port 3000...');
})