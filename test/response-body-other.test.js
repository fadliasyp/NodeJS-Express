import express from "express";
import  request  from "supertest";

const app = express()

app.get('/', (req, res)=>{
    res.sendfile(__dirname + '/contoh.txt')
})

test('response send file', async()=> {
    const response = await request(app).get('/')
    expect(response.text).toContain('this is sample text')
})