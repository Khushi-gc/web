// Initialize Lenis and GSAP only AFTER content is loaded
async function loadComponents() {
    const components = [
        { id: 'nav-container', file: 'components/navbar.html' },
        { id: 'main-container', file: 'components/hero.html', append: true },
        { id: 'main-container', file: 'components/about.html', append: true },
        { id: 'main-container', file: 'components/family.html', append: true },
        { id: 'main-container', file: 'components/contact.html', append: true }
    ];

    for (const comp of components) {
        try {
            const response = await fetch(comp.file);
            const html = await response.text();

            const container = document.getElementById(comp.id);
            if (comp.append) {
                // For main container, we want to append sections
                // Create a temporary container to parse the string to nodes
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = html;

                // Append all child nodes from the temp container
                while (tempDiv.firstChild) {
                    container.appendChild(tempDiv.firstChild);
                }
            } else {
                container.innerHTML = html;
            }
        } catch (error) {
            console.error(`Error loading component ${comp.file}:`, error);
        }
    }

    // Once all HTML is injected, we initialize the logic
    initApp();
}

function initApp() {
    // --- Lenis Setup ---
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);


    // --- GSAP Setup ---
    gsap.registerPlugin(ScrollTrigger);

    // Hero Animations
    const tl = gsap.timeline();

    tl.from(".logo", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    })
        .from(".links a", {
            y: -50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out"
        }, "-=0.5")
        .from(".reveal-text", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out"
        }, "-=0.5")
        .from(".floating-orb", {
            scale: 0,
            opacity: 0,
            duration: 1.5,
            ease: "elastic.out(1, 0.5)",
            stagger: 0.2
        }, "-=1");

    // Scroll Animations for Cards
    gsap.from(".card", {
        scrollTrigger: {
            trigger: ".cards",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Parallax effect for orbs
    gsap.to(".floating-orb", {
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        },
        y: 200,
        ease: "none"
    });

    // Family Section Animations
    const familyTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".family-section",
            start: "top 75%",
            toggleActions: "play none none reverse"
        }
    });

    familyTl.from(".video-card", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    })
        .from(".roles-table", {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=0.8")
        .from(".table-row", {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out"
        }, "-=0.5");
}

// Start loading
loadComponents();
