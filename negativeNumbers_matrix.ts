function countNegatives(grid: number[][]): number {
    let count : number = 0 
    for(let x of grid){
        for(let i of x){
            if(i<0){
                count+=1
            }
        }
    }return count
};






const grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]


countNegatives(grid)