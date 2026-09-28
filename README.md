# Atividade-Express

# Instalação e Execução

1. **Clone o repositório:**
   _No terminal_
   git clone https://github.com/Handrei-2/Atividade-Express.git
   cd Atividade-Express

2. **Instale as dependências:**
   _No terminal_
   npm install

3. **Inicie a API:**
   _No terminal_
   node server.js
   _O servidor vai ser aberto no URL: "http://localhost:3000"_

# Rotas da API

| Método | Rota | Descrição |

| `GET` | `/livros` | Lista todos os livros |
| `GET` | `/livros/:id` | Busca um livro pelo ID |
| `POST` | `/livros` | Cadastra um novo livro |
| `PUT` | `/livros/:id` | Atualiza um livro existente |
| `DELETE` | `/livros/:id` | Remove um livro pelo ID |

# Como testar a API no Postman

Abra o Postman e configure cada requisição conforme os passos abaixo:

1.  Listar todos os livros

- **Método:** `GET`
- **URL:** `http://localhost:3000/livros`
- Clique em **Send**.

2.  Buscar livro por ID

- **Método:** `GET`
- **URL:** `http://localhost:3000/livros/1`
- Clique em **Send**.

3.  Cadastrar um novo livro

- **Método:** `POST`
- **URL:** `http://localhost:3000/livros`
- **Configuração no Postman:**
  1. Vá na aba **Body**.
  2. Selecione a opção **raw**.
  3. No menu à direita, mude de _Text_ para **JSON**.
  4. Insira o seguinte conteúdo:
     json
     {
     "titulo": "Dom Casmurro",
     "autor": "Machado de Assis",
     "ano": 1899
     }

  5. Clique em **Send**.

4.  Atualizar um livro

- **Método:** `PUT`
- **URL:** `http://localhost:3000/livros/1`
- **Configuração no Postman:**
  1. Vá na aba **Body**.
  2. Selecione **raw** e mude o tipo para **JSON**.
  3. Insira os dados atualizados:
     json
     {
     "titulo": "O Hobbit: Edição Ilustrada",
     "autor": "J.R.R. Tolkien",
     "ano": 1937
     }

  4. Clique em **Send**.

5.  Excluir um livro

- **Método:** `DELETE`
- **URL:** `http://localhost:3000/livros/1`
- Clique em **Send**.
