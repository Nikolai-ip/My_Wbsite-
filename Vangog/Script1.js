let loup = [3];
loup[0] = "Lupa3b.png";
loup[1] = "Lupa2b.png";
loup[2] = "Lupa1b.png";
loup[3] = "Lupaok.png";

let k = 0;
let loup_img = document.getElementById("loup");
loup_img.src = loup[k];

let loup1 = document.querySelector("#loup1");
let loup2 = document.getElementById("loup2");
let loup3 = document.querySelector("#loup3");
let loup4 = document.querySelector("#loup4");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");
let but1 = document.getElementById("but1");
loup1.addEventListener("click", () => {
    loup1.style = "opacity: 80% ;width: 5%; top: 185px; left: 420px; position: absolute;";
    document.getElementById("kiparis").style = "opacity:1; visibility:visible; -webkit-transition: all 0.4s ease-in-out;top: 110px; left: 305px; width: 26.2%;"

    document.getElementById("loups").style.display = 'none';
    text1.style = 'opacity:70%; visibility:visible; -webkit-transition: all 0.4s ease-in-out; top: 110px; left: 540px;';
});
loup2.addEventListener("click", () => {
    loup2.style = "opacity: 80% ;width: 5%; top: 540px; left: 755px; position: absolute;";
    document.getElementById("line").style = "opacity:1; visibility:visible; -webkit-transition: all 0.4s ease-in-out; top: 538px; left: 215px; width: 74%;"

    document.getElementById("loups").style.display = 'none';
    text2.style = 'opacity:70%; visibility:visible; -webkit-transition: all 0.4s ease-in-out;top: 200px; left: 785px;';
});
loup3.addEventListener("click", () => {
    loup3.style = "opacity: 80%; top: 255px; left: 755px;position: absolute; width: 5%";
    document.getElementById("zav").style = "opacity:1; visibility:visible; -webkit-transition: all 0.4s ease-in-out; width: 55%; top: 108px; left: 255px; "

    document.getElementById("loups").style.display = 'none';
    text3.style = 'opacity:70%; visibility:visible; -webkit-transition: all 0.4s ease-in-out; top: 315px; left: 795px; border-top-left-radius: 0px; border-bottom-left-radius: 25px;';
});


but1.addEventListener("click", () => {
    if (k < 3)
        k++;
    loup_img.src = loup[k];
    document.getElementById("kiparis").style = "opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out; top: 110px; left: 305px; width: 26.2%;";
    text1.style = 'opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out; top: 120px; left: 540px; ';
    document.getElementById("loups").style.display = 'block';
});
document.getElementById("but2").addEventListener("click", () => {
    if (k < 3)
        k++;
    loup_img.src = loup[k];
    document.getElementById("line").style = "opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out; top: 538px; left: 215px; width: 74%;"

    text2.style = 'opacity:0; visibility:hidden; -webkit-transition: all 0.4s; top: 210px; left: 785px;';
    document.getElementById("loups").style.display = 'block';
});
document.getElementById("but3").addEventListener("click", () => {
    if (k < 3)
        k++;
    loup_img.src = loup[k];
    document.getElementById("zav").style = "opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out; width: 55%; top: 108px; left: 255px; "

    text3.style = 'opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out;  top: 325px; left: 795px; border-top-left-radius: 0px; border-bottom-left-radius: 25px; ';
    document.getElementById("loups").style.display = 'block';
});
let Imag = [3];
let j = 0;
Imag[0] = "9.jpg";
Imag[1] = "10.jpg";
Imag[2] = "11.jpg";

let img = document.getElementById("gaga");
img.addEventListener("click", () => {
    j++;
    if (j == 3) {
        j = 0;
    }
    img.src = Imag[j];
  

});