/*Variavel */
let message: string = "Help Me, Obi-Wan Kenobi.";
console.log(message);

let episode :number = 4

console.log("This is episode " + episode)
episode = episode + 1
console.log("Next episode is " + episode)

let droid
droid = 'BB-8'
droid = 10
console.log(droid)

/*Função */
let isEnoughToBeatMF = function (parsecs: number) : boolean {
    return parsecs < 12
}


let distance = 11
console.log(`Is ${distance} parsecs enough ? ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'}`)

let call = (name: string) => console.log(`Do you copy, ${name}?`)
call('R2')

function inc (speed: number, inc: number = 1): number{
    return speed + inc
}

console.log(`inc (5,1) = ${inc(5,1)}`)
console.log(`inc (5) = ${inc(5)}`)