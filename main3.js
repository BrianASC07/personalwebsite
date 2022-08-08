let slide1 = document.getElementById("s1");
let slide2 = document.getElementById("s2");
let slide3 = document.getElementById("s3");

let btnNext = document.getElementById('next');
let btnPrev = document.getElementById('prev');

let i = 1;

btnNext.onclick = function slideshow() {
    if (i == 1) {
        slide1.style.display = 'flex';
        slide2.style.display = 'none';
        slide3.style.display = 'none';
        i++
    }

    else if (i == 2) {
        slide1.style.display = 'none';
        slide2.style.display = 'flex';
        slide3.style.display = 'none';
        i++
    }

    else if (i == 3) {
        slide1.style.display = 'none';
        slide2.style.display = 'none';
        slide3.style.display = 'flex';
        i = 1
    }
}


btnPrev.onclick = function slideshow() {
    if (i == 1) {
        slide1.style.display = 'flex';
        slide2.style.display = 'none';
        slide3.style.display = 'none';
        i = 3
    }

    else if (i == 2) {
        slide1.style.display = 'none';
        slide2.style.display = 'flex';
        slide3.style.display = 'none';
        i--
    }

    else if (i == 3) {
        slide1.style.display = 'none';
        slide2.style.display = 'none';
        slide3.style.display = 'flex';
        i--
    }
}

/*
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}

for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "block";
  slides[i].style.display = "block";
}

*/