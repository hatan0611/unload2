const express = require('express');
const path = require('path');

const app = express();
const port = 3.134.238.10;

// Cung cấp tĩnh các file trong thư mục public
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
