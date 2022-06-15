let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-element");
console.log(saveEl);

let count = 0;
function increment()
{
   count = count + 1;
   countEl.innerText = count;
   console.log(count);
}


function save()
{
    let countStr = " "+ count + " - ";
    saveEl.innerText += countStr;
    console.log(count);
    countEl.innerText = 0;
    count = 0;
}


