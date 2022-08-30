function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}

function displayPost(posts) {
    const postContainer = document.getElementById('post-container')
    for (const post of posts) {
        console.log(post);
        const div = document.createElement('div');
        div.innerHTML = `
        <h3>User: ${post.userId}</h3>
        <h4>Title: ${post.title}</h4>
        <p>Post: ${post.body}</p>
        `
        postContainer.appendChild(div)
    }


}