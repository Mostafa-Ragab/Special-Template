const landingPage = document.querySelector('.landing-page')

const imagesArray = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg']

setInterval(() => {
    let rendomNumber = Math.floor(Math.random() * imagesArray.length)
    landingPage.style.backgroundImage = 'url("images/' + imagesArray[rendomNumber] +'")'
},2000)