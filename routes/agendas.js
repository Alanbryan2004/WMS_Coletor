const express = require('express');
const router = express.Router();
const { sql, config } = require('../db');

router.get('/', async (req, res) => {
  try {
    await sql.connect(config);
    const result = await sql.query`SELECT id, numero FROM Agendas`; // ajuste se necessário
    res.json({ agendas: result.recordset });
  } catch (err) {
    console.error("Erro ao buscar agendas:", err);
    res.status(500).json({ error: "Erro ao buscar agendas." });
  }
});

module.exports = router;
