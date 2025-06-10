// let display = document.getElementById("display");

// function appendToDisplay(input){
//     display.value += input
// }

// function clearDisplay(){
//     display.value = ""
// }

// function clearDisplayLength(){

// const arry = Object.values(display.value);
//     arry.length -= 1;
//     display.value ="";
//     const change =  arry.join("");
//     display.value +=change;

// }

// function calculate(){
//     display.value = eval(display.value) 
// }



let calculater = {
    display: document.getElementById("display"),
    clearLength: document.getElementById("clearLength"),

    appendToDisplay(input) {
        this.display.value += input;
    },

    clearDisplay() {
        this.display.value = "";
    },

    clearDisplayLength() {
        this.display.value = this.display.value.slice(0, -1);
    },

    calculate() {
        try {
            this.display.value = eval(this.display.value);
        } catch {
            this.display.value = "Error";
        }
    }
};

calculater.clearLength.addEventListener("click", () =>{
    calculater.clearDisplayLength()
});
