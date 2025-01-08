const sum = (num1, num2) => {
    console.log(num1+num2) 
}
sum(2,5)

const fizzbuzz = () => {
    for (let i = 0; i < 50; i++) {
        if (i % 5 == 0) {
            console.log("fizzbuzz")
        } else if (i % 3 == 0) {
            console.log("fizz")
        } else if (i % 2 == 0) {
            console.log("buzz")
        }
    }
}

fizzbuzz()