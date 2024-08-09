import express  from "express";
import request  from "supertest";

const app = express()

app.get('/', (req, res) => {
    const type = req.get('ACCEPT')
    res.send(`hello ${type}`)
})

test('test req header', async () => {
    const response = await request(app).get("/").set('accept', 'fadli')
    expect(response.text).toBe('hello fadli')
})


