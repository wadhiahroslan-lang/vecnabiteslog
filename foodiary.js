const categories = ['all', 'local', 'western', 'japanese', 'korean', 'indonesian', 'beverage', 'icecream', 'cake', 'sidedish', 'snacks'];
let currentCatIndex = 0;


function updateClock() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('liveClock').textContent = now.toLocaleDateString('en-GB', options);
}
setInterval(updateClock, 1000); 
updateClock();


function filterMenu(cat) {
    currentCatIndex = categories.indexOf(cat);
    document.getElementById('prevBtn').style.display = (cat === 'all') ? 'none' : 'flex';
    document.getElementById('nextBtn').style.display = (cat === 'all') ? 'none' : 'flex';

    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.toggle('active', btn.id === 'btn-'+cat));
    
    const cards = document.querySelectorAll('.diary-card');
    cards.forEach(card => {
        card.classList.add('is-hidden');
        card.style.display = 'none';
    });

    let visibleIndex = 0;
    cards.forEach((card) => {
        const isMain = card.classList.contains('main-folder');
        const isSub = card.classList.contains('sub-item');
        const cardCat = card.getAttribute('data-cat');
        let shouldShow = (cat === 'all') ? isMain : (isSub && cardCat === cat);

        if (shouldShow) {
            card.style.display = 'flex';
            setTimeout(() => { card.classList.remove('is-hidden'); }, visibleIndex * 50);
            visibleIndex++;
        }
    });
}

function nextCategory() {
    currentCatIndex = (currentCatIndex + 1) % categories.length;
    if (categories[currentCatIndex] === 'all') currentCatIndex = 1;
    filterMenu(categories[currentCatIndex]);
}

function prevCategory() {
    currentCatIndex = (currentCatIndex - 1 + categories.length) % categories.length;
    if (categories[currentCatIndex] === 'all') currentCatIndex = categories.length - 1;
    filterMenu(categories[currentCatIndex]);
}

function searchFood() {
    let input = document.getElementById('foodSearch').value.toLowerCase();
    document.querySelectorAll('.diary-card').forEach(card => {
        let title = card.querySelector('.card-title').innerText.toLowerCase();
        if (title.includes(input)) {
            card.style.display = 'flex';
            card.classList.remove('is-hidden');
        } else {
            card.style.display = 'none';
            card.classList.add('is-hidden');
        }
    });
}


filterMenu('all');