import express from "express";

const app = express();
const port = 3000;

const logger = (req,res,next)=>{
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  next();
}
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/about", (req, res) => {
  res.send("Hello about");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
