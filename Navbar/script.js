var tl = gsap.timeline()

tl.from("h2",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
})

tl.from("h4",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5,
    //  value of stagger: 0.1 would cause there to be 0.1 second between the start times of each tween
    stagger:0.3
})

tl.from("h1",{
    y:20,
    opacity:0,
    duration:0.5,
    scale:0.2
})