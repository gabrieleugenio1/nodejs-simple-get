//Pegando o modulo express
const express = require("express");
//Criando o objeto
const app = express();
//Porta do servidor
const port = process.env.PORT || 3000;

//Utilizando o método get
app.get("/", (req,res) =>{
    res.send("A aplicação node " + "está sendo executada.");
    res.end();
});


//Servidor
app.listen(port, () =>{
    console.log("A aplicação está sendo executada na porta " + port);
});