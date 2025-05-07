const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
const agendasRoute = require('./routes/agendas');
app.use('/api/agenda', agendasRoute);

const recebimentoRoute = require('./routes/recebimento');
app.use('/api/recebimento', recebimentoRoute);

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor backend rodando em http://localhost:${PORT}`);
});
