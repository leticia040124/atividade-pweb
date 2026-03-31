const express = require('express')

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/about', (req, res) => {
    console.log('[GET] /about acessado')
    return res.status(200).send('Página About')
})

app.post('/data', (req, res) => {
    console.log('[POST] /data acessado')
    return res.status(201).send('Dados recebidos com sucesso')
})

app.get('/users', (req, res) => {
    return res.redirect('/signup')
})

app.get('/signup', (req, res) => {
    console.log('[GET] /signup acessado')
    return res.status(200).send('Página de cadastro com formulário')
})

app.get('/users/:userid', (req, res) => {
    const { userid } = req.params

    console.log(`[GET] /users/${userid} acessado`)
    return res.status(200).send(`Bem-vindo, usuário ${userid}`)
})

app.use((req, res) => {
    res.status(404).send(`
        <h1>Erro 404 - Página não encontrada</h1>
        <a href="/about">Voltar para About</a>
    `)
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})