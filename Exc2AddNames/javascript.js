const input = document.getElementById("input");
input.focus();
input.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        handleAddName(input);
    }
});

const list = document.getElementById("list");
const button = document.getElementById("button");
button.addEventListener('click', () => handleAddName(input));

function handleAddName(textInput) {
    const name = textInput.value.trim();
    if (name !== "") {
        addName(name);
        textInput.value = "";
        textInput.focus();
    } else {
        alert("Por favor insira um nome válido...");
    }
}

function addName(input) {
    const item = document.createElement("li");
    item.textContent = input;
    list.appendChild(item);
}

