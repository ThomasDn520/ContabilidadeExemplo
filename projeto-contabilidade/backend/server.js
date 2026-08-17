import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/api/contato', (req, res) => {
  const { nome, email, telefone, mensagem } = req.body;
  console.log('--- Novo Contato Recebido ---');
  console.log(`Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`);
  console.log('----------------------------');

  res.status(200).json({ success: true, message: 'Mensagem enviada com sucesso! Retornaremos em breve.' });
});

app.listen(PORT, () => {
  console.log(`Servidor backend rodando na porta http://localhost:${PORT}`);
});