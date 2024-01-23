let btnC = document.getElementById("buttncalc");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2")
let para = document.getElementById("prgrph")



btnC.addEventListener('click', () => {
    let inputValue = parseFloat(input1.value);
    let inputRange = parseFloat(input2.value);
    let sum = 0;

    for (let i = 0; i <= inputValue; i++) {

        for (let j = 0; j <= inputRange; j++) {

            sum += i + j
        }

    }
    para.innerHTML = `sum is ${sum}`;
    console.log(sum)


})

// from this point below code is seprate







let U_input1 = document.getElementById("task2input1");
let U_butn = document.getElementById("task2Btn");
let U_para = document.getElementById("ulatpara");









let str = "hi";
for (let i = 0; i <= str.length; i++) {
    for (let j = 0; j <= str.length; j++) {
        let str2 = str[j];
        // str = str[1, 0]
        str = str[1] + str[0];


    }

}
console.log(str)

// let num = 1
// let numS = 10;
// let sumall = "",
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