const sql = require("mssql");

const config = {
  user: 'dbMantran916',
  password: '@@tst916##',
  server: 'db.mantran.eti.br',
  port: 35104,
  database: 'dbMantran916',
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

module.exports = { sql, config };
