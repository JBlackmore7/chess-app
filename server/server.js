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

app.use(cors());
app.use(express.json());

app.get("/profiles", (req, res) => {
  res.json({ profiles: chessProfile });
});

app.post("/profiles", (req, res) => {
  chessProfile.query(`INSERT INTO users (user) VALUES ("${req.body.text}")`, function (err, result) {
    if (err) {
      console.log("error inserting into database", err.sqlMessage);
    } else {
      console.log("successful insertion into database", result);
    }
  });
  res.sendStatus(201);
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
