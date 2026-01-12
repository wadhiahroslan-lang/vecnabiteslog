function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const timeDisplay = document.getElementById('clock-time');
    if(timeDisplay) {
        timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    }


    const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
    const dateDisplay = document.getElementById('clock-date');
    if(dateDisplay) {
        // 'en-MY' digunakan untuk format Malaysia
        dateDisplay.textContent = now.toLocaleDateString('en-MY', options);
    }
}

setInterval(updateClock, 1000);

updateClock();