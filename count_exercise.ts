
const value : String = "Frase frase Frase frase teste frase" 


const a : String [] = value.toLocaleLowerCase().trim().split(/\s/)
// list.push(a)

let count = 0 
for (let i =0; i< a.length; i++){
    for(let j=i+1; j<a.length; j++){
        if(i=j){
            count+=1
        }
    }
}

console.log("Contador: " + count)
