import express from 'express';

const app = express();
const port = process.env.PORT || 3000;
app.get('/',(req,res)=>{
    res.send("Hello home!");
    console.log("Home");
})
app.get('/about',(req,res)=>{
    res.send("About section");
    console.log("About");
})

app.listen(3000,()=>{
    console.log(`listening on ${port}`);
})