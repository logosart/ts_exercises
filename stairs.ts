function climbStairs(n: number): number {

    // casos básicos
    if (n === 1) return 1
    if (n === 2) return 2

    let anterior = 1
    let atual = 2

    // começa do degrau 3
    for (let i = 3; i <= n; i++) {

        let novo = anterior + atual

        anterior = atual
        atual = novo
    }

    return atual
}

const n = 3

console.log(climbStairs(n))