const supabaseCli = require("../services/supabase.service");

const getAllProducts = async () => {
  const { data, error } = await supabaseCli.from("products").select();
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

const getFirst10Products = async () => {
  const { data, error } = await supabaseCli.from("products").select().limit(10);

  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

const getAllUsers = async () => {
  const { data, error } = await supabaseCli.from("users").select();
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

const getAllOrders = async () => {
  const { data, error } = await supabaseCli
    .from("orders")
    .select()
    .order("created_at", { ascending: false }); // ← clave aquí

  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

const getAllPost = async () => {
  const { data, error } = await supabaseCli
    .from("posts")
    .select("title")
    .ilike("title", "%tutorial%");
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

const getProductsByCurrentUser = async (userId) => {
  const { data, error } = await supabaseCli
    .from("products")
    .select()
    .eq("user_id", userId);

  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

// const createUserInDB = async (user) => {
//   const { data, error } = await supabaseCli
//     .from("users")
//     .insert([user])
//     .select();

//   if (error) {
//     console.error(error);
//     return error;
//   }

//   return data;
// };

// const updateUserInDb = async (newData, userId) => {
//   const { data, error } = await supabaseCli
//     .from("users")
//     .update(newData)
//     .eq("id", userId)
//     .select();

//   if (error) {
//     console.error(error);
//   }

//   return data;
// };

// const deleteUserInDb = async (userId) => {
//   const { data, error } = await supabaseCli
//     .from("users")
//     .delete()
//     .eq("id", userId)
//     .select();

//   if (error) {
//     console.error(error);
//   }

//   return data;
// };

module.exports = {
  getAllProducts,
  getAllUsers,
  getAllOrders,
  getAllPost,
  getFirst10Products,
  getProductsByCurrentUser,
  // createUserInDB,
  // updateUserInDb,
  // deleteUserInDb,
};
