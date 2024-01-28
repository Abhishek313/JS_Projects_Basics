const productContainer = document.querySelector('.products-container')

const loadMoreButton   = document.querySelector('.load-more-btn')

let currentStep = 0;


async function fetchListOfProducts(getCurrentStep) {

    try {
        const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${(getCurrentStep===0?0:getCurrentStep*10)}`,{
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



function displayProducts(productList) {
console.log(productList)

productList.forEach(productItem => {
    const productItemWrapper = document.createElement('div')
    const productTitle       = document.createElement('p')
    const productThumbnail   = document.createElement('img')
    const productDescription = document.createElement('p')
    const productPrice       = document.createElement('p')

    productItemWrapper.classList.add('product-item-wrapper');
    productTitle.textContent       = productItem.title;
    productDescription.textContent = productItem.description;
    productThumbnail.src           = productItem.thumbnail;
    productPrice.textContent       = productItem.price
    
    console.log(productItemWrapper);

    productItemWrapper.appendChild(productThumbnail)
    productItemWrapper.appendChild(productTitle)
    productItemWrapper.appendChild(productPrice)
    productItemWrapper.appendChild(productDescription)

    productContainer.appendChild(productItemWrapper)
    
})
}
fetchListOfProducts(currentStep)

loadMoreButton.addEventListener('click', () => {
    console.log("hello")
    fetchListOfProducts((++currentStep));
})