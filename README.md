
# Controle de despesas corporativas

# Descrição
Uma aplicação para gerenciar despesas de viagens corporativas, uma API com gerenciamento de usuários de despesas.


## Documentação da API

## Instalação

```bash
$ npm install
$ npx prisma migrate dev
$ npx prisma generate
```

## Executando a aplicação

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Rota /Colaborador

#### Cria um novo colaborador

```http
  POST/colaborador
```

| Header   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `Bearer JWT` | **Obrigatório**. Token JWT para acessar a rota |

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `nome` | `string` | **Obrigatório**. nome do colaborador |
| `registro` | `string` | **Obrigatório**. registro do colaborador |
| `senha` | `string` | **Obrigatório**. senha do colaborador |
| `saldo` | `number` | **Obrigatório**. saldo disponível para o colaborador |
| `idTipo` | `number` | **Obrigatório**. ID do tipo do colaborador |

#### Retorna todos os colaboradores

```http
  GET /colaborador/getAll
```

| Header   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `Bearer JWT` | **Obrigatório**. Token JWT para acessar a rota |

#### Retorna um colaborador

```http
  GET /colaborador/getOne/{id}
```

| Header   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `Bearer JWT` | **Obrigatório**. Token JWT para acessar a rota |


#### Atualiza um colaborador

```http
  PUT/colaborador/update/{id}
```

| Header   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `Bearer JWT` | **Obrigatório**. Token JWT para acessar a rota |

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `nome` | `string` | **Opcional** Nome do colaborador |
| `registro` | `string` | **Opcional** Registro do colaborador |
| `senha` | `string` | **Opcional** Senha do colaborador |
| `saldo` | `number` | **Opcional** Saldo disponível para o colaborador |
| `idTipo` | `number` | **Opcional** ID do tipo do colaborador |

#### Deleta um colaborador

```http
  GET /colaborador/delete/{id}
```

| Header   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `Bearer JWT` | **Obrigatório**. Token JWT para acessar a rota |

## Rota /Auth (Rota para realizar o login)

#### Rota para realizar Login

```http
  POST /auth/login
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `registro` | `string` | **Obrigatório**. Registro do colaborador |
| `senha` | `string` | **Obrigatório**. Senha do colaborador |

## Rota /Despesa

#### Cria uma nova despesa

```http
  POST/despesa
```

| Header   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `Bearer JWT` | **Obrigatório**. Token JWT para acessar a rota |

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `IdDespesaOwner` | `number` | **Obrigatório**. ID do colaborador |
| `IdTipoDespesa` | `number` | **Obrigatório**. ID do tipo da despesa |
| `idMoeda` | `number` | **Obrigatório**. ID da moeda utilizada na despesa |
| `valor` | `number` | **Obrigatório**. Valor gasto |
| `dataDespesa` | `date` | **Obrigatório**. Data em que aconteceu a despesa |
| `localDespesa` | `string` | **Obrigatório**. Local da despesa (pais, empresa, cidade) |
| `comentario` | `string` | **Opcional** Comentário da despesa |
| `imageNF` | `string` | **Opcional** Texto com o caminho da imagem de Nota Fiscal |
| `idStatus` | `number` | **Obrigatório**. ID do status atual da despesa |
| `dateApproved` | `date` | **Opcional** Data de aprovação da despesa |

#### Retorna todas as despesas

```http
  GET /despesa/getAll
```

| Header   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `Bearer JWT` | **Obrigatório**. Token JWT para acessar a rota |

#### Retorna uma despesa

```http
  GET /despesa/getOne/{id}
```

| Header   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `Bearer JWT` | **Obrigatório**. Token JWT para acessar a rota |


#### Atualiza uma despesa

```http
  PUT/despesa/update/{id}
```

| Header   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `Bearer JWT` | **Obrigatório**. Token JWT para acessar a rota |

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `IdDespesaOwner` | `number` | **Opcional**. ID do colaborador |
| `IdTipoDespesa` | `number` | **Opcional**. ID do tipo da despesa |
| `idMoeda` | `number` | **Opcional**. ID da moeda utilizada na despesa |
| `valor` | `number` | **Opcional**. Valor gasto |
| `dataDespesa` | `date` | **Opcional**. Data em que aconteceu a despesa |
| `localDespesa` | `string` | **Opcional**. Local da despesa (pais, empresa, cidade) |
| `comentario` | `string` | **Opcional** Comentário da despesa |
| `imageNF` | `string` | **Opcional** Texto com o caminho da imagem de Nota Fiscal |
| `idStatus` | `number` | **Opcional**. ID do status atual da despesa |
| `dateApproved` | `date` | **Opcional** Data de aprovação da despesa |

#### Deleta uma despesa

```http
  GET /despesa/delete/{id}
```

| Header   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `Bearer JWT` | **Obrigatório**. Token JWT para acessar a rota |

## Rota /tipo-despesa

#### Cria um novo tipo de despesa

```http
  POST/tipo-despesa
```

| Header   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `Bearer JWT` | **Obrigatório**. Token JWT para acessar a rota |

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `idTipo` | `number` | **Obrigatório**. ID do tipo de despesa |
| `descricaoTipo` | `string` | **Obrigatório**. Descrição do tipo |

#### Retorna todos os Tipos

```http
  GET /tipo-despesa/getAll
```

| Header   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `Bearer JWT` | **Obrigatório**. Token JWT para acessar a rota |

#### Retorna um tipo

```http
  GET /tipo-despesa/getOne/{id}
```

| Header   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `Bearer JWT` | **Obrigatório**. Token JWT para acessar a rota |


#### Atualiza um tipo

```http
  PUT/tipo-despesa/update/{id}
```

| Header   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `Bearer JWT` | **Obrigatório**. Token JWT para acessar a rota |

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `idTipo` | `number` | **Opcional**. ID do tipo de despesa |
| `descricaoTipo` | `string` | **Opcional**. Descrição do tipo |

#### Deleta um tipo

```http
  GET /tipo-despesa/delete/{id}
```

| Header   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Authorization` | `Bearer JWT` | **Obrigatório**. Token JWT para acessar a rota |
