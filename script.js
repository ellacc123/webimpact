/* 
let clicked = false;
function changeFont() {
    let p = document.getElementById("demo");
    if(!clicked) {
        p.style.fontSize = "200%";
    } else {
        p.style.fontSize = "110%";
    }
    clicked = !clicked;
} */

let clicked = false;
function disappear() {
    let p = document.getElementById("demo");
    if (!clicked) {
        p.style.display = "none";
    } else {
        p.style.display = "block";
    }
    clicked = !clicked;

}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function generateNumber() {
    let rand = Math.floor(Math.random() * numbers.length);
    document.getElementById("numberList").innerHTML += numbers[rand] + ", ";
}