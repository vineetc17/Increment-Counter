// let myAge = 19;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

// let count = 4;
// count = count + 1;
// console.log(count);

// let bonusPoints = 50

// for(let i=1;i<=50;i++)
// {
//     bonusPoints = bonusPoints + 1;
// }
// console.log(bonusPoints);

// for(let i=1;i<=75;i++)
// {
//     bonusPoints = bonusPoints - 1;
// }
// console.log(bonusPoints);

// for(let i=1;i<=45;i++)
// {
//     bonusPoints = bonusPoints + 1;
// }
// console.log(bonusPoints);

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


