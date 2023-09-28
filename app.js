
let countEl = document.getElementById("count-el") // gets the id from h2 tag in html
console.log(countEl)                              // displayes the html tag into the console to check if its working

let saveEl = document.getElementById("save-el")   // gets the id from p tag in html
console.log(saveEl)                               // displayes the html tag into the console to check if its working


let count = 0                                     // counter starts at 0

function increment(){                             // Every time the increment button is pressed it adds +1 to the count
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0                        // resets the counter back to 0 when save button is pressed
    count = 0
}