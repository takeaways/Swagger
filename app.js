const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/adder", (req, res) => {
  let one = req.query.one;
  let two = req.query.two;
  let result = Number(one) + Number(two);
  return res.status(200).send("result : " + result);
});

app.listen(8080, () => console.log(8080, "!!!"));
