

//Coding Challenge #1
var massM = 78;
var heightM = 1.69;
var massJ = 92;
var heightJ = 1.95;
var BIM_Mark = massM / Math.pow(heightM, 2);
var BIM_John = massJ / Math.pow(heightJ, 2);

console.log(massJ);
var markHigherBIM = true;
if (BIM_Mark > BIM_John) {
    console.log(markHigherBIM);
} else {
    markHigherBIM = false
    console.log(markHigherBIM);
}

//Coding Challenge #2
let rs1 = 'Mark BMI is higher than John!'
let rs2 = 'John BMI is higher than Mark!'

if (markHigherBIM) {
    console.log(rs1);
} else {
    console.log(rs2)
}

let rs3 = 'Mark BMI ${BIM_Mark} is higher than John ${BIM_John}'
let rs4 = 'John () is higher than Mark BMI (${BIM_Mark})!'

if (markHigherBIM) {
    console.log(rs3);
} else {
    console.log(rs4)
}
//Coding Challenge #3
var Dophins = [97, 112, 101]
var Koalas = [109, 95, 123]
let sum1 = 0;
let count1 = 0;
Dophins.forEach(function(element) {
    sum1 += element;
    count1++;
})
let sum2 = 0;
let count2 = 0;
Koalas.forEach(function(element) {
    sum2 += element;
    count2++;
})
let avg1 = sum1 / count1;
let avg2 = sum2 / count2;
console.log(avg1);
console.log(avg2);
if (avg1 > avg2 && avg1 >= 100) {
    console.log('The win team is Dophins');
} else {
    if (avg2 > avg1 && avg2 >= 100) {
        console.log('The win team is Koalas');
    }
}
if (avg1 == avg2 && avg1 >= 100) {
    console.log('Both of two team are win');
} else {
    if (avg1 < 100 && avg2 < 100)
        console.log('No team wins the trophy');
}

//Coding Challenge #4

var X = [275, 40, 430];
var tips;
X.forEach(function(element){
    if(element>=50 && element<=300){
        tips = element * 0.15;
        console.log('The bill is',element, 'the tips was', tips, 'and total value ', element+tips )
    }
    else
    tips = element * 0.2;
    console.log('The bill is',element, 'the tips was', tips, 'and total value ', element+tips )
})

//Coding Challenge #5
var calcAverage = function(array) {
    let sum = 0;
    array.forEach(function(element){
      sum += element;
    });
    return sum/array.length
}  
var checkWinner = function(avg1, avg2){
    if ((avg1/2)>=avg2){
        console.log('Dophins win (',avg1, 'vs.',avg2, ')')
    }else{
        if ((avg2/2)>=avg1) {
            console.log('Koala win (',avg2, 'vs.',avg1, ')')
        } else {
            console.log('no team win ')
        }
    }
}
const Dophins = [85 , 54, 41]
const Koalas = [23, 34, 27]
var avg_D = calcAverage(Dophins)
var avg_K = calcAverage(Koalas)
console.log(avg_D)
console.log(avg_K)

var kq = checkWinner(avg_D,avg_K)

//Coding Challenge #7
let tips
var calcTip = function(element){
    if(element>=50 && element<=300){
        tips = element * 0.15;
        console.log('The bill is',element, 'the tips was', tips )
    }
    else{
    tips = element * 0.2;
    console.log('The bill is',element, 'the tips was', tips )
    }
}
let example = calcTip(100);