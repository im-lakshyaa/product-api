import express from 'express';
import fs from 'fs';

const PORT = 3000;
const app = express();


app.set('view engine', 'ejs');


app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send("Welcome to Product API");
});

app.get('/product', (req, res) => {
  fs.readFile('product.json', 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send("Error reading file");
    } else {
      const products = JSON.parse(data);
      res.render('products', { products });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
