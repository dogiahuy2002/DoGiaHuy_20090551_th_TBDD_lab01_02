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