console.log("this works")

let materials = ["wood", 
    "brick", 
    "broken dishes", 
    "dust", 
    "leaves", 
    "grass"
];

let places = [
  "cold, windy climate",
  "desert",
  "deserted airport",
  "deserted church",
  "deserted factory",
  "hot climate",
  "metropolis"
];

let people = [
  "collectors of all types",
  "fishermen and families",
  "french and german speaking people",
  "old friends",
  "horses and birds",
  "little boys",
  "lovers"
];

let things = [
  "natural light",
  "all available lighting",
  "candles",
  "electricity"
];

function composePoetry(m, pl, pp, t){
    let material = m[Math.floor(Math.random()*m.length)];
    let place = pl[Math.floor(Math.random()*pl.length)];
    let person = pp[Math.floor(Math.random()*pp.length)];
    let thing = t[Math.floor(Math.random()*t.length)];
    let poem = material + " " + place + " " + person + " " +  thing
    return poem
}

const button = document.querySelector('.poem-generator')
button.addEventListener('click', function(){
    poem = composePoetry(materials, places, people, things)
    let paper = document.querySelector('div')
    let paragraph = document.createElement('p')
    paragraph.innerText = poem
    paper.append(paragraph)
})
// function printPoetry(){
//     poem = composePoetry(materials, places, people, things)
//     let paper = document.querySelector('div')
//     let paragraph = document.createElement('p')
//     paragraph.innerText = poem
//     paper.append(paragraph)
// }

