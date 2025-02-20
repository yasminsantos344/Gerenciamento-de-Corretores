# 📌 CRUD com PHP, MySQL e jQuery

Este projeto foi desenvolvido para um processo seletivo e serve como uma demonstração prática do funcionamento de **PHP**, **MySQL** e **jQuery** em um sistema básico de CRUD (Create, Read, Update, Delete).

## 🚀 Tecnologias Utilizadas

- **PHP** - Backend para processar requisições e manipular o banco de dados.
- **MySQL** - Banco de dados relacional para armazenar as informações.
- **jQuery** - Facilita a manipulação do DOM e requisições assíncronas (AJAX).
- **HTML/CSS** - Estrutura e estilização do frontend.

## 📂 Estrutura do Projeto

```
📂 projeto-crud
 ├── 📁 assets           # Arquivos de estilo e scripts
 ├── 📁 database         # Configuração do banco de dados
 ├── 📁 includes         # Arquivos reutilizáveis (conexão, header, footer)
 ├── 📄 index.php        # Página inicial com listagem de registros
 ├── 📄 create.php       # Página para adicionar novos registros
 ├── 📄 update.php       # Página para editar registros
 ├── 📄 delete.php       # Script para remover registros
 └── 📄 README.md        # Documentação do projeto
```

## 🛠️ Como Rodar o Projeto

1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/projeto-crud.git
   ```

2. Importe o banco de dados MySQL:
   - O arquivo `database.sql` contém a estrutura necessária.
   - Utilize um gerenciador como **phpMyAdmin** ou **MySQL Workbench**.

3. Configure a conexão com o banco de dados:
   - Edite o arquivo `database/config.php` com suas credenciais do MySQL.

4. Inicie um servidor local (XAMPP, WAMP ou outro):
   ```sh
   php -S localhost:8000
   ```

5. Acesse no navegador:
   ```
   http://localhost:8000/
   ```

## ✨ Funcionalidades

✔️ Cadastro de registros
✔️ Listagem de dados do banco
✔️ Atualização de informações
✔️ Exclusão de registros
✔️ Requisições assíncronas com jQuery/AJAX

## 📷 Demonstração

![Demonstração do CRUD](https://github.com/user-attachments/assets/87c8b625-a8e6-4fd4-987f-751e55c43d2d)

## 🤝 Contribuição
Fique à vontade para abrir _issues_ e enviar _pull requests_ para melhorias!

## 📜 Licença
Este projeto é de código aberto e pode ser utilizado livremente.

---

Feito com ❤️ por [Yasmin Santos](https://github.com/yasminsantos344) 🚀
