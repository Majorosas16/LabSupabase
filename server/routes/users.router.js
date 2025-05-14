const express = require("express");
const {
  createUser,
  getProducts,
  updateUser,
  deleteUser,
  getPrice,
} = require("../controllers/users.controller");
const router = express.Router();

router.get("/products", getProducts);

router.get("/products-price", getPrice);

router.post("/users", createUser);

router.patch("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

module.exports = router;
