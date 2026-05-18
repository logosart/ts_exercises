const talents = {strength: 0, dexterity:0, constitution:0, intelligence:0, wisdom:0, charisma:0}

function roll(sides: number){
    return Math.floor(Math.random() * sides) + 1 
}


function rollDice(sides: number, qtt: number = 4){
    let soma: number = 0 
    const resultados: number[] = [];
    for (let i = 0; i<qtt; i++){
        const valor:number = roll(sides)
        resultados.push(valor)  
    }

    const menor = Math.min(...resultados)
    const index = resultados.indexOf(menor)
    let remove = resultados.splice(index,1)

    for(const valor of resultados){
        soma+=valor 
    }
    return soma
}





function skills(){
    
    console.log(talents.dexterity = rollDice(6))
    console.log(talents.charisma = rollDice(6))
    
}

skills()
console.log(talents)


const numeros: number[] = [10, 20, 30, 40];
const soma = numeros.reduce((total, valor) => total + valor, 0);
console.log(soma); // 100