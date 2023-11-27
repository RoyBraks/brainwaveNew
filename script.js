document.addEventListener("DOMContentLoaded", function () {
    const lines = document.querySelectorAll('.animate-line');
    const textHeader = document.querySelectorAll('.hero-container-text--header');
    const ctaHero = document.querySelectorAll('.cta-container-explorebrainwave')

    const heroTimeline = gsap.timeline({ paused: true })
    
    lines.forEach((line) => {
        heroTimeline.to(line, {
            duration: 0.3,
            strokeDashoffset: 0,
        });
    });   

    heroTimeline.fromTo(
        textHeader,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.inOut' }
        );    
        
    heroTimeline.fromTo(
        ctaHero,
        {opacity: 0, y: 10 },
        {opacity: 1, y: 0, duration: 0.5, ease: 'power2.inOut' }
    )

    heroTimeline.play().delay(0.5)

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

    gsap.from(".main-text-container-column", {
        scrollTrigger: {
            trigger: ".main-text-container-column",
            toggleActions: "restart restart restart restart"
        },    
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.Out'
    })    


    let mouseDown = false;
    let startX, scrollLeft;
    const slider = document.querySelector('#draggable-container');

    const startDragging = (e) => {
      mouseDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    }

    const stopDragging = (e) => {
      mouseDown = false;
    }

    const move = (e) => {
      e.preventDefault();
      if(!mouseDown) { return; }
      const x = e.pageX - slider.offsetLeft;
      const scroll = x - startX;
      slider.scrollLeft = scrollLeft - scroll;
    }
    
    // Add the event listeners
    slider.addEventListener('mousemove', move, false);
    slider.addEventListener('mousedown', startDragging, false);
    slider.addEventListener('mouseup', stopDragging, false);
    slider.addEventListener('mouseleave', stopDragging, false);
});

