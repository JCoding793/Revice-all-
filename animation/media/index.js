gsap.registerPlugin(ScrollTrigger);

gsap.to(".box" , {
    scrollTrigger: {
        trigger: '.box',  
        markers: true,
        start: 'top top',
      },
    x: 400,
    backgroundColor: "yellow",
    duration: 3,
})