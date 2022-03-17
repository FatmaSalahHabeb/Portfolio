let up = document.querySelector(".up");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 350) {
        if (!up.classList.contains("upEntarance")) {
            up.classList.remove("upExit");
            up.classList.add("upEntarance");
            up.style.display = "block"
        }

    } else {
        if (up.classList.contains("upEntarance")) {
            up.classList.remove("upEntarance");
            up.classList.add("upExit");
            setTimeout(function() {
                up.style.display = "none";
            }, 250);

        }

    }
}
up.addEventListener("click", bakTotop);

function bakTotop() {
    window.scrollTo(0, 0);
}








let section = document.querySelector(".skill ");
let spans = document.querySelectorAll(".progress span ")

window.onscroll = function() {
    if (window.scrollY >= section.offsetTop - 100) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
};


// const nav = document.querySelector('.nav_bar');
// const services = document.querySelector('.services');
const nav = document.querySelector('nav');
const services = document.querySelector('.services');
const Options = {
    rootMargin: '-50%'

}


const observ = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            nav.classList.remove('changeColor')
        } else {
            nav.classList.add('changeColor')
        }
    })
}, Options);
observ.observe(services)



const filterButton = document.querySelector("#filter-btn").children;
const item = document.querySelector(".portfolio-gallary").children;
for (let i = 0; i < filterButton.length; i++) {
    filterButton[i].addEventListener("click", function() {
        for (let j = 0; j < filterButton.length; j++) {
            filterButton[j].classList.remove("active")
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target")
        for (let k = 0; k < item.length; k++) {
            item[k].style.display = "none";
            if (target == item[k].getAttribute("data-id")) {
                item[k].style.display = "block";
            }
            if (target == "all") {
                item[k].style.display = "block";
            }
        }
    })
}





var element = document.getElementById("button");
var myicon = document.getElementById("download ");

function myFunction() {

    myicon.style.display = "none ";
    document.getElementById("spinner ").style.display = 'block';
    document.getElementById("download_text ").innerHTML = " ";
    element.classList.remove("button ");

    element.classList.add("button1 ");


    window.setTimeout(function() {
        element.classList.remove("button ");
        element.classList.add("button1 ");
        let dowenload_href = "F:/ENG Fatma/Future/Web_tasks/Senior Front-The Top/Task_11/Task_11/Docs/Fatma_cv";
        window.location.href = dowenload_href;
    }, 400);

    window.setTimeout(function() {

        element.classList.remove("button1 ");
        document.getElementById("spinner ").style.display = 'none';
        document.getElementById("download_text ").innerHTML = "DOWENLOADED ";
        element.classList.add("success ");
    }, 600);


    window.setTimeout(function() {
        element.classList.remove("success ");
        document.getElementById("spinner ").style.display = "none ";
        document.getElementById("download_text ").innerHTML = "DOWENLOAD RESUME ";
        element.classList.add("button ");
        myicon.style.display = 'block';
    }, 700);

}
AOS.init();