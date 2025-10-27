// configurar os imports das bibliotecas


import express from "express";

import dotenv from "dotenv";

import { createClient } from "@supabase/supabase-js";

// configuração das bibliotecas


//dotenv carrega as variaveis de ambiente no NodeJS para poder ultilizar na aplicação

dotenv.config();

//nos configuramos o nosso framework (express)
const app = express();

//configurando a representatividade, indicamos para o servidor que ele vai receber e enviar um arquivo json
app.use(express.json())

//conexao com o banco de dados no SupaBase(CLOUD)
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

app.post("/pessoa", async (req,res) => {

    const {nome, idade, curso} = req.body; //novo
    
    const{data , error} =  await supabase //novo
    .from("pessoa") //novo
    .insert([{nome, idade, curso}]);//novo

    if (error) return res.status(400).json({message: "Erro ao inserir a pessoa"}) //novo

    res.status(200).json( { message: "Deu certo o endpoint!!" } ) //novo

})

app.listen(3000, () => {

    console.log("O servidor subiu para a porta 3000")

})



//npm install express dotenv @supabase/supabase-js

//localhost:3000/pessoa