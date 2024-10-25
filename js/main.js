document.querySelector('#search').addEventListener('click', searchpanel)
document.querySelector('#icon_03').addEventListener('click', dropmenu)
document.querySelector('#specials').addEventListener('click', specialdropfunction)
document.querySelector('#X').addEventListener('click', removespecial)

function dropmenu() {
    list01.classList.toggle('tiny_menu')
    list01.classList.add('list01')
    list01.classList.toggle('list_01')
}
function searchpanel() {
    searchbar.classList.toggle('searchin')
    searchbar.classList.toggle('normalsearch')
}
function specialdropfunction() {
    specialdrop01.classList.toggle('fancydropspecial')
    specialdrop01.classList.toggle('nodropspecial')
    list01.classList.toggle('tiny_menu')
    list01.classList.add('list01')
    list01.classList.add('list_01')
}

function removespecial() {
    specialdrop01.classList.toggle('nodropspecial')
    specialdrop01.classList.toggle('fancydropspecial')
}