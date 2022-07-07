(function(){

const tracos = document.querySelector(".menumobile");

function selectComponents(){        
    const nav = document.querySelector(".nav");                 
    openMenu(nav)
}
function openMenu(nav){
    nav.classList.toggle("openMenu");
}

tracos.addEventListener("click", selectComponents);

})();
