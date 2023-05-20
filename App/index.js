import morgan from "morgan";
import methodOverride from "method-override";
import Express from "express";
import cookieParser from "cookie-parser";
import { dirname , join} from 'node:path';
import { fileURLToPath } from 'url';
const app = Express();
const port = process.env.PORT || 3000;
const __filename = new URL('', import.meta.url).pathname;
const __dirname = dirname(fileURLToPath(import.meta.url));
//===============================================================

console.log(__dirname+"/Vistas")



app.set("view engine", "ejs");
app.set("views",__dirname + "./../Vistas");
app.set(cookieParser());


app.use(Express.static(__dirname+"\Vistas"))


app.use(methodOverride("_method"));
app.use(morgan("combined"));
//================================================================
app.get('/signIn' , (req,res)=>{
    res.render("./../Vistas/index/index.ejs")
})

app.listen(port,()=>{
    console.log("hola mundo");
})