function head(){
    var tl = gsap.timeline();

    tl.from('.headline h1',{
        y: '30',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    tl.from('.quote',{
        y: '-10',
        opacity: 0,
        duration: 1.8,
        ease: Expo.easeInOut
    })
}

head();