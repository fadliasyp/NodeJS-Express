import express from "express";
import request  from "supertest";
import expressFileUpload from "express-fileupload"

const  app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(expressFileUpload())



app.post('/json', (req, res) => {
    const name = req.body.name
    res.json({
        hello : `hello ${name}`
    });
});

app.post('/form', (req, res) => {
    const name= req.body.name
    res.json({
        hello: `hello ${name}`
    });
});

app.post("/file", async (req, res) => {
    const textFile = req.files.article;
    await textFile.mv(__dirname + '/upload/' + textFile.name)

    res.send(`hello ${req.body.name}, you uploaded ${textFile.name}`)
})

test('test request file upload', async ()=> {
    const response = await request(app)
    .post('/file')
    .set('Content-Type', 'multipart/form-data')
    .field("name", "eko")
    .attach("article", __dirname + "/contoh.txt");
   
    expect(response.text).toBe(`hello eko, you uploaded contoh.txt`)
   })

test('test request json', async ()=> {
 const response = await request(app)
 .post('/json')
 .set('content-type', 'application/json')
 .send({name: 'world'})

 expect(response.body).toEqual({
    hello: `hello world`
 })
})

test('tes request form', async () => {
    const response =await request(app)
    .post('/form')
    .set('content-type', 'application/x-www-form-urlencoded')
    .send('name=world')

    expect(response.body).toEqual({
        hello: 'hello world'
    })
})

