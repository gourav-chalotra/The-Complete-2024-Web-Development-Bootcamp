import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    title:"Enter your name",
  });
});

app.post("/submit", (req, res) => {
    let name =  req.body["fName"]+req.body["lName"];
    let length = name.length;
    res.render("index.ejs", {
        title: `Your name contains ${length}`
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
