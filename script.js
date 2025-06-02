document.addEventListener('DOMContentLoaded', () => {
    console.log('Codex IT Services website loaded');

    // Function to load services dynamically
    async function loadServices() {
        const servicesGrid = document.querySelector('#services .services-grid');
        if (!servicesGrid) {
            return;
        }
        try {
            const response = await fetch('data/services.json');
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const services = await response.json();
            servicesGrid.innerHTML = '';
            services.forEach(service => {
                const serviceDiv = document.createElement('div');
                serviceDiv.classList.add('service');
                serviceDiv.innerHTML = `
                    <i class="${service.icon} fa-2x service-icon"></i>
                    <h3>${service.name}</h3>
                    <p>${service.description}</p>
                `;
                servicesGrid.appendChild(serviceDiv);
            });
        } catch (error) {
            console.error('Error loading services:', error);
            servicesGrid.innerHTML = '<p class="error-message">Failed to load services.</p>';
        }
    }

    // Function to load products dynamically
    async function loadProducts() {
        const productsGrid = document.getElementById('products-grid');
        if (!productsGrid) return;
        try {
            const response = await fetch('data/products.json');
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const products = await response.json();
            productsGrid.innerHTML = '';
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product-item');
                productDiv.innerHTML = `
                    <img src="${product.imagePlaceholder}" alt="${product.name}" class="product-image">
                    <h3>${product.name}</h3>
                    <p class="product-category">${product.category}</p>
                    <p>${product.description}</p>
                `;
                productsGrid.appendChild(productDiv);
            });
        } catch (error) {
            console.error('Error loading products:', error);
            productsGrid.innerHTML = '<p class="error-message">Failed to load products.</p>';
        }
    }

    // Function to load team members dynamically
    async function loadTeam() {
        const teamGrid = document.getElementById('team-grid');
        if (!teamGrid) return;
        try {
            const response = await fetch('data/team.json');
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const teamMembers = await response.json();
            teamGrid.innerHTML = '';
            teamMembers.forEach(member => {
                const memberCard = document.createElement('div');
                memberCard.classList.add('team-member-card');
                memberCard.innerHTML = `
                    <img src="${member.imagePlaceholder}" alt="${member.name}" class="team-member-image">
                    <h3 class="team-member-name">${member.name}</h3>
                    <p class="team-member-role">${member.role}</p>
                    <p class="team-member-bio">${member.bio}</p>
                `;
                teamGrid.appendChild(memberCard);
            });
        } catch (error) {
            console.error('Error loading team members:', error);
            teamGrid.innerHTML = '<p class="error-message">Failed to load team members.</p>';
        }
    }

    // Function to load testimonials dynamically
    async function loadTestimonials() {
        const testimonialsGrid = document.getElementById('testimonials-grid');
        if (!testimonialsGrid) return;
        try {
            const response = await fetch('data/testimonials.json');
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const testimonials = await response.json();
            testimonialsGrid.innerHTML = '';
            testimonials.forEach(testimonial => {
                const testimonialItem = document.createElement('div');
                testimonialItem.classList.add('testimonial-item');
                testimonialItem.innerHTML = `
                    <p class="testimonial-feedback">"${testimonial.feedback}"</p>
                    <p class="testimonial-client">- ${testimonial.clientName}</p>
                    <p class="testimonial-project">Project: ${testimonial.projectType}</p>
                `;
                testimonialsGrid.appendChild(testimonialItem);
            });
        } catch (error) {
            console.error('Error loading testimonials:', error);
            testimonialsGrid.innerHTML = '<p class="error-message">Failed to load testimonials.</p>';
        }
    }

    // Smooth scrolling for internal navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            } else if (href.includes('index.html#')) {
                if (window.location.pathname.endsWith('/') || window.location.pathname.endsWith('index.html')) {
                    e.preventDefault();
                    const targetId = href.substring(href.indexOf('#') + 1);
                    const targetSection = document.getElementById(targetId);
                    if (targetSection) {
                        window.scrollTo({
                            top: targetSection.offsetTop - 70,
                            behavior: 'smooth'
                        });
                    }
                }
            }
        });
    });
    
    const ctaButton = document.querySelector('.hero .cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => {
            const href = ctaButton.getAttribute('href');
            if (href.startsWith('#')) { 
                e.preventDefault();
                const targetId = href.substring(1);
                const contactSection = document.getElementById(targetId);
                if (contactSection) {
                     window.scrollTo({
                        top: contactSection.offsetTop - 70, 
                        behavior: 'smooth'
                    });
                }
            }
        });
    }

    // Load dynamic content
    if (document.querySelector('#services .services-grid')) loadServices();
    if (document.getElementById('products-grid')) loadProducts();
    if (document.getElementById('team-grid')) loadTeam();
    if (document.getElementById('testimonials-grid')) loadTestimonials();
});
