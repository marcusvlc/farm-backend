# Como executar a aplicação

Para executar a aplicação, é necessário ter o YARN ou NPM instalado em sua máquina, e prosseguir com os comandos:

## Passo 1: Instalar dependências

```
$ yarn install
```

## Passo 2: Configurar banco de dados

Nesse passo, é necessário que você possua uma instância do POSTGRESQL executando em sua máquina. E deve ser configurado o arquivo `src/config/database.js` com as devidas credenciais do seu banco.

## Passo 3: Criar a database
O comando abaixo criará uma database com o nome especificado na configuração feita no passo anterior. Não é necessário caso já exista.
```
$ yarn sequelize db:create
```

## Passo 3: Criar as tabelas
O comando abaixo irá criar as tabelas a partir dos arquivos de migrations disponíveis em `src/database/migrations`

```
$ yarn sequelize db:migrate
```

## Passo 4: Iniciar o servidor
```
$ yarn dev
```
Após esse comando, o servidor estará disponível em http://localhost:3333

