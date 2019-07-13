const express = require("express");
const jwt = require("jsonwebtoken");
const port = 5000;
const app = express();

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to Node"
  });
});

app.post("/auth/login", (req, res) => {
  const user = {
    id: 0125,
    userame: "SaroarShahan",
    email: "shahanntk@gmail.com"
  };
  jwt.sign(user, "loveNodeJs", (error, token) => {
    res.json({ token });
  });
});

app.listen(port, () => {
  console.log(`port is connect on port ${port}`);
});
