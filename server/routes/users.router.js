const express = require("express");
const {
  createUser,
  getProducts,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");
const router = express.Router();

router.get("/products", getProducts);

router.post("/users", createUser);

router.patch("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

module.exports = router;
