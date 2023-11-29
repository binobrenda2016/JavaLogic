/*let num1= prompt("digite um numero:");

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



/*alert ('O resultado da op ê' +soma);

let n1 = prompt("Informe a primeira nota");
let n2 =prompt("Informe a segunda nota");
let n3 = prompt("Informe a terceira nota");
let n4 = prompt("Informe a quarta nota");
let media;

media = (Number(n1) + Number(n2) + Number(n3) + Number(n4))/4

alert ("o resultado da media");
/* A locodora de carros prescisa da sua ajuda para cobrar seus serviços.Escreva um programa que pergunte a qtde. de Km percorridos por um carro alugado e a qtde. dfe dias pelos quais ele foi alugado calcule o preço total a pagar sabendo que o carro cust R$ 90 por dia 
e R$ 0,20 por KM rodado.*/

 /*let km = prompt("digite a quantidade de km percorrida ");
 let dias = prompt("digite a quantidade de dias  utilizando o produto");
 

 let(soma);
  soma = Number(km)*0.20; +(Number(dias)*90);
alert ('o preço total é R$' +soma);
 /* Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em km .Calcule o preço da passagem ,cobrando R$0.50 por Km parea viagens até 
 200 Km e R$0.45 para viagens mais longas.*/

 /*let distância =prompt("Digite a distância percorrida");
  let total;
  if (dist <=200){
          total = Number(distancia)*0.50;}
          {else{
                  total =Number(distância)*0.45;
                alert("totala pagar:" + total)
          }
          ]
  }
  /* Crie um programaque leia duas notas de um aluno e calcule a sua media ,mostrando uma mensagem no final,de acordo com a media atingida:
  -media até 4.9 REPROVADO
  -média de 5.0 e 6.9 RECUPERAÇÃO 
  -Média entre 7.0 ou superior APROVADO.*/
  
  /*let n1 = prompt("Informe a primeira nota");
  let n2 = prompt("informe a segunda nota ");
  let media;*/
   

 /* let nome = prompt("Digite o nome do funcionario");
  let sal. = prompt ("Digite o salario ");
  let tem = prompt ("Digite há quantos anos o funcionário trabalha na empresa");

  if(temp <= 3){  
          conv = Number(sal) *0.03;

  if(temp >= 4 && temp <= 10){
          conv =Number(sal) * 0.125;
  }
else{
        conv = Number(sal) * 0.2;
}
 salf = Number(sal) + Number (sal);

   alert(nome + "seu salário teve um aumento de" = "R$ + e seu salário e de" + "R$");

   }*/
  

 
  /* let = largura = prompt("Digite o valor da largura do terreno");
   let = comprimento = prompt("Digite o valor do comprimento do terreno");
   let = area;

   area = (Number (largura) * (comprimento))
   if (area<=100){
           alert("Terreno popular")
   }
   else if(area>100 && area <=500){
           alert("Terreno Master")
   }
   else{
           alert("Terreno Vip")
   }*/
   
 /* let = hora =prompt("Digite o valor de horas");
 let = pontos
  let = dinheiro 
  
 if(hora<= 10){
        pontos=Number(hora)*2
 }
else if(hora > 10 && hora<=20){
        pontos =Number(hora)*5
}
else{pontos =Number(hora)*10}
dinheiro = (pontos)* 
*/
         
/*let sal = (prompt ("Digite salário"))
let genero = (prompt ("Digite o gênero"))
let temp = (prompt ("Digite o tempo de empresa"))
let novosalario;

if (gen == "m"){
        if(Number(temp <20))
        novosalario = Number(sal) *0.03;
        else if(temp =20 && temp < =30){
                novosalario = Number(sal) *0.13
        else{
                novosalario = Number(sal) *0.25
                
                if(gen =="f"){
                        if(Number(temp <15))
                        novosalario = Number (sal) *0.05;
                        else if(temp = 15 && temp <=20){
                                novosalario = Number(sal) *0.12
                                else{
                                        novosalario = Number(sal) *0.23
                alert("novo salário é : + novo salário");*/

/*let peso =prompt("digite o peso")
let alt =prompt("Digite a altura")
let imc = peso / alt **2
 if(imc< 18.5){
         alert("abaixo do peso")
 }else if(imc >= 18.5 && imc <25){
        alert("peso ideal")   
 } else if(imc >25&& imc <=30){
         alert("sobrepeso")
 }else if (imc >30 &&imc <40){
         alert("obesidade")
 }else {
         alert("Obesidade mórbida")
 }   */

 function mostrarTabuada(){
         // criar referência aos elementos da página
         let inNumero = document.getElementById('inNumero');
         let outtabuada = document.getElementById('outTabuada')
 }
         //converte conteudodo campo InNumero
         let numero = Number(InNumero.value);
         if (numero == 0 || isNaN(numero)){
                alert("Informe um número válido");
                InNumero.focus();
         //criar uma variaveldo tipo srting,que irá concatenara resposta
         let resposta = "";
         //criar um laço de repertição
 }              for (let i = 1; i <=10; i++) {
         //a variavel resposta vai acumulando os novos conteúdos
         resposta = resposta + numero + "x" + I +" = " + numero * i + "\n"
         // \n é uma quebra de linha
         // o conteudo da tag pre é alterado para exibira tabuada do num
         outtabuada.textContent = resposta
 }
        //criar referência ao botão e após associa functionao eventocliclk
       let btmostrar = document.getElementById('btMostrar');
        btmostrar.addEventListener('click',mostrarTabuada);

        //converter conteudo do campo innumero
        let numero = Number(InNumero.valuer);
         
        //validar o numero

                // cria uma váriavel do tipo string que irá concatenar a resposta 
                let resposta = "";

                // cria um laço de repetição
                // i é o contador 
                for (let i = 1; (index) < array.length; (index)++) {
                        const element = array[(index)];
                        
                }
        }
                )