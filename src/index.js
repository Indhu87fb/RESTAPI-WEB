const express = require("express");
const students = require("./models/studentDb");
const app = express();

app.get("/", (request, response) => {
  response.send("hello!!!");
});

app.get("/studentDb", (req, res) => {
  /*
  express is smart enough to figure out the
  response headers mime type
   */
  res.status(200);
  res.json({ students });
  /* Its good practice to be explicit of the status codes and response types*/

  res.send(students);
  // res.send("<h1>Hey</h1>")
});
app.post("/studentDb", (req, res) => {
  res.send("post method called");
});

const server = app.listen(8080, () => {
  console.log("server running on port " + server.address().port + ".");
  // console.log(`server running on port:${server.address().port}.`);
});
