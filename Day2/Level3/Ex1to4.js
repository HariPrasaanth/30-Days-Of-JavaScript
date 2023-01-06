// Exercise 1
let a = "Love is the best thing in this world. Some found their love and some are still looking for their love."
console.log(a.match(/love/gi).length)

// Exercise 2
let b = "You cannot end a sentence with because because because is a conjunction"
console.log(b.match(/because/gi).length)

// Exercise 3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/[^A-Za-z0-9 s]/gi, ''))

// Exercise 4
let statement = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month"
let earnings = statement.match(/\d+/gi)
let total_earnings = 0;
for(let i=0; i<earnings.length; i++){
    total_earnings+=Number(earnings[i])
}
console.log(total_earnings)
