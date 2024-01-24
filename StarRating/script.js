const stars = document.querySelectorAll('.fa-star-o')
const selectedRatingValueText = document.querySelector('.selected-rating-value')

let currentTotalSelectedStars = -1;

stars.forEach((starItem, index) => {
    starItem.dataset.rating = index + 1;
    starItem.addEventListener('mouseover', handleMouseOver)
    starItem.addEventListener('click', handlOnClick);
    starItem.addEventListener('mouseleave', handleMouseLeave);
})

function handleMouseOver(event) {
    const currentRatingValue = event.target.dataset.rating;
    
    if(!currentRatingValue) return 
    else handleUpdateRatingState(currentRatingValue)

}

function handleUpdateRatingState(getCurrentRatingValue) {

    for(let i=0; i<5; i++) {
        if(i<getCurrentRatingValue) {
            star[i].classList.replace('fa')
        }
    } 
}

function handlOnClick() {

}

function handleMouseLeave() {

}