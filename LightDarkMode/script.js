const changeThemeBtn = document.querySelector('.change-theme-btn')

const body = document.querySelector('body');


changeThemeBtn.addEventListener('click',() =>{
   if(body.style.backgroundColor === 'red') {
    body.style.backgroundColor = 'black'
    changeThemeBtn.style.backgroundColor = 'red'
   }
   else {
    body.style.backgroundColor = 'red'
    changeThemeBtn.style.backgroundColor = 'yellow'
   }
})