import express from "express";
import  request  from "supertest";

const app = express()

app.get('/', (req, res)=>{
    res.send('hello world')
})

app.use((req, res, next) => {
    res.status(404).send('404 Not Found Euy')
})

test('response test', async()=> {
    const response = await request(app).get('/')
    expect(response.text).toBe('hello world')
})
test('test response not found', async()=> {
    const response = await request(app).get('/halaman-tidak-ada')
    expect(response.text).toBe('404 Not Found Euy')
})