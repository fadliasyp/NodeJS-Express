import express  from "express";
import request  from "supertest";

const app = express()

app.get('/', (req, res) => {
    res.send(`hello ${req.query.name}`)
})

test('test query parameter', async () => {
    const response = await request(app).get('/').query({name: 'fadli'})
    expect(response.text).toBe('hello fadli')
})

test('fadliii2', async() => {
    const response = await request(app).get('/').query({name: 'eko'})
    expect(response.text).toBe('hello eko')
})
