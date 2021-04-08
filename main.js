var nome = "Gamopim";
var idade = 34;
var idade2 = 10;
var frase = "Vamo inter";    
//alert   (nome + " tem " + idade + " anos"); 
//alert(idade + idade2); 
console.log(nome);
console.log(idade + idade2);
console.log(frase.toUpperCase());
console.log(frase.replace("inter", "brasil") .toLowerCase());

var lista = ["maça", "pera", "laranja"];

//console.log(lista[1]);
lista.push("uva");
//alert(lista[1]);
console.log(lista);
console.log(lista.length); //duraçao da lista
console.log(lista.reverse()); //reverte a lista
console.log(lista.toString()); //passa o conteúdo da lista como string
console.log(lista.join(" - ")) //add algo entre os itens da lista

var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor:"roxa"}]
console.log(frutas);
console.log(frutas[1].cor);


var idade = prompt("Qual a sua idade?");
//var idade = 18;
if (idade >= 18) {
    alert("maior de idade")
}
else{
    alert("menor de idade");
}