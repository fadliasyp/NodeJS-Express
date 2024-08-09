import express from "express";
import  request  from "supertest";

const app = express()

const loggger = (req, res, next) =>{
    console.info(`receive request ${req.method} : ${req.originalUrl}`)
    next()
}

const addPowerHeader = (req, res, next) => {
    res.set('x-powered-by', 'fadli asyp')
    next()
}

const apiKeyMiddleware = (req, res, next) =>{
    if(req.query.apiKey){
        next()
    }else{
        res.status(401).end()
    }
}

const requestTimeMiddleware = (req, res, next) => {
    req.requestTime = Date.now();
    next()
}

app.use(loggger)
app.use(apiKeyMiddleware)
app.use(addPowerHeader)
app.use(requestTimeMiddleware)

app.get('/', (req, res)=>{
    res.send('hello world')
})

app.get('/time', (req, res)=>{
    res.send(`hello today is time ${req.requestTime}`)
})

test('middleware', async()=> {
    const response = await request(app).get('/').query({apiKey: 123})
    expect(response.get('x-powered-by')).toBe('fadli asyp')
    expect(response.text).toBe('hello world')
})

test('fadli', async() =>{
    const response = await request(app).get('/')
    expect(response.status).toBe(401)
})

test('middleware time', async()=> {
    const response = await request(app).get('/time').query({apiKey: 123})
    expect(response.get('x-powered-by')).toBe('fadli asyp')
    expect(response.text).toContain('hello')
})