var express = require("express");
const fs = require('fs');

const PORT = process.env.PORT || 5000;

// レスポンスのデータ
const responseObjectData = {
  textObject1 : {
    title: 'Objectのタイトル1です',
    subTitle: 'Objectのサブタイトル1です',
    bodyText: 'Objectの本文1です'
  },
  textObject2 : {
    title: 'Objectのタイトル2です',
    subTitle: 'Objectのサブタイトル2です',
    bodyText: 'Objectの本文2です'
  },
};
var app = express();
app.get("/", (req, res) => {
  res.status(200).send("Express!!");
});
app.get("/api/news", function(req, res, next) {
  // ここに処理を書く
res.json(JSON.parse(fs.readFileSync('./api/news.json', 'utf8')));
});
// ポート3000番でlistenする
app.listen(PORT);
