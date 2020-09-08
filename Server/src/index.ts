import logger from 'morgan'
import "reflect-metadata"
import { createExpressServer } from "routing-controllers"

const app = createExpressServer({
    defaults: {
        nullResultCode: 404,
        undefinedResultCode: 204
    },
    routePrefix: "/api",
    controllers: [ __dirname + "/controllers/*/*.js" ],
    classTransformer: true
})

app.use(logger('dev'))


app.listen(3000, () => {
    console.log('app listening on port 3000!')
})

export default app