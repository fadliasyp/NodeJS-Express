import express from "express";
import  request  from "supertest";

const app = express()

app.get('/products/:id', (req, res)=>{
    const idProducts = req.params.id
    res.send(`products: ${idProducts}`)
})

app.get('/categories/:id(\\d+)', (req, res)=>{
    const idCategory = req.params.id
    res.send(`category: ${idCategory}`)
})

test('test route path', async()=> {
    const response = await request(app).get('/products/eko')
    expect(response.text).toBe('products: eko')
})

test('test route path 2', async()=> {
    const response = await request(app).get('/products/fadli')
    expect(response.text).toBe('products: fadli')
})

test('test route path 3', async()=> {
    const response = await request(app).get('/categories/12')
    expect(response.text).toBe('category: 12')
})

test('test route path yang gagal', async() => {
    const response = await request(app).get('/categories/salah')
    expect(response.status).toBe(404)
})