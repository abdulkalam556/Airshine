console.log('started')

var hamberg = document.querySelectorAll('.n-button')
hamberg.forEach((ham) => {
  ham.addEventListener('click', ()=>{
    console.log(hamberg)
    hamberg.forEach((ham) =>{
      ham.classList.toggle('active')
    })
    document.querySelector('.n-menu-mobile').classList.toggle('active')
  })
})

// handle menu more section
var navMoreMenu = document.querySelector('.n-menu-more')
navMoreMenu.addEventListener('click', (event) => {
  console.log('click')
  var options = document.querySelector('.n-more-options')
  console.log(options)
  if (options.style.display == '' || options.style.display == 'none') {
    options.style.display = 'flex'
  } else {
    options.style.display = 'none'
  }
})
