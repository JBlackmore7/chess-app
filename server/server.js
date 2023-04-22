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

app.get("/message", (req, res) => {
  res.json({ message: chessProfile });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
