const countScore = (inputs) => {
    let result = []
    for(let i=0;i<inputs.length;i++){
        const curr = Number(inputs[i])
        let length = result.length;
        if(Number.isInteger(curr)){
            result.push(curr)
        }else if(inputs[i] === "C"){
            result.pop()
        }else if (inputs[i] === "D"){
            result.push(length > 1 ? (result[length-1] * result[length-2]) : result[0])
        }else{
            result.push(length > 1 ? (result[length-1] + result[length-2]) : result[0])
        }
    }
    return result.reduce((acc, el) => acc+el,0);
}

const inputs = ['1', '5', 'D', '+', '12','C']
const result = countScore(inputs);
console.log('Scores:', result);