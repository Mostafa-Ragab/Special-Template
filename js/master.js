// Check if theere are color in local storage
const mainColor = localStorage.getItem('color-option')

if(mainColor !== null) {
    document.documentElement.style.setProperty('--main-color', mainColor)

    // remove Active Class from all Children
    document.documentElement.querySelectorAll('.colors-list li').forEach(el => {
        el.classList.remove('active')

        // add active class on element with data color === amin color
        if(el.dataset.color === mainColor){
    
            el.classList.add('active')
        }
    })
}

// toggle spin class on Item
document.querySelector('.toggle-settings .fa-gear').onclick = function () {
    //toggle class  fa-spin for rottation onself
    this.classList.toggle("fa-spin")
    // toggle Class Open on Main Settings Box
    document.querySelector(".settings-box").classList.toggle('open')
}
// Switch colors
 const colorsLi = document.querySelectorAll(".colors-list li")

//  Loop On All List
.forEach(li => {
    // Click on Every list Items
    li.addEventListener('click', (e) => {
        
        // Set Color On Root
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color)

        // Set Color on local storage
        localStorage.setItem('color-option', e.target.dataset.color)
        // remove active class from all Children

        e.target.parentElement.querySelectorAll('.active').forEach(el => {
            el.classList.remove('active')
        })
        // Add Active on Self
        e.target.classList.add('active')
    })

    

});
const landingPage = document.querySelector('.landing-page')

const imagesArray = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg']

setInterval(() => {
    let rendomNumber = Math.floor(Math.random() * imagesArray.length)
    landingPage.style.backgroundImage = 'url("images/' + imagesArray[rendomNumber] +'")'
},2000)