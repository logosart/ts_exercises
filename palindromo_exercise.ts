
const frase = "A man, a plan, a canal : Panama"

function isPalindromo(texto: string): boolean {
  // 1. Limpa a string
  const limpa = texto
    .toLowerCase()
    .replace(/[\s,>:]/g,""); 
    console.log(limpa)
    let inicio = 0
    let fim = limpa.length-1

    while (inicio<fim){
        if(limpa[inicio] !== limpa[fim]){
            return false
        }inicio++;
        fim--;
    }return true 
}

console.log(isPalindromo(frase))




