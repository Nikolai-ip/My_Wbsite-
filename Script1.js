window.onload = function () {
    changeIt();
};
function changeIt() {
    document.getElementById("Karavadjo").style = "background-image: url(Img/Karavadjo.jpg);  -webkit-transition: all 1s ease-in-out;-webkit-transform: translate(-250px,0);"
    document.getElementById("Rembrand").style = "background-image: url(Img/Rembrand.jpg); -webkit-transition: all 1s ease-in-out;  -webkit-transform: translate(-70px,0); "
    document.getElementById("David").style = "background-image: url(Img/David.jpg); -webkit-transition: all 1s ease-in-out;   -webkit-transform: translate(110px,0); "
    document.getElementById("Franciso").style = "background-image: url(Img/Francisco.jpg); -webkit-transition: all 1s ease-in-out;  -webkit-transform: translate(290px,0);  "

}
function animation(name) {
    if (name == "rem") {
        document.getElementById("home").style ="opacity: 1; visibility:visible; -webkit-transition: all 0.7s ease-in-out;-webkit-transform: "
        document.getElementById("frame_rem").style.display = 'block';
        document.getElementById("biography_rem").style = 'opacity: 1; visibility:visible; -webkit-transition: all 1s ease-in-out;-webkit-transform: translate(-250px,0 ); ';
        document.getElementById("Rembrand").style = "background-image: url(Img/Rembrandt1.jpg);  -webkit-transition: all 1s ease-in-out; -webkit-transform: translate(-350px,30px) scale(2.8); "
        document.getElementById("Karavadjo").style = " opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out; background-image: url(Img/Karavadjo1.jpg);"
        document.getElementById("David").style = "opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out;background-image: url(Img/David1.jpg);"
        document.getElementById("Franciso").style = "opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out;background-image: url(Img/Francisco1.jpg);"
    }
    if (name == "Dav") {
        document.getElementById("home").style = "opacity: 1; visibility:visible; -webkit-transition: all 0.7s ease-in-out;-webkit-transform: "
        document.getElementById("frame_dav").style.display = 'block';
        document.getElementById("biography_dav").style = 'opacity: 1; visibility:visible; -webkit-transition: all 1s ease-in-out;-webkit-transform: translate(-250px,0 ); ';

        document.getElementById("Rembrand").style = "opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out;background-image: url(Img/Rembrandt1.jpg);"
        document.getElementById("Karavadjo").style = " opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out; background-image: url(Img/Karavadjo1.jpg);"
        document.getElementById("David").style = "background-image: url(Img/David1.jpg);  -webkit-transition: all 1s ease-in-out; -webkit-transform: translate(-350px,30px) scale(2.8); "
        document.getElementById("Franciso").style = "opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out;background-image: url(Img/Francisco1.jpg);"
    }
    if (name == "Kar") {
        document.getElementById("home").style = "opacity: 1; visibility:visible; -webkit-transition: all 0.7s ease-in-out;-webkit-transform: "

        document.getElementById("frame_kar").style.display = 'block';
        document.getElementById("biography_kar").style = 'opacity: 1; visibility:visible; -webkit-transition: all 1s ease-in-out;-webkit-transform: translate(-250px,0 ); ';
        document.getElementById("Rembrand").style = "opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out;background-image: url(Img/Rembrandt1.jpg);"
        document.getElementById("Karavadjo").style = "background-image: url(Img/Karavadjo1.jpg);  -webkit-transition: all 1s ease-in-out; -webkit-transform: translate(-350px,30px) scale(2.8); "
        document.getElementById("David").style = "opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out;background-image: url(Img/David1.jpg);"
        document.getElementById("Franciso").style = "opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out;background-image: url(Img/Francisco1.jpg);"
    }
    if (name == "van") {
        document.getElementById("home").style = "opacity: 1; visibility:visible; -webkit-transition: all 0.7s ease-in-out;-webkit-transform: "
        document.getElementById("biography_van").style = 'opacity: 1; visibility:visible; -webkit-transition: all 1s ease-in-out;-webkit-transform: translate(-250px,0 ); ';
        document.getElementById("frame_van").style.display = 'block';

        document.getElementById("Rembrand").style = "opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out;background-image: url(Img/Rembrandt1.jpg);"
        document.getElementById("Karavadjo").style = " opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out; background-image: url(Img/Karavadjo1.jpg);"
        document.getElementById("David").style = "opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out;background-image: url(Img/David1.jpg);"
        document.getElementById("Franciso").style = "background-image: url(Img/Francisco1.jpg);  -webkit-transition: all 1s ease-in-out; -webkit-transform: translate(-350px,30px) scale(2.8); "
    }
    
}