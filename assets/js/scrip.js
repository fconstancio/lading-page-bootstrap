let nome = document.querySelector('#inputNome')
let sobrenome = document.querySelector('#inpuSobrenome')
let email = document.querySelector('#inputEmail')

let nomeOk = false
let sobrenomeOk = false
let emailOk = false


function validaNome() {

    if (nome.value.length < 3) {
        nome.style='border:2px solid red'
        console.log("Nome Inválido")
        nomeOk = false
    } else {
        nome.style='border:1px solid #ced4da'
        console.log("Nome Válido")
        nomeOk = true
    }
}
function validaSobrenome() {
    if (sobrenome.value.length < 3) {
        sobrenome.style='border:2px solid red'
        console.log('Sobrenome Inválido')
        sobrenomeOk = false
    } else {
        sobrenome.style='border:1px solid #ced4da'
        console.log('Sobrenome Válido')
        sobrenomeOk = true
    }
}

function validaEmail() {
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        email.style='border:2px solid red'
        console.log('E-mail Inválido')
        emailOk  = false
    } else {
        email.style='border:1px solid #ced4da'
        console.log('E-mail Válido')
        emailOk  = true

    }
}








function enviar(){
    console.log(nomeOk,sobrenomeOk,emailOk )
    if(nomeOk == true && sobrenomeOk == true && emailOk == true) {
        console.log('Formulário enviado com sucesso')
    }else{
        console.log('Preencha o formulário corretamente antes de enviar...')
    }
}