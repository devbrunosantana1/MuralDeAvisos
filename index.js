const PORT = 5000;
const express = require('express');
const bodyParser = require('body-parser');
const posts = require('./model/posts');

const app = express();



app.get('/all', (req, res) => {
    
    res.json(JASON.stringify(posts.getAll()))
});

app.post('/new', bodyParser.json(), (req, res) => {

    let title = req.body.title;
    let description = req.body.description;

    posts.newPost({ title,description });

    res.send("Post adicioado");

});

app.listen(PORT, () => {
    console.log("Server runing on port", PORT);
})



