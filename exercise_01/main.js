// let width = prompt("Width?")
// let height = prompt("Height?")

// function whatIsArea(num1, num2) {
//     window.alert("The area is " + num1*num2)
// }

// whatIsArea(width, height)

// let greeting = document.getElementsByClassName('greeting')
// console.log(greeting[0])

let noun = "object"
let verb = 'jump'
let adjective = 'happy'


function writeAPoem(noun, verb, adjective){
    return "My " + noun + " leaps " + adjective + " when I " + verb
}


let poem1 = writeAPoem(noun, verb, adjective)
let poem2 = writeAPoem("cat", "cry", "angrily")
let paper = document.querySelector('div')
let paragraph = document.createElement('p')
paragraph.innerText = poem2
paper.innerText = poem1
paper.append(paragraph)