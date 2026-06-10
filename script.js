// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all flower and fact cards
document.querySelectorAll('.flower-card, .fact-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// CTA Button functionality
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        // Open external link to a conservation organization
        window.open('https://www.worldwildlife.org/', '_blank');
    });
}

// Add a fun fact display on page load
window.addEventListener('load', function() {
    const funFacts = [
        "Flowers have been around for over 140 million years!",
        "Some flowers can change color throughout the day.",
        "The oldest flower fossil is over 100 million years old.",
        "Roses can remember if they've been cut and adjust accordingly.",
        "Sunflowers actually turn to face the sun throughout the day.",
        "Some flowers are pollinated exclusively by specific species.",
        "The smell of flowers can improve memory and mood.",
        "Flowers communicate with insects through ultraviolet patterns!"
    ];
    
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    console.log('🌸 Fun Fact: ' + randomFact);
});
