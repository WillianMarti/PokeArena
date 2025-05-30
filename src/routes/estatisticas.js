var express = require("express");
var router = express.Router();

var estatisticasController = require("../controllers/estatisticasController");

router.get("/resultadosBatalha/:idUsuario", function (req, res) {
    estatisticasController.buscarResultadosBatalhas(req, res);
})

router.post("/pokemonsMaisUsados/:idUsuario", function (req, res) {
    estatisticasController.pokemonsMaisUsados(req, res);
});

router.post("/evolucaoResultados/:idUsuario", function (req, res) {
    estatisticasController.evolucaoResultados(req, res);
});

router.get("/pokemonInimigoMaisComum/:idUsuario", function(req, res){
    estatisticasController.pokemonInimigoMaisComum(req, res)
})

router.get("/pokemonJogadorMaisComumNoDiaDeHoje/:idUsuario", function(req, res){
    estatisticasController.pokemonJogadorMaisComumNoDiaDeHoje(req, res)
})

router.get("/tipoQueOjogadorMaisUsou/:idUsuario", function(req, res){
    estatisticasController.tipoQueOjogadorMaisUsou(req, res)
})

router.get("/tipoQueOInimigoMaisUsou/:idUsuario", function(req, res){
    estatisticasController.tipoQueOInimigoMaisUsou(req, res)
})

router.get("/mediaShinysComuni/:idUsuario", function(req, res){
    estatisticasController.mediaShinysComuni(req, res)
})

router.get("/quantidadeShinys/:idUsuario", function(req, res){
    estatisticasController.quantidadeShinys(req, res)
})

router.get("/winrateComunidade/:idUsuario", function(req, res){
    estatisticasController.winrateComunidade(req, res)
})
module.exports = router;