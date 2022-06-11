ScrollReveal().reveal('.Universal-Header', { delay: 200, distance : '-200px' });
ScrollReveal().reveal('.nav-items', {interval : 400})

ScrollReveal().reveal('.showcase-tittle', {delay : 500, origin:'top', distance : '10px'});

ScrollReveal().reveal('.item', {interval: 200});

ScrollReveal().reveal('.BT', {delay: 200});

ScrollReveal().reveal('.TrainerA', {delay: 400, origin: "left", distance: "10px"});
ScrollReveal().reveal('.TrainerB', {delay: 600});
ScrollReveal().reveal('.TrainerC', {delay: 800, origin: "right", distance: "10px"});

ScrollReveal().reveal('.Universal-Footer', {delay: 100, origin: "bottom"});


function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
