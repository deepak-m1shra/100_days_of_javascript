
/* METHOD 1: 
const count = document.querySelector(".count")
const addBtn = document.querySelector(".add")
const subBtn = document.querySelector(".subtract")
const resetBtn = document.querySelector(".reset")

addBtn.addEventListener("click", () => {
    count.innerHTML++;
})

subBtn.addEventListener("click", () => {
    count.innerHTML--;
})

resetBtn.addEventListener("click", () => {
    count.innerHTML = 0;
})
*/


/* Method 2: Event Delegation */
const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons")

buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
        console.log("add")
        count.innerHTML++
    } else if (e.target.classList.contains("subtract")) {
        console.log("subtract")
        count.innerHTML--
    } else if (e.target.classList.contains("reset")) {
        console.log("reset")
        count.innerHTML = 0
    }
})