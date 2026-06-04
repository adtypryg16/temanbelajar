const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host:     process.env.MYSQLHOST,
  port:     process.env.MYSQLPORT,
  user:     process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  ssl:{
    rejectUnauthorized: false }
    
});

(async () => {
  try {
    const conn = await pool.getConnection();
    console.log('✅ Database MySQL terhubung');
    conn.release();
  } catch (err) {
    console.error('❌ Koneksi database gagal:', err.message);
  }
})();

module.exports = pool;
