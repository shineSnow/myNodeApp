const mysql = require('mysql');

module.exports = function (sqlTxt) {
  return new Promise((resolve, reject) => {
    const options = {
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'project_blog'
    }
    let pool = mysql.createPool(options);
    pool.getConnection((err, connection) => {
      if (err) reject(err);
      connection.query(sqlTxt, (err, results, fields) => {
        if (err) reject(err);
        resolve(results);
        connection.release();
      })
    })
  })

}