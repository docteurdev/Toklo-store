const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
export const pool = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'toklo_manage',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});
