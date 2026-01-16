const myInput = document.getElementById("myI");
const myButton = document.getElementById("myB");

myButton.addEventListener("click", () => {
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input: myInput.value })
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    });
});

const infoButton = document.getElementById("myB2");

infoButton.addEventListener("click", () => {
    fetch('/info').then(response => response.json()).then(data => {
        document.getElementById("reponse").innerHTML = data.cle1;
    });
});

