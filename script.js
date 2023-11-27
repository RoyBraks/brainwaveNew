document.addEventListener("DOMContentLoaded", function () {
    const lines = document.querySelectorAll('.text--svg--animated-line');
    const textHeader = document.querySelectorAll('.text--header');
    const ctaHero = document.querySelectorAll('.cta-container-explorebrainwave')

    const lineAnimation = gsap.timeline({ paused: true });
    const textAnimation = gsap.timeline({ paused: true });
    const ctaHeroAnimation = gsap.timeline({ paused: true })

    lines.forEach((line) => {
        lineAnimation.to(line, {
            duration: 0.2,
            strokeDashoffset: 0,
            ease: 'power2.inOut',
        });
    });

    textAnimation.fromTo(
        textHeader,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.inOut' }
    );

    gsap.from(".main-text-container-row-left", {
        scrollTrigger: {
            trigger: ".main-text-container-row-left",
            toggleActions: "restart restart restart restart"
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power2.Out'
    })

    gsap.from(".main-text-container-row-right", {
        scrollTrigger: {
            trigger: ".main-text-container-row-right",
            toggleActions: "restart restart restart restart"
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.Out'
    })

    ctaHeroAnimation.fromTo(
        ctaHero,
        {opacity: 0, y: 10 },
        {opacity: 1, y: 0, duration: 1, ease: 'power2.inOut' }
    )

    setTimeout(function () {
        lineAnimation.play();
    });
    setTimeout(function() {
        textAnimation.play();
    }, 100)
    setTimeout(function() {
        ctaHeroAnimation.play();
    }, 600)
});

