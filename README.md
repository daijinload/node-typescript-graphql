# node-typescript-graphql

TypeScriptとGraphQLの学習用リポジトリ

### インストールコード
---

```
npm i -g typescript
tsc --version
tsc --init
npm i express express-graphql graphql
npm i --save-dev @types/node

```

### 起動とか

```bash
$ node ./src/server.js

# open
# http://localhost:4000/graphql
```

### QraphQLサンプルクエリ
---

```
query {
#  hello,
  hello2(name:"hoge")
}
```
