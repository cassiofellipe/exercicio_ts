// Função de multiplicação
function multiplicacao(numero1: number, numero2: number): number {
    return numero1 * numero2;
}

// Função de saudação
function saudacao(nome: string): string {
    return "Olá " + nome;
}

// Exemplos de uso
const resultadoMultiplicacao = multiplicacao(2, 3);
console.log("Resultado da multiplicação:", resultadoMultiplicacao);

const mensagemSaudacao = saudacao("João");
console.log(mensagemSaudacao);