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
