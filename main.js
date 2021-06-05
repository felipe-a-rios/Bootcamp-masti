var i = 0;
var h = [];
function calcs() {
    var cont = true;
    var num1 = document.dados.num1.value;
    var num2 = document.dados.num2.value;
    var res;
    var op = document.dados.op.value;
    var data = dataHora();
    if (cont) {
        if (document.dados.num1.value == "") {
            window.alert("Insira um número!")
            document.dados.num1.focus();
            cont = false;
        }
        else if (document.dados.op.value == "") {
            window.alert("Insira um operador!")
            document.dados.op.focus();
            cont = false;
        }
        else if (document.dados.num2.value == "") {
            window.alert("Insira um número!")
            document.dados.num2.focus();
            cont = false;
        }
        else {
            if (checkNumber(num1)) {
                num1 = parseInt(document.dados.num1.value);
                if (checkNumber(num2)) {
                    num2 = parseInt(document.dados.num2.value);
                }
                else {
                    cont = false
                    window.alert("Numero invalido!");
                    document.dados.num2.focus();
                }
            }
            else {
                cont = false
                window.alert("Numero invalido!");
                document.dados.num1.focus();
            }
        }



        if (cont) {
            switch (op) {
                case "+": {
                    res = num1 + num2;
                    break;
                }
                case "-": {
                    res = num1 - num2;
                    break;
                }
                case "*": {
                    res = num1 * num2;
                    break;
                }
                case "/": {
                    if (num2 == 0) {
                        cont = false;
                        window.alert("Impossivel! Divisão por Zero.")
                    }
                    else {
                        res = num1 / num2;
                    }
                    break;
                }
                default:
                    window.alert("Operador inválido!");
                    document.dados.op.focus();
                    cont = false;
            }
            if (cont) {
                var haux;
                haux = "Cálculo: " + num1 + " " + op + " " + num2 + " = " + res + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + data;
                h.unshift(haux);
                var elemento = document.createElement("div");
                console.log(elemento)
                elemento.classList.add("white");
                elemento.innerHTML = haux;
                document.getElementById("historico").appendChild(elemento);
                if (i % 2 == 0) {
                    elemento.classList.add("grey");

                }

                elemento.innerHTML = haux;
                document.getElementById("historico").appendChild(elemento);
            }
            i++;
        }
    }
}


function dataHora() {
    var agora = new Date();
    var dd = agora.getDate();
    var mm = agora.getMonth();
    var aaaa = agora.getFullYear();
    var hora = agora.getHours();
    var min = agora.getMinutes();
    var seg = agora.getSeconds();
    var momento = "Data: " + dd + "/" + mm + "/" + aaaa + " " + hora + ":" + min + ":" + seg;
    return momento;
}
function checkNumber(valor) {
    var regra = /^[0-9]+$/;
    if (valor.match(regra)) {
        return true;
    }
    return false;
}