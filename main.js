// var nome = "Gamopim";
// var idade = 34;
// var idade2 = 10;
// var frase = "Vamo inter";    
// //alert   (nome + " tem " + idade + " anos"); 
// //alert(idade + idade2); 
// console.log(nome);
// console.log(idade + idade2);
// console.log(frase.toUpperCase());
// console.log(frase.replace("inter", "brasil") .toLowerCase());

// var lista = ["maça", "pera", "laranja"];

// //console.log(lista[1]);
// lista.push("uva");
// //alert(lista[1]);
// console.log(lista);
// console.log(lista.length); //duraçao da lista
// console.log(lista.reverse()); //reverte a lista
// console.log(lista.toString()); //passa o conteúdo da lista como string
// console.log(lista.join(" - ")) //add algo entre os itens da lista

// var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor:"roxa"}]
// console.log(frutas);
// console.log(frutas[1].cor);


// // var idade = prompt("Qual a sua idade?");
// // //var idade = 18;
// // if (idade >= 18) {
// //     alert("maior de idade")
// // }
// // else{
// //     alert("menor de idade");
// // }

// var count = 0;
// while (count <= 5){
//     console.log(count);
//     count = count + 1; //igual a count++
// }

// var count;
// for(count=0; count <= 5; count++){
//     // alert(count);
// }

// var d = new Date();
// console.log(d);
// console.log(d.getMonth()+1);
// console.log(d.getUTCMinutes());

// function soma(n1, n2){
//     return n1 + n2;

// }

// alert(soma(5,10));

// // function setReplace(frase, nome, novo_nome){
// //     return frase.replace(nome, novo_nome)
// // }
// // alert(setReplace("Vai Japão", "Japão", "Brasil"));

// function validaIdade(idade){
//         var validar;
//         if (idade >= 18){
//             validar = true 
//         }
//         else{
//             validar = false
//         }
//         return validar;
// }
// var idade = prompt("Qual a sua idade?");
// console.log(validaIdade(idade));

function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    // console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("https://www.globo.com"); //abre em outra aba
    //window.location.href = "https://www.globo.com"; //abre na mesma aba

}

function trocar(elemento){
   //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("pagina carregada");
}

function funcaochange(elemento){
    console.log(elemento.value)
}