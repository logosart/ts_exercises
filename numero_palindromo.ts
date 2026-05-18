const num = 10


function verify(num:number): boolean{
    const value = num.toString().split("")

    let i = 0 
    let x = value.length-1

    while (i<x){
        if(value[i]!=value[x]){
            return false
        }i++; x--;
    }return true
}


console.log(verify(num))