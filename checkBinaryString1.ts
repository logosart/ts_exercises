function checkOnesSegment(s: string): boolean {
    let is : boolean = false
    const l = s.split("").map(Number)
    let count = 0 
    const index : number[] = []
    const indices: number[] = []
    let i = 0 
    for (let i = 0; i<s.length;i++)
        if(l[i]===1){
            indices.push(i)

        }

    for(let i =0; i<indices.length-1;i++){
        
        if(indices[i+1] - indices[i]!==1){
            return false
        }
    }
    return true
};
const s = "110011"
// "1"     true
// "10"    true
// "11"    true
// "110"   true
// "1110"  true
// "101"   false
// "1001"  false
// "110011" false


//pegar o index do primeiro 1 e pegar o index do lado do 1 e ver se é um

console.log(checkOnesSegment(s))