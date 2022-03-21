function calcular(event) {
event.preventDefault();
/*informações do formulário*/
let bill = document.getElementById('bill').value;
let serviceQual = document.getElementById('serviceQual').value;
let pessoas = document.getElementById('people').value;

if(bill == '' | serviceQual == 0){
    alert("por favor,preencha todos os campos")
    return;
}
if(pessoas == "" | pessoas<= 1) {
    pessoas = 1;
    document.getElementById('cada').style.display = "none"
}else {
    document.getElementById('cada').style.display = "block"
}

let total = (bill*serviceQual) / pessoas;
//total = total.toFixed(2);reduzir qtd de casas.
document.getElementById('tip').innerHTML = total;
document.getElementById('resultadoFinal').style.display = "block";
}/*função responsável por calcular gorjeta*/


/*SUMIR COM A INFORMAÇÃO NA TELA PEGANDO PELO (ID)/(display = "none")*/

document.getElementById('resultadoFinal').style.display = "none";
document.getElementById('cada').style.display = "none";

/*FORMULÁRIO*/

document.getElementById('tfjs').addEventListener('submit',calcular);


