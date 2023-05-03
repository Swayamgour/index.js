// document.querySelector("#grandparent")
// addEventListener('click', (e) => {
//     console.log("grand parent");
//     // e.stopPropagation()
// }, false)
// document.querySelector("#parent")
//     .addEventListener("click", (e) => {
//         console.log("parent")
//         // e.stopPropagation()
//     }, false)

// document.querySelector("#chind")
//     .addEventListener("click", (e) => {
//         console.log("chind")
//         // e.stopPropagation()
//     }, false)



// let arr = [1, 1, 2, 2, 4, 5,,2,2, 5, 6];
// let ans = []
// let x = 2
// let sum= 0

// let i = 0, r = arr.length;
// while (i<r) {
//     if (arr[i] != x) {
//         // ans.push(arr[i])
//         i++
//     }else{
//         sum++
//     }
// }

// console.log(sum)
// console.log("helloṇ");

let main = document.getElementById('main');
let input = document.getElementById('UserInput');

main.addEventListener('submit',getData);

function getData(e) {
    e.preventDefault();
    if(input.value==='') {
        alert('fill the filed');
    }
    else{
        try {
            if(input.value<0) {
                document.body.innerHTML=document.body.innerHTML+'<h4>Please fill the positive values </h4>'
            }
            else if(input.value>99) {
                alert("Please Enter Under 100")
            }
           else{
            let userInput = input.value*7;
           console.log( userInput);
           let itemObject = {
            userInput
           } 
           showOnDisplay(itemObject)
    
           // creat feild
           input.value ='';
           }
        } catch (error) {
          console.log(error);
        }
    }
}

function showOnDisplay(itemObject) {
    let parent = document.getElementById('users');
    let child = document.createElement('li');

    child.appendChild(document.createTextNode(`${itemObject.userInput}`))

    parent.appendChild(child);

}










