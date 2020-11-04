import logger from 'morgan'
import "reflect-metadata"
import { createExpressServer } from "routing-controllers"
import express from 'express'

const app = createExpressServer({
    defaults: {
        nullResultCode: 404,
        undefinedResultCode: 204
    },
    routePrefix: "/api",
    controllers: [ __dirname + "/controller/**/*.js" ],
    classTransformer: true
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))


app.listen(3000, () => {
    console.log('app listening on port 3000!')
})

export default app