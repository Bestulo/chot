const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Koa = require('koa')
const serve = require('koa-static')
const cors = require('@koa/cors');
const historyApiFallback = require('koa-history-api-fallback')

const app = new Koa()

app.use(cors({allowMethods: ['post', 'get']}))
// app.use(serve('public'))
app.use(historyApiFallback())
app.use(serve('public'))
// app.use(ctx => ctx.body = 'Hello, World!')

app.listen(3000)

// const username = 'papito'
// const password = 'tonto tonta'
// const secret = 'I came from above to find you'


// // const token = jwt.sign(username + password, secret)
// // console.log('Got token: ' + token)

// // const verified = jwt.verify(token, secret)
// // console.log('Got verification: ' + verified)

// const hash = bcrypt.hashSync(username + password, 8)
// console.log(hash)
// bcrypt.compare(username + password, hash)
//   .then(res =>
//     console.log(res ? 'Hash and password match!' : 'no match'))

