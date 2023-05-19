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

module.exports = {
  getHomePage,
  getDetailPage,
  createNewUser,
};
