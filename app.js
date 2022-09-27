import 'dotenv/config';
import express                      from "express";
import  minimist                    from "minimist";
import  {fork}                      from "child_process";

const app = express();

//const PORT = process.env.PORT || 8080
// tomo el puerto como parametro de linea con -p xxxx
const args = process.argv.slice(2);
if(args.length == 0) {
  console.log("sin argumentos");
  process.exit();
}

let options = {alias :{p: "puerto"}};
const param = minimist(args,options);
const PORT = param.puerto || 8080


app.use(express.json())

app.get('/info', async (req, res) => {
  const respuesta = {
    "argumentos entrada" : process.argv.slice(2),
    "Nombre de la Plataforma " : process.platform,
    "Versión de NODE " : process.version,
    "Memoria total reservada " : process.memoryUsage.rss(),
    "Path de ejecución  " : process.cwd(),
    "Process Id " : process.pid,
    "Carpeta de Proyecto" : process.cwd()
}
  res.json(respuesta) 
})

app.get('/api/randoms', async (req, res) => {
   const forked = fork("child.js");
  let cant = 0;
  if(req.query.cant === undefined){
       cant = 100000000;
  } else {
       cant = req.query.cant;
  }

    forked.on("message", (msg) => {
    if (msg == "listo") {
      forked.send("Hola, ");
    } else {
      console.log(`Mensaje del hijo: ${msg}`);
    }
  });
  
   

  res.json({numero : x}) 
})


const server = app.listen(PORT, () => {
    console.log(`server funcionando en port http://localhost:${PORT}`);
  });
  server.on("error", (err) => console.error(err));
  
