import { Router } from "express";
const server = Router();

import { buscarPorNome}  from '../repository/filtrosrepository.js'




server.get('/produto/busca', async (req, resp)=>{

   try{
      const {nome} = req.query;

      const resposta = await buscarPorNome(nome);

      if(resposta.length==0)
      resp.status(404).send([])
      else
      resp.send(resposta)

   }catch(err){
    resp.status(404).send({
        erro:err.message
    })
   }
})


export default server; 