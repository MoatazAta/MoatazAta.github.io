"use strict";

window.onload = function () {


    // Get the modal
    let modal = document.getElementsByClassName("modal");

    // Get the button that opens the modal
    let btn = document.getElementsByClassName("demo-btn");

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close");

    // When the user clicks the button, open the modal 
    btn[0].onclick = function () {
        modal[0].style.display = "block";
    }
    btn[1].onclick = function () {
        modal[1].style.display = "block";
    }
    btn[2].onclick = function () {
        modal[2].style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span[0].onclick = function () {
        modal[0].style.display = "none";
    }
    span[1].onclick = function () {
        modal[1].style.display = "none";
    }
    span[2].onclick = function () {
        modal[2].style.display = "none";
    }


    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal[0]) {
            modal[0].style.display = "none";
        }
        if (event.target == modal[1]) {
            modal[1].style.display = "none";
        }
        if (event.target == modal[2]) {
            modal[2].style.display = "none";
        }
    }

    // modal button (source code) --> navigate to his repository
    document.getElementById("btn-modal1").onclick = function () {
        window.open("https://github.com/MoatazAta/Fast-Cart");
    };

    document.getElementById("btn-modal2").onclick = function () {
        window.open("https://github.com/MoatazAta/HOT-Vacations");
    };

    document.getElementById("btn-modal3").onclick = function () {
        window.open("https://github.com/MoatazAta/microdroplets-identification-and-segmentation");
    };

    document.getElementById("btn-code1").onclick = function () {
        window.open("https://github.com/MoatazAta/My-Task-Board");
    };

    document.getElementById("btn-code2").onclick = function () {
        window.open("https://github.com/MoatazAta/Cryptonite");
    };





    let scrollToProjects = document.querySelector("#scroll-to-projects");

    scrollToProjects.addEventListener("click", () => {
        window.scrollTo({
            top: 2000,
            left: 1000,
            behavior: "smooth",
        });
    });

    // scroll to top functionality
    let scrollUp = document.querySelector("#scroll-up");

    scrollUp.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    });
}