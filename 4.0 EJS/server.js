const express = require("express");
const app = express();
// Set EJS as the templating engine

const whichWeek = (req, res, next) => {
  let day = new Date().getDay();
  weekdayOrWeekend =(day === 0 || day === 6) ? "It's a weekend, it's time to have fun" : "It's a weekday, it's time to work hard";
  next();
};
app.use(whichWeek);
app.get("/", (req, res) => {
  res.render("index.ejs", { name: weekdayOrWeekend });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
