function loadData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUser(data))
}
function displayUser(data) {
    const ul = document.getElementById('user-list');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}


// function displayUser(data) {
//     const ul = document.getElementById('user-list');
//     for (const user of data) {
//         const li = document.createElement('li');
//         li.innerText = user.name;
//         ul.appendChild(li);

//     }

// }




// function displayUser(data) {
//     // for (const user of data) {
//     //     console.log(user.name, user.email);

//     // }

//     const ul = document.getElementById('user-list');
//     for (const user of data) {
//         const li = document.createElement('li');
//         li.innerText = user.name;
//         ul.appendChild(li);
//     }
//     for (const user of data) {
//         const li = document.createElement('li');
//         li.innerText = user.email;
//         ul.appendChild(li);
//     }
// }

