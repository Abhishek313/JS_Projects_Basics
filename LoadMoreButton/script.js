const productContainer = document.querySelector('.products')


async function fetchListOfProducts() {

    try {
        const response = await fetch('https://dummyjson.com/products',{
            method: 'GET'
        })

        const result = await response.json()

        
        if(result && result.products) 
         displayProducts(result.products);

        console.log(result)

    } catch (err) {
        console.log(err)
    }
}

fetchListOfProducts()

function displayProducts(productList) {
console.log(productList)

productList.forEach(productItem => {
    const productItemWrapper = document.createElement('div')
    const productTitle       = document.createElement('p')
    const productThumbnail   = document.createElement('img')
    const productDescription = document.createElement('p')
    const productPrice       = document.createElement('p')

    productTitle.textContent       = productItem.title;
    productDescription.textContent = productItem.description;
    productThumbnail.src           = productItem.thumbnail;
    productPrice.textContent       = productItem.price
    
    productItemWrapper.appendChild(productThumbnail)
    productItemWrapper.appendChild(productTitle)
    productItemWrapper.appendChild(productPrice)
    productItemWrapper.appendChild(productDescription)

    productContainer.appendChild(productItemWrapper)
    



})



}