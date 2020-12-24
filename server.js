const express = require("express");

const app = express()
//エンドポイント　”/”にGETリクエストされた時に返す内容を指している
app.get('/', (req, res) => {
    res.send('hello, world');
});
app.get('/user', (req, res) => {
    res.status(200).json({ username: 'Mayu', age: 24 });
});
app.listen(8000, () => {
    console.log('server listening on port 8000...');
});
// CRUDによって通信の種類が分けられている