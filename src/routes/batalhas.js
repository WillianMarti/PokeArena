var express = require("express");
var router = express.Router();

var batalhaController = require("../controllers/batalhaController");

router.post("/cadastrarInimigo", function (req, res) {
    batalhaController.cadastrarInimigo(req, res);
})

router.post("/cadastrarBatalha", function (req, res) {
    batalhaController.cadastrarBatalha(req, res)
})

module.exports = router;