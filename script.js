// Placeholder for JavaScript functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('Codex IT Services website loaded');

    // Example: Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Adjust for fixed header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Example: Simple alert for CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            alert('Thank you for your interest! We will be in touch soon.');
            // In a real scenario, this would likely open a contact form or lead to a contact page section
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                 window.scrollTo({
                    top: contactSection.offsetTop - 70, // Adjust for fixed header height
                    behavior: 'smooth'
                });
            }
        });
    }
});
