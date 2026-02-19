const button = document.getElementById("colorBtn");
const message = document.getElementById("message");

button.addEventListener("click", function() {
    const colors = ["#FFB6C1", "#90EE90", "#ADD8E6", "#FFD700", "#FFA07A"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
    message.textContent = "Background color changed!";
});
