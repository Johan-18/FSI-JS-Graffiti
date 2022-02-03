
// Select some elements...

let header = document.querySelector('#page-header')
header.style.textAlign = "left"

let dogImages = document.querySelectorAll('.dog-image')
let dogNames = document.querySelectorAll('.dog-name')
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
    dogImages[i].style.transform = 'rotate(180deg)'
    dogNames[i].style.textAlign = 'right'
}

let footer = document.querySelector(".footer")
footer.style.color = 'green'