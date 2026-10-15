let light = document.getElementById("light");
let dark = document.getElementById("dark");
let red = document.getElementById("red");

light.addEventListener("change", function() {
    document.body.classList.remove("dark");
} );

dark.addEventListener("change", function() {
    document.body.classList.add("dark");
} );

dark.addEventListener("change", function() {
    document.body.classList.remove("red");
} );

light.addEventListener("change", function() {
    document.body.classList.remove("red");
} );

red.addEventListener("change", function() {
    document.body.classList.remove("dark");
} );

red.addEventListener("change", function() {
    document.body.classList.add("red");
} );