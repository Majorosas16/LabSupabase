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
  getProductsMulti,
  getPostWord,
} = require("../controllers/users.controller");
const router = express.Router();

router.get("/products", getProducts);

router.get("/products/price", getPrice);

router.get("/users", getUsers);

router.get("/users/email-username", getUserEmail);

router.get("/orders", getOrderCreateAt);

// Lab2

router.get("/product/price-category", getProductsMulti);

router.get("/post/tutorial", getPostWord);

// router.patch("/users/:id", updateUser);

// router.delete("/users/:id", deleteUser);

module.exports = router;
