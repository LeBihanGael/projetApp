const myInput = document.getElementById("myI");
const myButton = document.getElementById("myB");
const myInput2 = document.getElementById("myP");
const boutonSelectedUsers = document.getElementById("boutonSelectedUsers");

boutonSelectedUsers.addEventListener("click", () => {
    const usersList = document.getElementById("usersList");
    const selectedUserId = usersList.value;
    //("Le user " + selectedUserId + " a voté !");
    fetch('/vote', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ idUsers: selectedUserId })
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    });
});

myButton.addEventListener("click", () => {
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login: myInput.value, password: myInput2.value })
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


window.onload = () => {
    fetch('/users')
    .then(response => response.json())
    .then(users => {
        const usersList = document.getElementById("usersList");
        users.forEach(user => {
            const option = document.createElement("option");
            option.value = user.id;
            option.text = user.login;
            usersList.appendChild(option);
        })
    })
    afficheVote();
};

function afficheVote() {
    const usersList = document.getElementById("usersList");
    const selectedUserId = usersList.value;
    fetch('/nombre', {
    })
        .then(response => response.json())
        .then(data => {
            const result = document.getElementById('votes');
            data.forEach(vote => {
            const tr = document.createElement('tr');
            result.appendChild(tr);
            const td = document.createElement('td');
            td.innerText = vote.login;
            tr.appendChild(td);
            const td1 = document.createElement('td');
            td1.innerText = vote.NbVote;
            tr.appendChild(td1);
        });
    });            
}
