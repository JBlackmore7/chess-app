// import postgres from "postgres";
const express = require("express");
const cors = require("cors");
// const sql = postgres({
//   /* options */
// }); // will use psql environment variables
const app = express();

const http = require("http");
const fs = require("fs").promises;
const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  fs.readFile(__dirname + "/index.html")
    .then((contents) => {
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end(contents);
    })
    .catch((err) => {
      res.writeHead(500);
      res.end(err);
      return;
    });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

const chessProfile = {
  firstName: "Jared",
  lastName: "Blackmore",
  email: "555@fake.com",
  userName: "JBlackmore",
  difficulyLevel: "Intermediate",
};
const profiles = [chessProfile];

app.use(cors());
app.use(express.json());

app.get("/profiles", (request, response) => {
  response.json({ ChessProfiles: profiles });
  console.log("here2", response.body);
});

app.post("/profiles", (request, response) => {
  console.log("here1", request.body);
  profiles.push({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    userName: request.body.userName,
    difficulyLevel: request.body.difficulty,
  });
});

app.put("/", (request, response) => {});

app.delete("/", (req, res) => {
  res.send("Got a DELETE request at /user");
});

// app.listen(8000, () => {
//   console.log(`Server is running on port 8000.`);
// });
