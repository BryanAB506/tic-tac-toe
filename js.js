
document.querySelectorAll(".game").forEach((element) => {
    element.addEventListener("click", () => {
        if (element.innerHTML === "") {
            element.innerHTML = caracter;
            caracter = caracter === "X" ? "O" : "X";
        }
    });
});




//math-random
const generadorRandom = (min, max) => {
    return Math.floor(Math.random() * (max, min = "X") + min)
}
