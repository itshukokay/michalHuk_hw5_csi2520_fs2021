const express = require('express');

const app = new express();


// middleware function init
// body parser
app.use(express.json();
app.use(express.urlencoded({ extended: true })); // to parse HTML form data

// Initialize ejs Middleware
app.set("view engine", "ejs");
app.use("public"), express.static(__dirname + "/public"));


//route <url the client will use and how will the server repsond the that url is requested>

//http methods: get() post() put() delete()
app.get('/' (req,res) => {
    // res.send(`<h1> Hello from my Express Framwork...</h1>`);
    res.render('index')
});




// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>  {console.log(`Server started on PORT NO. ${PORT}``)});