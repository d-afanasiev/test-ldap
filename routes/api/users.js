const express = require("express");
const router = express.Router();
const ActiveDirectory = require("activedirectory");
const config = require("../../config/config");

const ad = new ActiveDirectory(config);

router.get("/", (req, res) => {
  console.log(req.headers.authorization);
  res.send("Hello World!");
});

router.post("/login", function (req, res) {
  const { query } = req.body;

  ad.find({ baseDN: query }, function (err, results) {
    const list = results.users.filter(
      (data) =>
        (data.userAccountControl !== "514" && data.title) ||
        (data.userAccountControl !== "66050" && data.title)
    );

    return res.json(list);
  });

});

module.exports = router;
