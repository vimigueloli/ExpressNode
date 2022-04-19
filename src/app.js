import express from 'express';

const app = express();

app.use(express.json());

const dados = [
    {id:1 , nome: 'João'},
    {id:2 , nome: 'Maria'},
    {id:3 , nome: 'Pedro'},
    {id:4 , nome: 'José'},
    {id:5 , nome: 'Carlos'},
]

app.get('/',(req,res)=>{
    res.status(200).send('api online')
})

app.get('/nomes',(req,res)=>{
    res.status(200).json(dados)
})

app.post('/nomes', (req,res)=>{
    dados.push(req.body)
    res.status(201).send('Nome adicionado com sucesso')
})

app.put('/nomes/:id', (req,res)=>{
    let index = searchName(req.params.id)
    dados[index].nome = req.body.nome
    res.status(200).send('nome alterado com sucesso')
})

app.delete('/nomes/:id', (req,res)=>{
    let index = searchName(req.params.id)
    dados.splice(index,1)
    res.status(200).send('nome deletado com sucesso')
})

app.get('/nomes/:id', (req,res)=>{
    let index = searchName(req.params.id)
    //console.log(index)
    res.status(200).send(dados[index])
})

function searchName(id){
    return dados.findIndex(dado => dado.id == id)
    
}

export default app;