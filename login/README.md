# API em express para testar JWT (Json Web Token)

> localhost:3000

### Rotas

`/login` => headers: `user`, `pwd` => irá retornar `{auth, token, id}`
> Como é apenas para teste o usuario é `luiz` e o pwd é `123`.

`/logout` => para deslogar

`/users` => testar a autenticação

`/products` => testar a autenticação

> A implementação contida no arquivo `app.js` é mais simples.