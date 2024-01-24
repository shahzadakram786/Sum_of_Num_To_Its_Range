let btnC = document.getElementById("buttncalc");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2")
let para = document.getElementById("prgrph")



btnC.addEventListener('click', () => {
    let inputValue = parseFloat(input1.value);
    let inputRange = parseFloat(input2.value);
    let sum = 0;

    for (let i = inputValue; i <= inputRange; i++) {

        // for (let j = 0; j <= inputRange; j++) {

        sum += i;
        // }


    }
    para.innerHTML = `sum is ${sum}`;
    console.log(sum)


})

// from this point below code is seprate







let U_input1 = document.getElementById("task2input1");
let U_butn = document.getElementById("task2Btn");
let U_para = document.getElementById("ulatpara");
let U_butn2 = document.getElementById("task2Btn2")



U_butn.addEventListener('click', () => {
    let inputT2 = U_input1.value;
    let tempT2 = "";
    for (let i = inputT2.length - 1; i >= 0; i--) {
        tempT2 += inputT2[i];
        console.log('here is ', inputT2[i])

    }
    U_para.innerHTML = `Here is your word: ${tempT2} `;


    // for (let i = 0; i < inputT2.length; i++) {
    //     for (letj = 0; j <= inputT2.length; j++) {
    //         let tempT2 = inputT2[j];
    //         inputT2 = inputT2[4] + inputT2[3] + inputT2[2] + inputT2[1] + inputT2[0];

    //     }

});

U_butn2.addEventListener('click', () => {
    let inputT2 = U_input1.value;
    let tempT3 = "";
    tempT3 = [inputT2[4], inputT2[3], inputT2[2], inputT2[1], inputT2[0]];

    console.log(tempT3);
    para.innerHTML = `here is you output ${tempT3}`

})



//another type for text mirrioring
let x = [1, 2, 4];
x.splice(2, 0, 3);
console.log('x =', x)
    // [x[2], x[0]] = [x[0], x[2]];
    // console.log('x =', x)



let y = "helo";
let z = [y[3], y[2], y[1], y[0]];
console.log('z =', z)



// let str = "hello";
// for (let i = 0; i <= str.length; i++) {
//     for (let j = 0; j <= str.length; j++) {
//         let str2 = str[j];
//         // str = str[1, 0]
//         str = str[4] + str[3] + str[2] + str[1] + str[0];


//     }

// }
// console.log(str)






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