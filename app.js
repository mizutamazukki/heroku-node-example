var express = require("express");
const fs = require('fs');

const PORT = process.env.PORT || 5000;

var app = express();
app.get("/", (req, res) => {
  res.status(200).send("Express!!");
});
app.get("/api/news", function(req, res, next) {
  // ここに処理を書く
res.json(JSON.parse(fs.readFileSync('./api/news.json', 'utf8')));
});
app.get("/api/channels", function(req, res, next) {
  // ここに処理を書く
res.json(JSON.parse(fs.readFileSync('./api/channels.json', 'utf8')));
});
app.get("/api/result", function(req, res, next) {
  // ここに処理を書く
res.json(JSON.parse(fs.readFileSync('./api/result.json', 'utf8')));
});
// ポート3000番でlistenする
app.listen(PORT);
