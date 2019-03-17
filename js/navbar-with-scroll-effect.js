// When the user scrolls down 10px from the top of the document, set 
window.onscroll = function() {scrollFunction()};
var navbars = document.getElementsByClassName("navbar-with-scroll-effect");
function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        for (var i = navbars.length - 1; i >= 0; i--) {
            navbars[i].style.backgroundColor = "#FFDD00";
            navbarLinks = navbars[i].getElementsByTagName("A");
            for (var i = navbarLinks.length - 1; i >= 0; i--){
                navbarLinks[i].style.color = "#000000";
            }
        }

    } else {
        for (var i = navbars.length - 1; i >= 0; i--) {
            navbars[i].style.backgroundColor = "#FFDD0000";
            navbarLinks = navbars[i].getElementsByTagName("A");
            for (var i = navbarLinks.length - 1; i >= 0; i--){
                navbarLinks[i].style.color = "#FFFFFF";
            }
        }
    }
}