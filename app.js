a=document.getElementById("i")
aj=document.getElementById("ij");ak=document.getElementById("ik");al=document.getElementById("il");
b=0
function show(){
    if(b==0){
    a.style.visibility="visible"
    aj.style.visibility="visible"
    ak.style.visibility="visible"
    al.style.visibility="visible"
    b=b+1}
    else{
        a.style.visibility="hidden" 
        aj.style.visibility="hidden"
        ak.style.visibility="hidden"
        al.style.visibility="hidden"
        b=0
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


   
    