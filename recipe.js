
let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");
const scrollToTopBtn = document.getElementById("scrollToTopBtn"); // Tambah ini

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.style.top = "-120px"; 
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;



    if (scrollTop > 400) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
}, false);



function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}



function searchRecipe() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.getElementsByClassName('recipe-card');

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector('h2').innerText.toLowerCase();
        if (title.includes(input)) {
            cards[i].style.display = ""; 
        } else {
            cards[i].style.display = "none"; 
        }
    }
}
