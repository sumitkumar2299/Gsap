// gsap.to -> from initial to final 
// gsap.from -> from final to initial 


gsap.to("#box",{
    x:1000,
    duration:2,
    delay:1
})

gsap.from("#box1",{
    x:500,
    y:500,
    duration:2,
    delay:1
})

gsap.to("#box2",{
    x:1200,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"50%",
   

})



gsap.from("h1",{
    opacity:0,
    duration:2,
    delay:1,
    y:20,
    stagger:1
    // stagger ko -1 karne pe ulta chalega 

})


gsap.to("#box3",{
    x:1200,
    duration:2,
    delay:1,
    rotate:360,
    repeat: -1,
    yoyo:true,
})


gsap.to("#box4",{
    x:1200,
    rotate:360,
    duration:1.5,
    delay:1
})

gsap.to("#box5",{
    x:1200,
    backgroundColor:"yellow",
    duration:1.5,
    delay:2.5,
})



gsap.to("#box6",{
    x:1200,
    scale:0.5,
    backgroundColor:"yellow",
    duration:1.5,
    delay:4,
})


var tl = gsap.timeline()
tl.to("#box4",{
     x:1200,
    rotate:360,
    duration:1.5,
    delay:1
})

tl.to("#box5",{
     x:1200,
    scale:0.5,
    backgroundColor:"yellow",
    duration:1.5,
    delay:4,

})