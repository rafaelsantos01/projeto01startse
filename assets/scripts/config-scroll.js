window.sReveal = ScrollReveal({reset:true})

sReveal.reveal(".slide-left", {
    duration: 1500,
    origin: "left",
    distance: "300px",
    easing: "ease-in-out"
});

sReveal.reveal(".slide-right", {
    duration: 1500,
    origin: "right",
    distance: "300px",
    easing: "ease-in-out"
});