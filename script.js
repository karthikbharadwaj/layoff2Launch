// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate elements when they come into view
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all benefit and program cards
document.querySelectorAll('.benefit-card, .program-card').forEach(card => {
    observer.observe(card);
});

// Add animation class to cards
document.querySelectorAll('.benefit-card, .program-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Add animation class when element is in view
document.querySelectorAll('.animate').forEach(element => {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
}); 