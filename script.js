window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(window.scrollY > 50){
    header.style.background = "#1e293b";
}
else{
    header.style.background = "#0f172a";
}

});