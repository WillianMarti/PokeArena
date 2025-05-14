// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    if (email != null && nome != null) {
        console.log('Usuario Autenticado!')
    } else {
        window.location = "../login.html";
    }
}

function validarSessaoLogin() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    if (email != null && nome != null) {
        document.getElementById('logins').style.display = 'flex';
        document.getElementById('batalhar').style.display = '';
        document.getElementById('quizer').style.display = '';

        document.getElementById('logins').innerHTML = `<img width="50px" height="50px" src="./assets/avatar.png"> <br>Nome:${nome}`
    } else {
        document.getElementById('navpo').style.marginRight = '0%';
        document.getElementById('logins').style.display = 'flex'
        document.getElementById('quizer').style.display = 'none';
        document.getElementById('batalhar').style.display = 'none';
    }
}


function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

