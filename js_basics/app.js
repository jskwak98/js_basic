const calculator = {
    plus: function (a, b){
        return a + b;
    },
    minus: function (a, b){
        return a + b;
    },
    multiply: function (a, b){
        return a * b;
    },
    divide: function (a, b){
        return a / b;
    },
    power: function (a, b){
        return a ** b;
    },
}

const age = parseInt(prompt("How old are you?")); //input + parsing
// you can know the type of variable by, typeof age -> typeof blank var

if (isNaN(age)) {
    console.log("write number");
} else if (age < 18) {
    console.log("You too young for this");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink this");
} else if (age > 50 && age <= 90) {
    console.log("Be careful about your health");
} else if (age === 105){ //they use === as the equal, !== as inequal
    console.log("Who YOu?")
} else {
    console.log("whatever")
}