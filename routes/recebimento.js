const express = require('express');
const router = express.Router();
const { sql, config } = require('../db');

router.get('/', async (req, res) => {
  try {
    await sql.connect(config);
    const result = await sql.query(`
      SELECT 
        CD_Empresa,
        CD_Filial,
        NR_Agenda,
        TP_Agenda,
        CGC_CPF_Cliente,
        DT_Cadastro,
        DT_Recebimento,
        DT_Expedicao,
        TP_Movimento,
        CD_Status_Agenda,
        QT_Volume,
        FL_Conferido,
        FL_Armazenado
      FROM WMS_Agenda
      WHERE TP_Movimento = 'RE' -- Exemplo: RE = Recebimento (ajuste se necessário)
      ORDER BY DT_Cadastro DESC
    `);

    res.json({ recebimentos: result.recordset });
  } catch (err) {
    console.error("Erro ao buscar recebimentos:", err);
    res.status(500).json({ error: "Erro ao buscar recebimentos." });
  }
});

module.exports = router;
