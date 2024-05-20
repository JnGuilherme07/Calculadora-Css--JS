function soma(){
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    document.getElementById("resultado").innerText = numero1 + numero2;
}
function subtracao() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    document.getElementById("resultado").innerText = numero1 - numero2;
}
    
function multiplicacao() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
        document.getElementById("resultado").innerText = numero1 * numero2;
}
    
function divisao() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    if (numero2 === 0) {
        document.getElementById("resultado").innerText = "Erro";
    } else {
        document.getElementById("resultado").innerText = numero1 / numero2;
    }
}