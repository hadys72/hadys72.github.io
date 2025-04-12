// Gestion des onglets (Présentation, Soft skills, Passions)
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');

        // Cacher tous les contenus
        document.querySelectorAll('.tab-content').forEach(content => {
            content.style.display = 'none';
        });

        // Retirer la classe 'active' de tous les boutons
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });

        // Afficher le contenu ciblé et activer le bouton
        document.getElementById(targetId).style.display = 'block';
        button.classList.add('active');
    });
});

// Attribution aléatoire des classes aux cartes de compétences
document.addEventListener('DOMContentLoaded', () => {
    const skillCards = document.querySelectorAll('.skills-grid > div');
    const classes = ['skill-card', 'skill-card2', 'skill-card3', 'skill-card4', 'skill-card5', 'skill-card6', 'skill-card7'];

    skillCards.forEach(card => {
        const randomClass = classes[Math.floor(Math.random() * classes.length)];
        card.className = randomClass; // Remplace la classe existante par une classe aléatoire
    });
});
