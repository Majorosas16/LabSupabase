const {
  getAllProducts,
  getAllUsers,
  getAllOrders,
  createUserInDB,
  updateUserInDb,
  deleteUserInDb,
  getAllPost,
  getFirst10Products,
  getProductsByCurrentUser,
} = require("../db/users.db");

const getProducts = async (req, res) => {
  const users = await getAllProducts();
  res.send(users);
};

const getPrice = async (req, res) => {
  let newPrices = [];
  const productsPrice = await getAllProducts();

  console.log("esto llega de productsPrice", productsPrice);

  productsPrice.forEach((element) => {
    if (element.price < 50) {
      newPrices.push({price: element.price});
    }
  });

  res.send(newPrices);
};

const getUsers = async (req, res) => {
  const users = await getAllUsers();
  res.send(users);
};

const getUserEmail = async (req, res) => {
  let newArray = [];
  const users = await getAllUsers();

  console.log("esto llega de users", users);

  users.forEach((element) => {
    newArray.push({ username: element.username, email: element.email });
  });

  res.send(newArray);
};

const getOrderCreateAt = async (req, res) => {
  const orders = await getAllOrders();
  console.log("esto llega de orders", orders);
  res.send(orders); 
};

// Lab 2

const getProductsMulti = async (req, res) => {
  let newArray = [];
  const productsPrice = await getAllProducts();
  console.log("esto llega de productsPrice", productsPrice);

  productsPrice.forEach((element) => {
    if (element.price > 30 && element.category === "Electronics") {
      newArray.push(element);
    }
  });

  res.send(newArray); 
};

const getPostWord = async (req, res) => {
  const posts = await getAllPost(); 
  console.log("esto llega de posts", posts);
  res.send(posts); 
};

const getFirstProducts = async (req, res) => {
  const productsLimit = await getFirst10Products(); 
  console.log("esto llega de productsLimit", productsLimit);
  res.send(productsLimit); 
};

const getProductsUser = async (req, res) => {
  const userId = req.query.user_id; // ← viene por query: ?user_id=xxxxx

  if (!userId) {
    return res.status(400).json({ error: "Falta el user_id" });
  }

  const data = await getProductsByCurrentUser(userId);
  res.json(data);
};


// const createUser = async (req, res) => {
//   const { name } = req.body;
//   const response = await createUserInDB({ name });
//   res.send(response);
// };

// const updateUser = async (req, res) => {
//   const { name } = req.body;
//   const { id: userId } = req.params;
//   const response = await updateUserInDb({ name }, userId);
//   res.send(response);
// };

// const deleteUser = async (req, res) => {
//   const { id: userId } = req.params;
//   const response = await deleteUserInDb(userId);
//   res.send(response);
// };

module.exports = {
  getProducts,
  getUsers,
  getPrice,
  getUserEmail,
  getOrderCreateAt,
  getProductsMulti,
  getPostWord,
  getFirstProducts,
  getProductsUser,
  // createUser,
  // updateUser,
  // deleteUser,
};
