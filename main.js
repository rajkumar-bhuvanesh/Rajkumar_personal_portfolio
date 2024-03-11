let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.anger-tag');

window.onscroll = () =>{
        sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.anger-tag[href*=' + id + ']') .classList.add('active');
            });
        };
    });
};

/////////////////////////////////// ABOUT JS ////////////////////

    const nav = document.querySelector(".about-skill"),
         toggleBtn = nav.querySelector(".toggle-btn");
     
    toggleBtn.addEventListener("click" ,()=>{
        nav.classList.toggle("open");
    });

    function onDrag({movementY}) {
        const navStyle = window.getComputedStyle(nav),
              navTop = pareInt(navStyle.top),
              navHeight = parseInt(navStyle.height),
              windHeight = Window.innerHeight; 

    nav.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px";
    if(navTop > windHeight - navHeight){
        nav.style.top = `${windHeight - navHeight}px`;
    }
    }

    nav.addEventListener("mousedown", ()=>{
        nav.addEventListener("mouse", onDrag);
    });

    nav.addEventListener("mouseup", ()=>{
        nav.removeEventListener("mousemove", onDrag);
    });
    nav.addEventListener("mouseleave", ()=>{
        nav.removeEventListener("mousemove", onDrag);
    });



