let senha = document.getElementById('senha')
function gerarSenha(){
    let chars = '0123456789abcdefghijklmnopqrstuvxywz' /*!@#$%&*ABCDEFGHIJKLMNOPQRSTUVXYWZ*/
    let senhaTamanho = 6
    let senha = ''
    for (let i = 0; i < senhaTamanho; i++) {
        let numeroAleatorio = Math.floor(Math.random() * chars.length)
        senha += chars.substring(numeroAleatorio, numeroAleatorio + 1)
    }
    document.getElementById('senha').value = senha
}

function copiarSenha() {
    let copiarTexto = document.getElementById('senha')
    copiarTexto.select()
    copiarTexto.setSelectionRange(0, 999)
    document.execCommand('copy')
}