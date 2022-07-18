const John = {firstName:"John", lastName:"Doe", age:50, height:5.6};
const Zoe = {firstName:"Zoe", lastName:"Lin", age:7, height:4};
const Seth = {firstName:"Seth", lastName:"Johnson", age:22, height:4.3};
const Marry = {firstName:"Marry", lastName:"Joe", age:80, height:5.6};


function whatToDo (person){
    if (person.age < 8) {
        console.log("Check out the Marry-Go-Around!");
    } else if (person.age < 65 && person.height < 4.5){
        console.log("Check out the rollercoaster!");
    } else {
        console.log("Check out the lazy-river!");
    }
}

