// packages
const express = require("express");
const mysql = require("mysql");
var bodyParser = require("body-parser");

// connect to MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "----",
  database: "forum",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL Connected...");
});

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// endpoints
app.get("/", function (req, res) {
  db.query("SELECT * FROM posts;", (err, results) => {
    if (err) {
      return res.send("error");
    } else {
      return res.json({
        data: results,
      });
    }
  });
});

// post request to post forum post to MySQL
app.post("/post_forumpost", function (req, res) {
  db.query(
    `INSERT INTO posts (user_id, post_title, post_text, post_date) VALUES (1, '${req.body.title}', '${req.body.content}', CURRENT_TIMESTAMP());`,
    (err, results) => {
      if (err) {
        return console.log(err);
      } else {
        return res.json({
          data: results,
        });
      }
    }
  );
});

// delete post using post_id
app.delete("/delete_post", function (req, res) {
  db.query(
    `DELETE FROM posts WHERE post_id = ${req.body.post_id};`,
    (err, results) => {
      if (err) {
        return console.log(err);
      } else {
        return res.json({
          data: results,
        });
      }
    }
  );
});

// listen
const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
