
function tipagem(){
resultadosEfetivos.innerHTML = ''
resultadosEfetivos.innerHTML += ` 
    <div class="supereficaz">Esse tipo é supereficaz contra os tipos: <br>
    <p id="eficaz">

    </p>
   </div>
    <div class="fraquezas">Esse tipo tem fraqueza aos tipos: <br>
    <p id="fraq">

    </p>
   </div>
    <div class="resistente">Esse tipo é resistente aos tipos:  
      <br>
      <p id="resistencias">

      </p>
    </div>
    <div class="imune">Esse tipo é imune aos tipos:  
      <br>
      <p id="imunidade">

      </p>
  </div>`

    var tipo = select.value
    var mensagem1 = ""
    var mensagem2 = ""
    var mensagem3 = ""
    var mensagem4 = ""

if (tipo == 'normal'){
    mensagem1 += `o tipo <span class='normal'>Normal</span> <span style="color: black;font-size:bolder">NÃO</span> é super efetivo (causa 160% de dano) contra nenhuma outra tipagem.`
    mensagem2 += `o tipo <span class='normal'>Normal</span> tem fraqueza (recebe 160% de dano) aos tipos: <br><br>
                  <span class='lutador'> Lutador </span><br>`
    mensagem3 += `o tipo <span class='normal'>Normal</span> não é resistente (recebe 62.5% de dano) a nenhum tipo. <br><br>`
    mensagem4 += `o tipo <span class='normal'>Normal</span> é imune (não recebe dano) ao tipo: <br><br>
                  <span class='fantasma'> Fantasma </span><br>`
} else if (tipo == 'lutador'){
    mensagem1 += `o tipo <span class='lutador'>Lutador</span> é super efetivo (causa 160% de dano) contra os tipos: <br><br>
                  <span class='normal'> Normal </span><br><br>
                  <span class='pedra'> Pedra </span><br><br>
                  <span class='aco'> Aço </span><br><br>
                  <span class='gelo'> Gelo </span><br><br>
                  <span class='sombrio'> Sombrio </span><br><br>`

    mensagem2 += `o tipo <span class='lutador'>Lutador</span> tem fraqueza (recebe 160% de dano) aos tipos: <br><br><br><br>
                  <span class='voador'> Voador </span><br><br>
                  <span class='psiquico'> Psiquico </span><br><br>
                  <span class='fada'> Fada </span><br><br>`

    mensagem3 += `o tipo <span class='lutador'>Lutador</span> é resistente (recebe 62.5% de dano) aos tipos: <br><br><br><br>
                  <span class='inseto'> Inseto </span><br><br>
                  <span class='pedra'> Pedra </span><br><br>
                  <span class='sombrio'> Sombrio </span><br><br>`
    mensagem4 += `o tipo <span class='lutador'>Lutador</span> não possui imunidades.`
} else if (tipo == 'voador'){
    mensagem1 += `o tipo <span class='voador'>Voador</span> é super efetivo (causa 160% de dano) contra os tipos: <br><br><br><br>
                  <span class='inseto'> Inseto </span><br><br>
                  <span class='lutador'> Lutador </span><br><br>
                  <span class='planta'> Planta </span><br><br>`
    mensagem2 += `o tipo <span class='voador'>Voador</span> tem fraqueza (recebe 160% de dano) aos tipos: <br><br><br><br>
                  <span class='pedra'> Pedra </span><br><br>
                  <span class='eletrico'> Elétrico </span><br><br>
                  <span class='gelo'> Gelo </span><br><br>`
    mensagem3 += `o tipo <span class='voador'>Voador</span> é resistente (recebe 62.5% de dano) aos tipos: <br><br><br><br>
                  <span class='lutador'> Lutador </span><br><br>
                  <span class='inseto'> Inseto </span><br><br>
                  <span class='planta'> Planta </span><br><br>`
    mensagem4 += `o tipo <span class='voador'>Voador</span> é imune (não recebe dano) ao tipo: <br><br><br><br>
                  <span class='terrestre'> Terrestre </span><br><br>`
}else if (tipo == 'venenoso'){
    mensagem1 += `o tipo <span class='venenoso'>Venenoso</span> é super efetivo contra os tipos: <br><br><br><br>
                  <span class='planta'> Planta </span><br><br>
                  <span class='fada'> Fada </span><br><br>`
    mensagem2 += `o tipo <span class='venenoso'>Venenoso</span> tem fraqueza aos tipos: <br><br><br><br>
                  <span class='terrestre'> Terrestre </span><br><br>
                  <span class='psiquico'> Psíquico </span><br><br>`
    mensagem3 += `o tipo <span class='venenoso'>Venenoso</span> é resistente aos tipos: <br><br><br><br>
                  <span class='lutador'> Lutador </span><br><br>
                  <span class='venenoso'> Venenoso </span><br><br>
                  <span class='inseto'> Inseto </span><br><br>
                  <span class='planta'> Planta </span><br><br>
                  <span class='fada'> Fada </span><br><br>`
    mensagem4 += `o tipo <span class='venenoso'>Venenoso</span> não possui imunidades.`
}
else if (tipo == 'terrestre'){
    mensagem1 += `o tipo <span class='terrestre'>Terrestre</span> é super efetivo contra os tipos: <br><br><br><br>
                  <span class='fogo'> Fogo </span><br><br>
                  <span class='eletrico'> Elétrico </span><br><br>
                  <span class='venenoso'> Venenoso </span><br><br>
                  <span class='pedra'> Pedra </span><br><br>
                  <span class='aco'> Aço </span><br><br>`
    mensagem2 += `o tipo <span class='terrestre'>Terrestre</span> tem fraqueza aos tipos: <br><br><br><br>
                  <span class='agua'> Água </span><br><br>
                  <span class='planta'> Planta </span><br><br>
                  <span class='gelo'> Gelo </span><br><br>`
    mensagem3 += `o tipo <span class='terrestre'>Terrestre</span> é resistente aos tipos: <br><br><br><br>
                  <span class='venenoso'> Venenoso </span><br><br>
                  <span class='pedra'> Pedra </span><br><br>`
    mensagem4 += `o tipo <span class='terrestre'>Terrestre</span> é imune ao tipo: <br><br><br><br>
                  <span class='eletrico'> Elétrico </span><br><br>`
}
else if (tipo == 'pedra'){
    mensagem1 += `o tipo <span class='pedra'>Pedra</span> é super efetivo contra os tipos: <br><br><br><br>
                  <span class='fogo'> Fogo </span><br><br>
                  <span class='gelo'> Gelo </span><br><br>
                  <span class='voador'> Voador </span><br><br>
                  <span class='inseto'> Inseto </span><br><br>`
    mensagem2 += `o tipo <span class='pedra'>Pedra</span> tem fraqueza aos tipos: <br><br><br><br>
                  <span class='lutador'> Lutador </span><br><br>
                  <span class='terrestre'> Terrestre </span><br><br>
                  <span class='aco'> Aço </span><br><br>
                  <span class='agua'> Água </span><br><br>
                  <span class='planta'> Planta </span><br><br>`
    mensagem3 += `o tipo <span class='pedra'>Pedra</span> é resistente aos tipos: <br><br><br><br>
                  <span class='normal'> Normal </span><br><br>
                  <span class='fogo'> Fogo </span><br><br>
                  <span class='venenoso'> Venenoso </span><br><br>
                  <span class='voador'> Voador </span><br><br>`
    mensagem4 += `o tipo <span class='pedra'>Pedra</span> não possui imunidades.`
}
else if (tipo == 'inseto'){
    mensagem1 += `o tipo <span class='inseto'>Inseto</span> é super efetivo contra os tipos: <br><br><br><br>
                  <span class='planta'> Planta </span><br><br>
                  <span class='psiquico'> Psíquico </span><br><br>
                  <span class='sombrio'> Sombrio </span><br><br>`
    mensagem2 += `o tipo <span class='inseto'>Inseto</span> tem fraqueza aos tipos: <br><br><br><br>
                  <span class='fogo'> Fogo </span><br><br>
                  <span class='voador'> Voador </span><br><br>
                  <span class='pedra'> Pedra </span><br><br>`
    mensagem3 += `o tipo <span class='inseto'>Inseto</span> é resistente aos tipos: <br><br><br><br>
                  <span class='lutador'> Lutador </span><br><br>
                  <span class='planta'> Planta </span><br><br>
                  <span class='terrestre'> Terrestre </span><br><br>`
    mensagem4 += `o tipo <span class='inseto'>Inseto</span> não possui imunidades.`
}else if (tipo == 'fantasma'){
    mensagem1 += `o tipo <span class='fantasma'>Fantasma</span> é super efetivo contra os tipos: <br><br><br><br>
                  <span class='fantasma'> Fantasma </span><br><br>
                  <span class='psiquico'> Psíquico </span><br><br>`
    mensagem2 += `o tipo <span class='fantasma'>Fantasma</span> tem fraqueza aos tipos: <br><br><br><br>
                  <span class='fantasma'> Fantasma </span><br><br>
                  <span class='sombrio'> Sombrio </span><br><br>`
    mensagem3 += `o tipo <span class='fantasma'>Fantasma</span> é resistente aos tipos: <br><br><br><br>
                  <span class='venenoso'> Venenoso </span><br><br>
                  <span class='inseto'> Inseto </span><br><br>`
    mensagem4 += `o tipo <span class='fantasma'>Fantasma</span> é imune aos tipos: <br><br><br><br>
                  <span class='normal'> Normal </span><br><br>
                  <span class='lutador'> Lutador </span><br><br>`
}
else if (tipo == 'aco'){
    mensagem1 += `o tipo <span class='aco'>Aço</span> é super efetivo contra os tipos: <br><br><br><br>
                  <span class='pedra'> Pedra </span><br><br>
                  <span class='gelo'> Gelo </span><br><br>
                  <span class='fada'> Fada </span><br><br>`
    mensagem2 += `o tipo <span class='aco'>Aço</span> tem fraqueza aos tipos: <br><br><br><br>
                  <span class='fogo'> Fogo </span><br><br>
                  <span class='lutador'> Lutador </span><br><br>
                  <span class='terrestre'> Terrestre </span><br><br>`
    mensagem3 += `o tipo <span class='aco'>Aço</span> é resistente a muitos tipos: <br><br><br><br>
                  <span class='normal'> Normal </span><br><br>
                  <span class='voador'> Voador </span><br><br>
                  <span class='pedra'> Pedra </span><br><br>
                  <span class='inseto'> Inseto </span><br><br>
                  <span class='aco'> Aço </span><br><br>
                  <span class='planta'> Planta </span><br><br>
                  <span class='psiquico'> Psíquico </span><br><br>
                  <span class='gelo'> Gelo </span><br><br>
                  <span class='dragao'> Dragão </span><br><br>
                  <span class='fada'> Fada </span><br><br>`
    mensagem4 += `o tipo <span class='aco'>Aço</span> é imune ao tipo: <br><br><br><br>
                  <span class='venenoso'> Venenoso </span><br><br>`
}
else if (tipo == 'fogo'){
    mensagem1 += `o tipo <span class='fogo'>Fogo</span> é super efetivo contra os tipos: <br><br><br><br>
                  <span class='planta'> Planta </span><br><br>
                  <span class='gelo'> Gelo </span><br><br>
                  <span class='inseto'> Inseto </span><br><br>
                  <span class='aco'> Aço </span><br><br>`
    mensagem2 += `o tipo <span class='fogo'>Fogo</span> tem fraqueza aos tipos: <br><br><br><br>
                  <span class='agua'> Água </span><br><br>
                  <span class='rocha'> Pedra </span><br><br>
                  <span class='terrestre'> Terrestre </span><br><br>`
    mensagem3 += `o tipo <span class='fogo'>Fogo</span> é resistente aos tipos: <br><br><br><br>
                  <span class='fogo'> Fogo </span><br><br>
                  <span class='gelo'> Gelo </span><br><br>
                  <span class='inseto'> Inseto </span><br><br>
                  <span class='aco'> Aço </span><br><br>
                  <span class='fada'> Fada </span><br><br>
                  <span class='planta'> Planta </span><br><br>`
    mensagem4 += `o tipo <span class='fogo'>Fogo</span> não possui imunidades.`
}
else if (tipo == 'agua'){
    mensagem1 += `o tipo <span class='agua'>Água</span> é super efetivo contra os tipos: <br><br><br><br>
                  <span class='fogo'> Fogo </span><br><br>
                  <span class='pedra'> Pedra </span><br><br>
                  <span class='terrestre'> Terrestre </span><br><br>`
    mensagem2 += `o tipo <span class='agua'>Água</span> tem fraqueza aos tipos: <br><br><br><br>
                  <span class='eletrico'> Elétrico </span><br><br>
                  <span class='planta'> Planta </span><br><br>`
    mensagem3 += `o tipo <span class='agua'>Água</span> é resistente aos tipos: <br><br><br><br>
                  <span class='fogo'> Fogo </span><br><br>
                  <span class='agua'> Água </span><br><br>
                  <span class='gelo'> Gelo </span><br><br>
                  <span class='aco'> Aço </span><br><br>`
    mensagem4 += `o tipo <span class='agua'>Água</span> não possui imunidades.`
}
else if (tipo == 'planta'){
    mensagem1 += `o tipo <span class='planta'>Planta</span> é super efetivo contra os tipos: <br><br><br><br>
                  <span class='agua'> Água </span><br><br>
                  <span class='terrestre'> Terrestre </span><br><br>
                  <span class='pedra'> Pedra </span><br><br>`
    mensagem2 += `o tipo <span class='planta'>Planta</span> tem fraqueza aos tipos: <br><br><br><br>
                  <span class='fogo'> Fogo </span><br><br>
                  <span class='gelo'> Gelo </span><br><br>
                  <span class='venenoso'> Venenoso </span><br><br>
                  <span class='voador'> Voador </span><br><br>
                  <span class='inseto'> Inseto </span><br><br>`
    mensagem3 += `o tipo <span class='planta'>Planta</span> é resistente aos tipos: <br><br><br><br>
                  <span class='agua'> Água </span><br><br>
                  <span class='eletrico'> Elétrico </span><br><br>
                  <span class='planta'> Planta </span><br><br>
                  <span class='terrestre'> Terrestre </span><br><br>`
    mensagem4 += `o tipo <span class='planta'>Planta</span> não possui imunidades.`
}
else if (tipo == 'eletrico'){
    mensagem1 += `o tipo <span class='eletrico'>Elétrico</span> é super efetivo contra os tipos: <br><br><br><br>
                  <span class='agua'> Água </span><br><br>
                  <span class='voador'> Voador </span><br><br>`
    mensagem2 += `o tipo <span class='eletrico'>Elétrico</span> tem fraqueza aos tipos: <br><br><br><br>
                  <span class='terrestre'> Terrestre </span><br><br>`
    mensagem3 += `o tipo <span class='eletrico'>Elétrico</span> é resistente aos tipos: <br><br><br><br>
                  <span class='eletrico'> Elétrico </span><br><br>
                  <span class='voador'> Voador </span><br><br>
                  <span class='aco'> Aço </span><br><br>`
    mensagem4 += `o tipo <span class='eletrico'>Elétrico</span> não possui imunidades.`
}
else if (tipo == 'psiquico'){
    mensagem1 += `o tipo <span class='psiquico'>Psíquico</span> é super efetivo contra os tipos: <br><br><br><br>
                  <span class='lutador'> Lutador </span><br><br>
                  <span class='venenoso'> Venenoso </span><br><br>`
    mensagem2 += `o tipo <span class='psiquico'>Psíquico</span> tem fraqueza aos tipos: <br><br><br><br>
                  <span class='sombrio'> Sombrio </span><br><br>
                  <span class='fantasma'> Fantasma </span><br><br>
                  <span class='inseto'> Inseto </span><br><br>`
    mensagem3 += `o tipo <span class='psiquico'>Psíquico</span> é resistente aos tipos: <br><br><br><br>
                  <span class='lutador'> Lutador </span><br><br>
                  <span class='psiquico'> Psíquico </span><br><br>`
    mensagem4 += `o tipo <span class='psiquico'>Psíquico</span> não possui imunidades.`
}
else if (tipo == 'gelo'){
    mensagem1 += `o tipo <span class='gelo'>Gelo</span> é super efetivo contra os tipos: <br><br><br><br>
                  <span class='planta'> Planta </span><br><br>
                  <span class='terrestre'> Terrestre </span><br><br>
                  <span class='voador'> Voador </span><br><br>
                  <span class='dragao'> Dragão </span><br><br>`
    mensagem2 += `o tipo <span class='gelo'>Gelo</span> tem fraqueza aos tipos: <br><br><br><br>
                  <span class='fogo'> Fogo </span><br><br>
                  <span class='lutador'> Lutador </span><br><br>
                  <span class='pedra'> Pedra </span><br><br>
                  <span class='aco'> Aço </span><br><br>`
    mensagem3 += `o tipo <span class='gelo'>Gelo</span> é resistente ao tipo: <br><br><br><br>
                  <span class='gelo'> Gelo </span><br><br>`
    mensagem4 += `o tipo <span class='gelo'>Gelo</span> não possui imunidades.`
}
else if (tipo == 'dragao'){
    mensagem1 += `o tipo <span class='dragao'>Dragão</span> é super efetivo contra o tipo: <br><br><br><br>
                  <span class='dragao'> Dragão </span><br><br>`
    mensagem2 += `o tipo <span class='dragao'>Dragão</span> tem fraqueza aos tipos: <br><br><br><br>
                  <span class='gelo'> Gelo </span><br><br>
                  <span class='dragao'> Dragão </span><br><br>
                  <span class='fada'> Fada </span><br><br>`
    mensagem3 += `o tipo <span class='dragao'>Dragão</span> é resistente aos tipos: <br><br><br><br>
                  <span class='fogo'> Fogo </span><br><br>
                  <span class='agua'> Água </span><br><br>
                  <span class='planta'> Planta </span><br><br>
                  <span class='eletrico'> Elétrico </span><br><br>`
    mensagem4 += `o tipo <span class='dragao'>Dragão</span> é imune ao tipo: <br><br><br><br>
                  <span class='fada'> Fada </span><br><br> (mas apenas ofensivamente)`
}
else if (tipo == 'sombrio'){
    mensagem1 += `o tipo <span class='sombrio'>Sombrio</span> é super efetivo contra os tipos: <br><br><br><br>
                  <span class='psiquico'> Psíquico </span><br><br>
                  <span class='fantasma'> Fantasma </span><br><br>`
    mensagem2 += `o tipo <span class='sombrio'>Sombrio</span> tem fraqueza aos tipos: <br><br><br><br>
                  <span class='lutador'> Lutador </span><br><br>
                  <span class='inseto'> Inseto </span><br><br>
                  <span class='fada'> Fada </span><br><br>`
    mensagem3 += `o tipo <span class='sombrio'>Sombrio</span> é resistente aos tipos: <br><br><br><br>
                  <span class='fantasma'> Fantasma </span><br><br>
                  <span class='sombrio'> Sombrio </span><br><br>`
    mensagem4 += `o tipo <span class='sombrio'>Sombrio</span> é imune ao tipo: <br><br><br><br>
                  <span class='psiquico'> Psíquico </span><br><br>`
}
else if (tipo == 'fada'){
    mensagem1 += `o tipo <span class='fada'>Fada</span> é super efetivo contra os tipos: <br><br><br><br>
                  <span class='lutador'> Lutador </span><br><br>
                  <span class='dragao'> Dragão </span><br><br>
                  <span class='sombrio'> Sombrio </span><br><br>`
    mensagem2 += `o tipo <span class='fada'>Fada</span> tem fraqueza aos tipos: <br><br><br><br>
                  <span class='venenoso'> Venenoso </span><br><br>
                  <span class='aco'> Aço </span><br><br>`
    mensagem3 += `o tipo <span class='fada'>Fada</span> é resistente aos tipos: <br><br><br><br>
                  <span class='lutador'> Lutador </span><br><br>
                  <span class='inseto'> Inseto </span><br><br>
                  <span class='sombrio'> Sombrio </span><br><br>`
    mensagem4 += `o tipo <span class='fada'>Fada</span> é imune ao tipo: <br><br><br><br>
                  <span class='dragao'> Dragão </span><br><br>`
}
eficaz.innerHTML = mensagem1
fraq.innerHTML = mensagem2
resistencias.innerHTML = mensagem3
imunidade.innerHTML = mensagem4

}