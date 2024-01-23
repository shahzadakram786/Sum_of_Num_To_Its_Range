let btnC = document.getElementById("buttncalc");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2")
let para = document.getElementById("prgrph")



btnC.addEventListener('click', () => {
    let inputValue = parseFloat(input1.value);
    let inputRange = parseFloat(input2.value);
    let sum = 0;

    if () {
        for (let i = 0; i < inputValue.length; i++) {

            for (let j = 0; j <= inputRange.length; j++) {

                sum += i + j
            }

        }
        para.innerHTML = `sum is ${sum}`;
        console.log(sum)

    }
})


// let num = 1
// let numS = 10;
// for (let i = 0; i < num.length; i++) {
//     for (let j = 0; j < numS.length; i++) {
//         console.log(num)
//     }
// }

// let num2 = 3;
// let range = 5;
// for (let i = 0; i < num2.length; i++) {
//     for (let j = 0; j <= range.length; j++) {
//         if (true) {
//             console.log("here is the answer:", i + 1, i + 2, i + 3, i + 4, i + 5)
//         }

//     }
// }
// console.log(num2)


// let num2 = 3;
// let range = 5;

// for (let i = 0; i < num2; i++) {
//     let sum = 0;
//     for (let j = 0; j <= range; j++) {
//         sum += i + 1 + i + 2 + i + 3 + i + 4 + i + 5;
//     }
//     console.log("Sum for i =", i, "is:", sum);
// }