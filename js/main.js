// change imge 
let bored = document.getElementById("imge")
let smaller = document.querySelectorAll("#img")

    smaller.forEach((li) => {
        li.addEventListener("click",e =>{
            bored.src = e.target.src
        })
    })




// scroll top 
const scrollTop = document.querySelector(".scroll-top")
window.addEventListener("scroll", () => {
    if(window.scrollY >= 900){
        scrollTop.style.display = "block"
    }else if(window.scrollY >= 500 ){
        scrollTop.style.display = "none"
    }
} )

scrollTop.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  


// navbar hide and active

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-100px";
    } else {
        navbar.style.top = "0"; 
    }
    lastScrollTop = scrollTop;
});


