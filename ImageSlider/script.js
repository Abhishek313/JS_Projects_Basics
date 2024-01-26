const slider = document.querySelector('.slider')



async function fetchListOfImages() {
    try {
        const fetchResults = await fetch('https://picsum.photos/v2/list?page=1&limit=5',{
            method : 'GET'
        })
        
        const result = await fetchResults.json();

        console.log(result)

        if(result && result.length > 0) {
            displayImages(result)
        }
    
    } catch(err) {
        console.log(err);
    }
}

function displayImages(result) {
    slider.innerHTML = result.map((item) => (`
    <div class = "slider">
    <img src   =  ${item.download_url} alt=${item.id}/>
    </div>`)).join(" ") 
}

fetchListOfImages()

