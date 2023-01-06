// Exercise 1
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')

// Exercise 2
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')

// Exercise 3
let a= '10'
let b= 10
console.log(typeof a===typeof b)
console.log(typeof Number(a)===typeof b)

// Exercise 4
let c= 9.8
let d= 10
console.log(c===d)
console.log(Math.round(c)===d)

// Exercise 5
let e= 'python'
let f= 'jargon'
console.log(e.includes('on'))
console.log(f.includes('on'))

// Exercise 6
let g= 'I hope this course is not full of jargon'
console.log(g.includes('jargon'))

function generateRandom(exercise, min, max){
    console.log(exercise, Math.ceil(Math.random() * (max - min) + min))
}

// Exercise 7
generateRandom("exercise 7", 0, 100);

// Exercise 8
generateRandom("exercise 8", 50, 100);

// Exercise 9
generateRandom("exercise 9", 0, 255);

// Exercise 10
function generateRand(min, max){
    return Math.ceil(Math.random() * (max - min) + min)
}
let str = 'JavaScript'
console.log(str[generateRand(0, str.length-1)])

// Exercise 11
console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125');

// Exercise 12
let sentence2 = "You cannot end a sentence with because because because is a conjunction";
console.log(sentence2.substring(31, 54))