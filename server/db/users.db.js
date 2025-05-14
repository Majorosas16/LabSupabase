const supabaseCli = require("../services/supabase.service");

const getAllUsers = async () => {
  const { data, error } = await supabaseCli.from("products").select();
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

const getPrices = async () => {
  const { data, error } = await supabaseCli.from("products").select("price");
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

const createUserInDB = async (user) => {
  const { data, error } = await supabaseCli
    .from("users")
    .insert([user])
    .select();

  if (error) {
    console.error(error);
    return error;
  }

  return data;
};

const updateUserInDb = async (newData, userId) => {
  const { data, error } = await supabaseCli
    .from("users")
    .update(newData)
    .eq("id", userId)
    .select();

  if (error) {
    console.error(error);
  }

  return data;
};

const deleteUserInDb = async (userId) => {
  const { data, error } = await supabaseCli
    .from("users")
    .delete()
    .eq("id", userId)
    .select();

  if (error) {
    console.error(error);
  }

  return data;
};

module.exports = {
  getAllUsers,
  getPrices,
  createUserInDB,
  updateUserInDb,
  deleteUserInDb,
};
