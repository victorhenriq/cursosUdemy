//Modo antigo de passar parametros variáveis para uma função;

function soma() {
    let soma = 0;
    for(i in arguments) {
        soma += arguments[i];
    }
    return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(2, 5));

//Esses não fazem tanto sentido na matemática;
console.log(soma(1.1, 2.2, "Teste"));
console.log(soma('a', 'b', 'd'));