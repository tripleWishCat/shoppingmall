import express from 'express'
import logger from 'morgan'
import createError from 'http-errors'

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req: express.Request, res: express.Response) => {
    res.send("Hello World")
})

app.listen(3000, () => {
    console.log('app listening on port 3000!')
})

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    next(createError(404))
})
// error handler
app.use(function (err: ResponseError, req: express.Request, res: express.Response, next: express.NextFunction) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

interface ResponseError extends Error {
    status?: number;
}


export default app