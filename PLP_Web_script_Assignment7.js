/* ==================================================
PART 1: Animation Trigger (Event + Keyframe Activation)
=====================================================*/

const box = document.getElementById("box");
const animateBtn = document.getElementById("animate-btn");

animateBtn.addEventListener("click", function() {
    box.classList.add("animate");

    setTimeout(() => {
        box.classList.remove("animate");
    }, 2000);
});

/* ==================================================
PART 2: Function With Parameters & Return Value
===============================================*/

function multiplyNumbers(a, b) {
    return a * b;
}

document.getElementById("calculate-btn").addEventListener("click", function() {
    let result = multiplyNumbers(6, 7);
    document.getElementById("calc-output").textContent =
        "Result of calculation: " + result;
});

/* =================================================
PART 3: JavaScript Scope Demonstration
========================================*/

let globalValue = "I am global!";

function demonstrateScope() {
    let localValue = "I am local!";
    return localValue + " | " + globalValue;
}

document.getElementById("scope-btn").addEventListener("click", function() {
    document.getElementById("scope-output").textContent = demonstrateScope();
});
