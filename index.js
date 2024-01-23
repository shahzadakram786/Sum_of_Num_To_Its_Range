let btnC = document.getElementById("buttncalc");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2")
let para = document.getElementById("prgrph")



btnC.addEventListener('click', () => {
    let inputVlaues = [
        parseFloat(input1.value),
        parseFloat(input2.value)
    ]
    for (let i = 0; i < input1.length; i++) {
        for (let j = 0; j < input2.length; j++) {
            console.log()
        }

    }
})


let num = 1
let numS = 10;
for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < numS.length; i++) {
        console.log(num)
    }
}