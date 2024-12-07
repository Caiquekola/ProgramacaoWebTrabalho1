const button = document.getElementById('button');
const main = document.getElementById('main');

const gradients = [
    "linear-gradient(45deg, #ff9a9e, #fad0c4)",
    "linear-gradient(120deg, #a1c4fd, #c2e9fb)",
    "linear-gradient(60deg, #fbc2eb, #a6c1ee)",
    "linear-gradient(90deg, #84fab0, #8fd3f4)",
    "linear-gradient(120deg, #ffecd2, #fcb69f)"
];

let currentGradient = 0;

button.addEventListener('click', () => {
    currentGradient = (currentGradient + 1) % gradients.length;
    main.style.background = gradients[currentGradient];
});
