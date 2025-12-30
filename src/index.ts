import express from "express";

const app = express();
app.use(express.json());
let x = 1;

app.get("/", (req, res) => {
  res.json({
    message: "Hi there",
  });
});

app.get("/todo", (req, res) => {
  res.json({
    message: "Hi there",
  });
});
app.get("/todwqwfo", (req, res) => {
  res.json({
    message: "Hi there",
  });
});
