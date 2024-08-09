import express from "express";
import  request  from "supertest";

const app = express()

app.get('/', (req, res)=>{
    res.send('hello world')
})

test('response test', async()=> {
    const response = await request(app).get('/')
    expect(response.text).toBe('hello world')
})