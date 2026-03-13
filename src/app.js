const express = require("express")

const userController = require("./controllers/userController")

const app = express()
app.get("/", (request, response) => {
    response.send("The cocain is not good for yoooooooouuuuuu!")
})

app.use(express.json())

app.post("/users", (req, res) => {
    console.log(req.body)

    res.send("Estamos trabalhando nisso. Obrigado.")
})

app.get("/users", userController.getAllUsers)

module.exports = app