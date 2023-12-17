import express from "express"
const app= express();
const port= 3000;

app.get("/", (req, res) =>{
    res.send("<h1>Hello World!</h1>")
})

app.get("/about", (req, res) => {
    res.send("<h1>I am Computer Engineering Graduate</h1>")
})

app.get("/contact", (req, res) => {
    res.send("<h1>You can contact me right now</h1>")
})

app.listen(3000, () =>{
    console.log(`Server running on port ${port}`);
})