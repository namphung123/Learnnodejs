import connection from "../configs/connectDB";

let getHomePage = (req, res) => {
  // simple query
  let data = [];
  connection.query("SELECT * FROM `users`", function (err, results, fields) {
    data = results.map((rows) => {
      return rows;
    });
    res.render("index.ejs", { dataUser: data });
  });
};

module.exports = {
  getHomePage,
};
