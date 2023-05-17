import Express from "express";
const app = Express();
const port = process.env.PORT || 3000;

app.get('/signIn' , (req,res)=>{
    
})

app.listen(port,()=>{
    console.log("hola mundo");
})