//Function Icones
function mudaFoto(foto){
    window.document.getElementById("icone").src = foto;
}
//Function form
function calc_total(){
    let quant = window.document.querySelector("input#cQuant")
    let qnt = Number(quant.value)
    var total = qnt * 1500;
    window.document.getElementById('cPt').value = total.toFixed(2).replace('.',',')
}
//Function specs
function sair(){
    let foto = window.document.getElementById("mapa")
    foto.src = "_imagens/glass-esquema.jpg"
}
function entrar(){
    let foto = window.document.getElementById("mapa")
    foto.src = "_imagens/glass-esquema-marcado.jpg"
}