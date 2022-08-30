function todosFuntions() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => todosTest(data))
}

function todosTest(datas) {
    const todosSection = document.getElementById('todo-section');
    for (const data of datas) {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <h3>User-Id: ${data.userId}</h3>
        <h4>Title: ${data.title}</h4>
        <p> Description: ${data.completed}</p>
        `
        todosSection.appendChild(newDiv);
    }
}

// todosFuntions();