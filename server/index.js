const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host:"localhost",
    user: "root",
    password: "password",
    database: "clientes",
})


app.post("/login",(req,res) =>{

    const {CPF, senha} = req.body;

    let SQL = "INSERT INTO logins ( cpf, senha) VALUES (?,  ?)";

    db.query(SQL, [CPF,senha],(err, result) => {
        console.log(err);
    })
})


app.get("/cpf",(req,res) =>{

    let SQL = "SELECT cpf FROM logins where CPF = {?}";

    db.query(SQL, (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    })
})


app.get("/teste",(req,res) =>{

    let SQL = "INSERT INTO logins ( cpf, senha) VALUES ('11122233344', 'senha123')";

    db.query(SQL, (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    })
})

app.listen(3006, () => {
    console.log("servidor funcionando");
});

