const array = [2,7,11,15]

//jeito 1
function two_sum(array: number[], target: number){
    for(const n1 of array){
        for(const n2 of array){
            if (n1+n2==target){
                console.log(n1, n2)
            }
        }
    }
}

 



function it(array: number[], target: number){
    let n1 = 0 
    
    

    for(n1 ; n1<array.length;n1++){
        for(let n2=n1+1; n2<array.length;n2++){

            if(array[n1]+array[n2]==target){
                return [n1,n2]
            }
        }
    }
}


console.log(it(array,9))