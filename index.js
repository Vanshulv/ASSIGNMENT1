const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const generalRoutes = require("./controllers/routes");

const app = express();

app.engine(".hbs", exphbs.engine({ extname: ".hbs" }));
let views = path.join(__dirname, "views");
app.use(express.static("public"));
app.set("view engine", ".hbs");

app.use('/', generalRoutes)

const HTTP_PORT = process.env.PORT || 3000;

app.listen(HTTP_PORT, () => {
  console.log(`server listening on: ${HTTP_PORT}`);
});
