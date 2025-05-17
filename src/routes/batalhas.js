var express = require("express");
var router = express.Router();

var batalhaController = require("../controllers/batalhaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarInimigo", function (req, res) {
    batalhaController.cadastrarInimigo(req, res);
})

module.exports = router;