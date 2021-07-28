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



// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // Window ScrollTop
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop < (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

    allSkills.forEach(skill => {

      skill.style.width = skill.dataset.progress;

    });

  }

};


// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

  img.addEventListener('click', (e) => {

    // Create Overlay Element
    let overlay = document.createElement("div");

    // Add Class To Overlay
    overlay.className = 'popup-overlay';

    // Append Overlay To The Body
    document.body.appendChild(overlay);

    // Create The Popup Box
    let popupBox = document.createElement("div");

    // Add Class To The Popup Box
    popupBox.className = 'popup-box';

    if (img.alt !== null) {

      // Create Heading
      let imgHeading = document.createElement("h3");

      // Create text For Heading
      let imgText = document.createTextNode(img.alt);

      // Append The Text To The Heading
      imgHeading.appendChild(imgText);

      // Append The Heading To The Popup Box
      popupBox.appendChild(imgHeading);

    }

    // Create The Image
    let popupImage = document.createElement("img");

    // Set Image Source
    popupImage.src = img.src;

    // Add Image To Popup Box
    popupBox.appendChild(popupImage);

    // Append The Popup Box To Body
    document.body.appendChild(popupBox);

    // Create The Close Span
    let closeButton = document.createElement("span");

    // Create The Close Button Text
    let closeButtonText = document.createTextNode("X");

    // Append Text To Close Button
    closeButton.appendChild(closeButtonText);

    // Add Class To Close Button
    closeButton.className = 'close-button';

    // Add Close Button To The Popup Box
    popupBox.appendChild(closeButton);

  });

});

// Close Popup
document.addEventListener("click", function (e) {

  if (e.target.className == 'close-button') {

    // Remove The Current Popup
    e.target.parentNode.remove();

    // Remove Overlay
    document.querySelector(".popup-overlay").remove();

  }

});