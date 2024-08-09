import express from "express";
import  request  from "supertest";
import mustacheExpress from "mustache-express";

const app = express()

app.set('views', __dirname + '/views')
app.set("view engine", "html")
app.engine("html", mustacheExpress())

app.get('/', (req, res)=>{
   res.render('index', {
    title: 'hello world',
    say: "this is a test"
   })
})

test('response test', async()=> {
    const response = await request(app).get('/')
    console.info(response.text)
    expect(response.text).toContain('hello world')
    expect(response.text).toContain('this is a test')
    expect(response.text).toContain('lolo')
})