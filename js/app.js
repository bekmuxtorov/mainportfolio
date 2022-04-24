var typed = new Typed(".animation", {
    strings: [
        'Asadbek', 
        'Muxtorov',
        'Frontend Developer',
        'Freelancer'
    ],
    typeSpeed:75,
    backSpeed:75,
    loop:true,

  });

const navItemA = document.querySelector(".nav-item__a")


function activeClass(){
    if(navItemA.classList(active)){
        navItemA.classList.remove(active)
    }else{
        navItemA.classList.add(active)
    }
}