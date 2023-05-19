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

module.exports = {
  getHomePage,
  getDetailPage,
};
