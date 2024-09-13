# CrudCarros

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.15.

Este projeto é uma aplicação Angular com uma API mock para simular requisições de dados locais.

## Como Rodar o Projeto

### 1. Inicializar o Projeto e o Mock API
Execute o comando abaixo para iniciar o projeto e o servidor mock simultaneamente:

```bash
npm run start
```

- A aplicação estará disponível em: `http://localhost:4200/`
- O servidor mock estará disponível em: `http://localhost:3000/carros`

### 2. Rodar de Forma Separada

Caso prefira rodar o projeto Angular e o servidor mock separadamente, siga os passos abaixo:

1. Para rodar a aplicação Angular, use:

```bash
ng serve
```

A aplicação estará disponível em: `http://localhost:4200/`

2. Para iniciar o mock com `json-server`, use:

```bash
json-server --watch db.json --port 3000
```

O servidor mock estará disponível em: `http://localhost:3000/carros`

---

Lembre-se de instalar as dependências do projeto antes de rodá-lo com:

```bash
npm install
```


