function minimumBoxes(apple: number[], capacity: number[]): number {
    capacity.sort((a,b)=> b-a)
    let soma = 0 

    for (const num of apple){
        soma+=num
        
    }console.log("maças: " + soma)

    let caixas = 0 
    let count :number = 0 
    for(const num2 of capacity){
        
        if(caixas<soma){
            caixas+=num2
            count+=1    
        }

        if(caixas>=soma){
            break
        }
        
    }console.log("Caixas: "+  caixas)
    console.log("Caixas necessárias: "+count)
    return count
  


};


const apple = [1,8,3,3,5] //20
const capacity = [3,9,5,1,9] //26


minimumBoxes(apple, capacity)