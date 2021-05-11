const express = require("express");
const User = require("../models/user");
const router = new express.Router();

router.post("/user", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    console.log("error", error);
    res.status(400).send(error);
  }
});

router.post("/user/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );

    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    console.log("error", error);
    res.status(400).send(error);
  }
});

module.exports = router;
