const express = require("express");
const router = express.Router();

let Post = require("../models/postModel");

router.route("/").get((req, res) => {
  Post.find()
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json("error " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const comment = req.body.comment;
  const date = Date.parse(req.body.date);

  const newPost = new Post({
    username,
    description,
    comment,
    date,
  });
  newPost
    .save()
    .then(() => res.json("post added"))
    .catch((err) => res.status(400).json("err " + err));
});

module.exports = router;
