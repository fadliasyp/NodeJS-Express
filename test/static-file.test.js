import express from "express";
import  request  from "supertest";

const app = express()

app.use("/static",express.static(__dirname + '/static'))


app.get('/', (req, res)=>{
    res.send('hello world')
})

app.get('/contoh.txt', (req, res)=>{
    res.send('hello contoh')
})

test('tets static file', async()=> {
    const response = await request(app).get('/')
    expect(response.text).toBe('hello world')
})
test('tets static file contoh.txt', async()=> {
    const response = await request(app).get('/static/contoh.txt')
    expect(response.text).toBe('this is sample text')
})