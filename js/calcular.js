function limpar_campo() {
    let texto = document.getElementById("resposta").value
    document.getElementById("resposta").value =
        texto.substring(0, texto.length - 1);
}

function limpar_entrada() {
    document.getElementById("resposta").value = "";
}

function res(valor) {
    document.getElementById("resposta").value += valor;
}

function atualizar_entrada(e) {
    if (e.key == '0' || e.key == '1' ||
        e.key == '2' || e.key == '3' ||
        e.key == '4' || e.key == '5' ||
        e.key == '6' || e.key == '7' ||
        e.key == '8' || e.key == '9' ||
        e.key == '+' || e.key == '-' ||
        e.key == '*' || e.key == '/')
        document.getElementById("resposta").value += e.key;
}

var calculo = document.getElementById("calculadora");
calculo.onkeyup = function(e) {
    if (e.keyCode === 13) {
        console.log("Enter");
        let a = document.getElementById("resposta").value;
        console.log(a);
        calcular();
    }
}

function calcular() {
    let a = document.getElementById("resposta").value
    let b = math.evaluate(a)
    document.getElementById("resposta").value = b
}