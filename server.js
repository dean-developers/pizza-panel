const Koa = require('koa')
const cors = require('@koa/cors')
const serve = require('koa-static')
const body = require('koa-body')
const views = require('koa-views')
const Router = require('koa-router')
const path = require('path')

const app = new Koa()

app.use(cors())
app.use(body())

app.use(views(path.join(__dirname, './dist')))
app.use(serve('./dist'))

const router = new Router()

app
    .use(router.routes())
    .use(router.allowedMethods())

router.get('/*', async function(ctx) {
    return ctx.render('index')
})

if (!module.parent) {
    app.listen(process.env.PORT || 3000)
}
