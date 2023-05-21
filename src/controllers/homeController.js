import pool from "../configs/connectDB";

let getHomePage = async (req, res) => {
  // simple query
  let data = [];

  const [rows, fields] = await pool.execute("SELECT * FROM users ");
  return res.render("index.ejs", { dataUser: rows });
};

const getDetailPage = async (req, res) => {
  let id = req.params.id;
  let [user] = await pool.execute(`select * from users where id = ? `, [id]);

  return res.send(JSON.stringify(user));
};

const createNewUser = async (req, res) => {
  let { firstName, lastName, email, address } = req.body;

  await pool.execute(
    `insert into users(firstName,lastName,email,address) values (?,?,?,?) `,
    [firstName, lastName, email, address]
  );

  return res.redirect("/");
};

const deleteUser = async (req, res) => {
  const id = req.body.userId;

  await pool.execute("delete from users where id = ?", [id]);
  return res.redirect("/");
};

const editUser = async (req, res) => {
  const id = req.params.id;
  let [user] = await pool.execute("select * from users where id = ?", [id]);
  return res.render("update.ejs", { dataUser: user[0] });
};

const updateUser = async (req, res) => {
  let { firstName, lastName, email, address, id } = req.body;
  await pool.execute(
    "update users set firstName = ?,lastName = ?,email = ?,address = ? where id =?",
    [firstName, lastName, email, address, id]
  );
  return res.redirect("/");
};

module.exports = {
  getHomePage,
  getDetailPage,
  createNewUser,
  editUser,
  deleteUser,
  updateUser,
};
