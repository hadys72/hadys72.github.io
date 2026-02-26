// =============================
// Onglets
// =============================
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');

        document.querySelectorAll('.tab-content').forEach(content => {
            content.style.display = 'none';
        });

        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });

        document.getElementById(targetId).style.display = 'block';
        button.classList.add('active');
    });
});


// =============================
// Couleurs skills (SANS noir)
// =============================
document.addEventListener('DOMContentLoaded', () => {

    const skillCards = document.querySelectorAll('.skills-grid > div');

    const classes = [
        'skill-card',
        'skill-card2',
        'skill-card4',
        'skill-card6',
        'skill-card7'
    ];

    skillCards.forEach(card => {
        const randomClass = classes[Math.floor(Math.random() * classes.length)];
        card.className = randomClass;
    });

});