var mysql = require('mysql');
var pool;
module.exports = {
    getPool: function () {
      if (pool) return pool;
      pool = mysql.createPool({
        host: '127.0.0.1',
        user: 'root',
		port: '3306',
        password: '12345',
        database: 'gangwar'
    });
      return pool;
    }
};
