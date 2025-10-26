document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const nav = document.querySelector('nav');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const scrollThreshold = 100;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            nav.classList.add('scrolled');
            if (scrollIndicator) {
                scrollIndicator.style.opacity = '0';
                setTimeout(() => {
                    scrollIndicator.style.display = 'none';
                }, 300);
            }
        } else {
            nav.classList.remove('scrolled');
            if (scrollIndicator) {
                scrollIndicator.style.display = 'block';
                setTimeout(() => {
                    scrollIndicator.style.opacity = '0.8';
                }, 10);
            }
        }
    });

    // Smooth Scrolling with offset for fixed header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const navHeight = nav.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Enhanced Fade-in animation with stagger effect
    const fadeSections = document.querySelectorAll('.fade-in-section, .timeline-item, .education-card');
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add stagger delay based on index
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100); // 100ms delay between each item
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });
    fadeSections.forEach(section => fadeObserver.observe(section));

    // Typing effect for hero section
    const heroText = document.querySelector('.hero-content p');
    if (heroText) {
        const text = heroText.textContent;
        heroText.textContent = '';
        let index = 0;

        function typeText() {
            if (index < text.length) {
                heroText.textContent += text.charAt(index);
                index++;
                setTimeout(typeText, 30);
            }
        }

        // Start typing effect when hero section is visible
        const heroObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setTimeout(typeText, 500); // Delay start of typing
                heroObserver.unobserve(heroText);
            }
        });
        heroObserver.observe(heroText);
    }

    // Skills hover effect with animation
    const skills = document.querySelectorAll('.skills-list li');
    skills.forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            skills.forEach(s => {
                s.style.transform = 'scale(0.95)';
                s.style.opacity = '0.6';
            });
            skill.style.transform = 'scale(1.05)';
            skill.style.opacity = '1';
        });
        skill.addEventListener('mouseleave', () => {
            skills.forEach(s => {
                s.style.transform = 'scale(1)';
                s.style.opacity = '1';
            });
        });
    });

    // Timeline items hover effect
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(10px)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
        });
    });

    // Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (hero) {
            hero.style.backgroundPosition = `center ${scrolled * 0.5}px`;
        }
    });

    // Handle resume button animation
    const resumeButton = document.querySelector('.resume-button');
    if (resumeButton) {
        resumeButton.addEventListener('mouseenter', () => {
            resumeButton.style.transform = 'translateY(-5px)';
        });
        resumeButton.addEventListener('mouseleave', () => {
            resumeButton.style.transform = 'translateY(0)';
        });
    }
});