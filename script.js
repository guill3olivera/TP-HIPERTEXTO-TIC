document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.backgroundColor = this.style.backgroundColor === 'rgb(229, 231, 235)' ? '#fff' : '#e5e7eb';
        });
    });
});