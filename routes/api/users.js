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

  // ad.authenticate(username, password, function (err, auth) {
  //   if (err) {
  //     return res.json("Authentication failed!");
  //   }

  //   if (auth) {
  //     console.log(auth);
  //     return res.json(req.body);
  //     ad.isUserMemberOf(username, "101-DG-Room", function (err, isMember) {
  //       if (err) {
  //         console.log("ERROR: " + JSON.stringify(err));
  //         return;
  //       }
  //       console.log(username + " isMemberOf " + groupName + ": " + isMember);
  //     });
  //   } else {
  //     return res.json("Authentication failed!");
  //   }
  // });
});

module.exports = router;
