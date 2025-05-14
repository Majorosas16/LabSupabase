const express = require("express");
const {
  // createUser,
  // updateUser,
  // deleteUser,
  getProducts,
  getPrice,
  getUserEmail,
  getUsers,
  getOrderCreateAt,
} = require("../controllers/users.controller");
const router = express.Router();

router.get("/products", getProducts);

router.get("/products/price", getPrice);

router.get("/users", getUsers);

router.get("/users/email-username", getUserEmail);

router.get("/orders", getOrderCreateAt);

// router.patch("/users/:id", updateUser);

// router.delete("/users/:id", deleteUser);

module.exports = router;
