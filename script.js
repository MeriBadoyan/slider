const images = document.querySelectorAll('.container img')
const imgDivs = document.querySelectorAll('.imgDiv')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

let current = 0

function nextImg() {
    imgDivs[current].classList.remove('active')
    current++

    if (current === imgDivs.length) {
        current = 0
    }

    imgDivs[current].classList.add('active')
}

setInterval(nextImg, 3000)

next.addEventListener('click', nextImg)

prev.addEventListener('click', () => {
    imgDivs[current].classList.remove('active')

    current--

    if (current < 0) {
        current = imgDivs.length - 1
    }

    imgDivs[current].classList.add('active')

})

