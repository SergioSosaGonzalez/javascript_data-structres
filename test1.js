function generateRange(pMin = 0, pMax , pStep) {
    let number = [];

    for (let i = pMin; i <= pMax;i+= pStep <= 0 ? 1 : pStep) 
        number = number.concat(i);

    return number; 
}

function reversString(pWord) {
    let arrayWord = pWord.trim().split(' ');
    let reverseArray = arrayWord.map((item) => item.split('').reverse().join(""));
    return reverseArray.join(" ");
}

function divisors(pNumber) {
    let counter = 0;
    for (let i=1; i<= pNumber; i++) {
        if((pNumber % i) === 0)counter ++
    }
    // console.log(counter);
    return counter;
}
/* let range = generateRange(1,10,3);
let reverseiSentence = reversString('Double spaces'); */
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let answer = 1;
    let isBreak = false;
    let min = 0;
    let max = 0;
    let newArray = A.filter((item) => item > 0);
    if(newArray.length === 0) return answer;

    for (let val of newArray){
        if (min === 0 && max == 0) {
            min = val;
            max = val;
        }
        if( val < min ) min = val;
        if(val > max )max = val;
    }

    for (let i = min; i<= max; i++){
        let isNumberExist = newArray.find((item) => item === i);
        answer = i;
        if(!isNumberExist) {
            answer = i;
            isBreak = true;
            break;
        }
    }
    if(!isBreak) answer++;

    return answer;
}
console.log(solution([1, 2, 3]));
