function superbowlWin(array){
let answer = array.find(object => object.result === "W")
    return answer ? answer.year : undefined
}