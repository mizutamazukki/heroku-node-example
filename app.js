var express = require("express");
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
app.get("/api/objectdata", function(req, res, next) {
  // ここに処理を書く
res.json(responseObjectData);
});
// ポート3000番でlistenする
app.listen(3000);
