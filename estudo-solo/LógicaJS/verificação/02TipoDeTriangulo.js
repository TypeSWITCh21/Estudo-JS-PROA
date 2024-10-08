/**
 * 2)
 Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:  
Equilátero: Os três lados são iguais. Isósceles:  Dois lados iguais. Escaleno: Todos os lados são diferentes.  
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto 
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um 
triângulo). 
 */


const tipoDeTriangulo = (lado1, lado2, lado3) => {
    
    let resultado

    if (lado1 == lado2 && lado1 == lado3) {
        resultado = "O triângulo é Equilátero: todos os lados iguais"
    } else if(lado1 == lado2 && lado1 != lado3 || lado1 == lado3 && lado1 != lado2 || lado2 == lado3 && lado3 != lado2 || lado1 != lado2 && lado1 != lado3 && lado2 == lado3) {
        resultado = "O triângulo é isósceles: dois lados iguais"
    } else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
        resultado = "O triângulo é escaleno: três lados diferentes"
    }

    return resultado
} 

console.log(tipoDeTriangulo(3,1,2))