let letterSelect = document.getElementById("letters");
let wordSelect = document.getElementById("words");
let arr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let arr2 = ['apple', 'banana', 'city', 'dom', 'end', 'forEach', 'gold'];

for (let i = 0; i < arr1.length; i++) {
    const opt = document.createElement("option")
    const opt2 = document.createElement("option")
    opt.innerHTML = arr1[i];
    letterSelect.appendChild(opt);
    opt2.innerHTML = arr2[i]
    wordSelect.appendChild(opt2);
}

letterSelect.addEventListener("change", (e) => {
    valueSelector(true, e.target.value);
})

wordSelect.addEventListener("change", (e) => {
    valueSelector(false, e.target.value);
})

function valueSelector(selected, word) {
    if (selected) {
        wordSelect.value = arr2[arr1.indexOf(word)];
    } else {
        letterSelect.value = arr1[arr2.indexOf(word)];
    }
}