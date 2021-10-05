var formulario = document.getElementById("cadastroUsers")

var obj = {
    nome: "",
    senha: "",
    email: "",
    celular: "",
    cep: "",
    endereco: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: ""

}

let request = (url, callback) => {
    fetch(url)
        .then(response => {
            if (response.status === 200) {
                response.json()
                    .then(data => callback(data))
            } else {
                throw new Error("ocorreu um erro de servidor!")
            }
        })
        .catch(erro =>
            console.error(erro)
        )
}

let mostrarDados = (data) => {
    formulario.userEndereco.value = data.logradouro
    formulario.userBairro.value = data.bairro
    formulario.userCidade.value = data.localidade
    formulario.userEstado.value = data.uf
}


let inputs = document.getElementsByTagName("input")
let newInputs = Array.from(inputs)
let validar = () => {

    let valTudo = newInputs.filter(campos => {
        if (campos.required && campos.value == '')
            return campos
    })

    if (valTudo.length == 0) {
        document.getElementById("cadastrOk").style.display = "block"
        setTimeout(() => {
            document.getElementById("cadastrOk").style.display = "none"
        }, 4000);
        obj.nome = formulario.userNome.value
        obj.senha = formulario.userSenha.value
        obj.email = formulario.userEmail.value
        obj.celular = formulario.userCel.value
        obj.cep = formulario.userCep.value
        obj.endereco = formulario.userEndereco.value
        obj.numero = formulario.userNumero.value
        obj.bairro = formulario.userBairro.value
        obj.cidade = formulario.userCidade.value
        obj.estado = formulario.userEstado.value
        let json = JSON.stringify(obj)
        document.getElementById("resp").innerHTML = json
        formulario.reset()
    }
}

let buscarCep = (cep) => {
    if (cep.length >= 9) {
        request(`https://viacep.com.br/ws/${cep}/json/`, mostrarDados)
    }
}

$(document).ready(function () {
    $('#userCep').mask('00000-000');
    $('#userCel').mask('(00) 00000-0000');

})
