let num1= prompt("digite um numero:");

let num2 = prompt("Digite outro numero:")

let op = prompt("Digite a operaçao matematica")

if(op =="+"){
soma = Number(num1) +Number(num2);
}else if(op == "-"){
    soma = Number(num1) - Number(num2);
}else if(op =="*"){
        soma = Number(num1)* Number(num2);
}else if(op == "/"){
        soma = Number(num1) / Number(num2);
}

/*faça um algoritmo que receba 4 valores E ao final encontre a média*/



alert ('O resultado da op ê' +soma);