// import postgres from "postgres";

const express = require("express");
const cors = require("cors");
// const sql = postgres({
//   /* options */
// }); // will use psql environment variables

const app = express();
const chessProfile = {
  name: "Jared",
  difficulyLevel: "Intermediate",
  username: "Jar",
  email: "555@fake.com",
};
const profiles = [chessProfile];

app.use(cors());
app.use(express.json());

app.get("/profiles", (request, response) => {
  console.log("here2", response.body);
  response.json(profiles);
});

app.post("/profiles", (request, response) => {
  console.log("here1", request.body);
  profiles.push({
    name: request.body.name,
    difficulyLevel: request.body.difficulty,
    username: request.body.username,
    email: request.body.email,
  });
  // response.json({ profiles: chessProfile });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
