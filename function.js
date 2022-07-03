const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.95;
    
    item.forEach(element => {
        if (windowTop > element.offsetTop) {
            element.classList.add('animate')
        } else {
            element.classList.remove("animate");
        }
    })
}
animeScroll ()

window.addEventListener("scroll", ()=>{
    animeScroll();
});

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){

idx++;

    if(idx > img.length -1){
    idx = 0;
    }
    imgs.style.transform = `translateX(${-idex * 500})`;
}

setInterval(carrossel, 1800);
