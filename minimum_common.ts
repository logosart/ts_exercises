function getCommon(nums1: number[], nums2: number[]): number {
    let i =0
    let b = 0
   

    while(i< nums1.length && b<nums2.length){
        if(nums1[i] === nums2[b]){
            return nums1[i]
        }

        if (nums1[i] < nums2[b]){
            i++
        }else{
            b++
        }
    
    }return -1
}


const nums1 : number[] =  [1,3]
const nums2 : number[] = [2,4]

console.log(getCommon(nums1,nums2))
