import express from "express";
import  request  from "supertest";

const app = express()

const errorMiddleware = (err, req, res, next) => {
    res.status(500).send(`terjadi error: ${err.message}`)
}


app.get('/', (req, res)=>{
    throw new Error('ups')
})

app.use(errorMiddleware)

test('error handling', async() => {
    const response = await request(app).get('/')
    expect(response.status).toBe(500)
    expect(response.text).toBe('terjadi error: ups')
})