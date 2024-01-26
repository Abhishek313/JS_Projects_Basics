// fetch using xhr

const postListContainer = document.querySelector('.posts-list-container')

function fetchUsingXHR() {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos')
    xhr.responseType = 'json';

    xhr.send();
    xhr.onload = () => {
        if(xhr.status == 200) {
            displayResults(xhr.response)
            console.log(xhr)
        } else {
            console.log("Error Occured");
        }
    }

}

function fetchUsingFetchMehtod() {
    const fetchRequest = fetch('https://jsonplaceholder.typicode.com/todos',{
    method : 'GET',
    })

    fetchRequest
    .then(response => response.json())
    .then(result => displayResults(result))  
    .catch((e) => console.log(e))
}

async function fetchUsingAsyncAwait() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos',{
        method : 'GET'
    })

    const result = await response.json();

    displayResults(result);

}

function displayResults(posts) {
    postListContainer.innerHTML = posts.map (postItem => `<div clas = "post-item">
    <h3>${postItem.id}</h3>
    <p>${postItem.title}</p> 
    <p>${postItem.completed}</p> 
    </div>`).join(" ");
}





fetchUsingAsyncAwait();
// fetchUsingXHR();
// fetchUsingFetchMehtod();
