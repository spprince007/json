function loadData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUser(data))
}

function displayUser(data) {
    for (const user of data) {
        console.log(user.name, user.email);

    }
}