const express = require("express");
const students = require("./models/studentDb");
const bodyParse = require("body-parser");
const app = express();

app.use(bodyParse.json());

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
  if (req.body.firstName && req.body.lastName) {
    students.push(req.body);
    res.status(200).json({ message: "student created successful" });
  } else {
    res.status(400).send("bad request");
  }
  // console.log(req.body);
  // res.send("post method");
  //res.status(200).json({message:"student created successful"});
});

app.get("/studentDb/:id", (req, res) => {
  //const studentId==req.params;
  const { id = "" } = req.params;
  const requiredstudent = students.find(student => {
    if (parseInt(id) === student.id) return true;
    else return false;
  });
  res.send(requiredstudent);
});

const server = app.listen(8080, () => {
  console.log("server running on port " + server.address().port + ".");
  // console.log(`server running on port:${server.address().port}.`);
});
