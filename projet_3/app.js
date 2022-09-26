window.addEventListener('scroll', remplir)

function remplir() {
    
    var winScroll = document.documentElement.scrollTop
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight

    var scrolled = winScroll / height * 100
    document.getElementById('myBar').style.width = scrolled + '%'
    
}