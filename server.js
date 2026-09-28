const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let livros = [
  { id: 1, titulo: "O Hobbit", autor: "J.R.R. Tolkien", ano: 1937 },
  { id: 2, titulo: "1984", autor: "George Orwell", ano: 1949 },
];

let proximoId = 3;

// GET /livros
app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

// GET /livros/:id
app.get("/livros/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const livro = livros.find((l) => l.id === id);

  if (!livro) {
    return res.status(404).json({ mensagem: "Livro não encontrado." });
  }

  res.status(200).json(livro);
});

// POST /livros
app.post("/livros", (req, res) => {
  const { titulo, autor, ano } = req.body;

  if (!titulo || !autor || !ano) {
    return res
      .status(400)
      .json({ mensagem: "Título, autor e ano são obrigatórios." });
  }

  const novoLivro = {
    id: proximoId++,
    titulo,
    autor,
    ano: Number(ano),
  };

  livros.push(novoLivro);
  res.status(201).json(novoLivro);
});

// PUT /livros/:id
app.put("/livros/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { titulo, autor, ano } = req.body;

  const indice = livros.findIndex((l) => l.id === id);

  if (indice === -1) {
    return res.status(404).json({ mensagem: "Livro não encontrado." });
  }

  if (!titulo || !autor || !ano) {
    return res
      .status(400)
      .json({ mensagem: "Título, autor e ano são obrigatórios." });
  }

  livros[indice] = {
    id,
    titulo,
    autor,
    ano: Number(ano),
  };

  res.status(200).json(livros[indice]);
});

// DELETE /livros/:id
app.delete("/livros/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const indice = livros.findIndex((l) => l.id === id);

  if (indice === -1) {
    return res.status(404).json({ mensagem: "Livro não encontrado." });
  }

  livros.splice(indice, 1);
  res.status(200).json({ mensagem: "Livro removido com sucesso." });
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
