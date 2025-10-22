// configurar os imports das bibliotecas

import express from "express";

import dotenv from "dotenv";

import { createClient } from "@supabase/supabase-js";

// configuração das bibliotecas


//dotenv carrega as variaveis de ambiente no NodeJS para poder ultilizar na aplicação

dotenv.config();

//nos configuramos o nosso framework (express)
const app = express();