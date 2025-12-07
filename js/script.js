document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Year in Footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Smooth Scroll for Anchor Links (Polyfill-ish behavior for older browsers, 
    //    though 'scroll-behavior: smooth' in CSS handles most)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log("System Status: Online. Welcome to Saptarshi's Portfolio.");
});
