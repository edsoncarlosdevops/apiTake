import express from 'express'
import http from 'http'
import cors from 'cors'
import api from './api'


const app = express()

app.use(cors({
    origin: ['https://git.heroku.com/apitaketest.git', ' https://apitaketest.herokuapp.com/']
}))

app.use(express.json())


app.get('/', async (req, res) => {

  
  console.log(res.redirect(`https://api.github.com/orgs/takenet/repos?per_page=5&page=1+language:C#&sort=stars&order=desc`))

})



app.get('/:img', async (req, res) => {

  
  console.log(res.redirect(`https://avatars.githubusercontent.com/u/4369522?v=4`))
  //Just redirect  the avatar_url because is the same for all repositories

})

app.get('/name/:name', async (req, res) => {

  
  const response = await api.get(`/orgs/takenet/repos?per_page=5&page=1+language:C#&sort=stars&order=desc`)

  const { name } = response.data[req.params.name]




  const formatJson = {
    name
  }

  
  
  console.log(res.json(formatJson))
})



app.get('/description/:description', async (req, res) => {

  const response = await api.get(`/orgs/takenet/repos?per_page=5&page=1+language:C#&sort=stars&order=desc`)

  const { description } = response.data[req.params.description]




  const formatJson = {
    description
  }
  
  
  console.log(res.json(formatJson))
})


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Umbler server at port:${port}`));