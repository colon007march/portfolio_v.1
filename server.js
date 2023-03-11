require("dotenv").config;
const express = require("express");
const cors = require("cors");
const path = require("path");
const contactRoute = require("./route/contactRoute");
const bodyParser = require("body-parser");
const app = express();

// creating the middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// app.get("/", (req, res) => {
//   res.send("Access denied!");
// });
app.use("/", contactRoute);
// app.use("/contact", contactRoute);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}
const port = process.env.PORT || 5000;
app.listen(port, console.log("server is listening to port 5000"));
