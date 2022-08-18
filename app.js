const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();

function requireHTTPS(req, res, next) {
  if (!req.secure && req.get("x-forwarded-proto") !== "https") {
    return res.redirect("https://" + req.get("host") + req.url);
  }
  next();
}

app.use(express.static("./dist/my-task-frontend"));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "./dist/my-task-frontend/" });
});

app.use(requireHTTPS);

app.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
});
