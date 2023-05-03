// import postgres from "postgres";

const express = require("express");
const cors = require("cors");
// const sql = postgres({
//   /* options */
// }); // will use psql environment variables

const app = express();
const chessProfile = {
  firstName: "Jared",
  lastName: "Blackmore",
  email: "555@fake.com",
  difficulyLevel: "Intermediate",
};
const profiles = [chessProfile];

app.use(cors());
app.use(express.json());

app.get("/profiles", (request, response) => {
  response.json({ ChessProfiles: profiles });
  console.log("here2", response.body);
});

app.post("/profiles/:profileID", (request, response) => {
  console.log("here1", request.body);
  profiles.push({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    difficulyLevel: request.body.difficulty,
  });
});

const postUser = (userInfo) => {
  app.post("/profiles", (request, response) => {
    console.log("here1", request.body);
    profiles.push({
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      difficulyLevel: request.body.difficulty,
    });

    // response.json({ profiles: chessProfile });
  });
};

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
