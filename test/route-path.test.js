import express from "express";
import  request  from "supertest";

const app = express()

app.get('/products/*.json', (req, res)=>{
    res.send(req.originalUrl)
})

app.get('/categories/*(\\d+).json', (req, res)=>{
    res.send(req.originalUrl)
})

test('test route path', async()=> {
    const response = await request(app).get('/products/*.json')
    expect(response.text).toBe('/products/*.json')
})

test('test route path 2', async()=> {
    const response = await request(app).get('/products/eko.json')
    expect(response.text).toBe('/products/eko.json')
})

test('test route path 3', async()=> {
    const response = await request(app).get('/categories/12.json')
    expect(response.text).toBe('/categories/12.json')
})

test('test route path yang gagal', async() => {
    const response = await request(app).get('/categories/salah.json')
    expect(response.status).toBe(404)
})