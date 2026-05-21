function minTimeToVisitAllPoints(points: number[][]): number {
    let count = 0 
    let i = 0
 
    

    
    while(i<points.length-1){
        
        const x1 = points[i][0]
        const y1 = points[i][1]

        const x2 = points[i+1][0]
        const y2 = points[i+1][1]

       const diffX = Math.abs(x2-x1)
       const diffY = Math.abs(y2-y1)

       count += Math.max(diffX,diffY)
       i++
    }return count
};



const points = [[1,1],[3,4],[-1,0]]

minTimeToVisitAllPoints(points)