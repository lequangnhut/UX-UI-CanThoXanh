const express = require('express');
const app = express();

let counter = 325;

app.get('/', (req, res) => {
    counter++;
    res.send(`Lượt truy cập: ${counter}`);
});

app.listen(3000, () => {
    console.log('Server đang lắng nghe tại http://localhost:3000');
});
