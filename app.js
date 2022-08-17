const express = require ("express");
const app = express ();

const path = require ("path");

app.use (express.static ("Public"));

app.listen (process.env.PORT || 3000, ()=> console.log ("The server runs in 3000 port"));

app.get ("/", (_req,res)=>{
    res.sendFile (path.resolve (__dirname, "./views/home.html"))
})

app.get ("/register", (req,res)=>{
    res.sendFile (path.resolve(__dirname,"./views/register.html"))
})

app.get ("/login", (req,res)=>{
    res.sendFile (path.resolve(__dirname,"./views/login.html"))
});

