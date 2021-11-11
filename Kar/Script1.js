// JavaScript source code
let loup = [5];
loup[0] = "Lupa4.png";
loup[1] = "Lupa3.png";
loup[2] = "Lupa2.png";
loup[3] = "Lupa1.png";
loup[4] = "Lupaok.png";
let k = 0;
let loup_img = document.getElementById("loup");
loup_img.src = loup[k];


let loup1 = document.querySelector("#loup1");
let loup2 = document.querySelector("#loup2");
let loup3 = document.querySelector("#loup3");
let loup4 = document.querySelector("#loup4");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let text21 = document.getElementById("text2.1");
let text11 = document.getElementById("text11");
let text3 = document.getElementById("text3");
let text4 = document.getElementById("text4");
let increase_Matfey = document.getElementById("increase_Matfey");
let Petr = document.getElementById("Petr");
let increase_Ohrannik = document.getElementById("increase_Ohrannik");
let Dudes = document.getElementById("increase_Dudes")
let light = document.getElementById("Light")
document.querySelector("#loup1").addEventListener("click", () => {
    loup1.style = "opacity: 65%;width: 5%; top: 275px; left: 205px; position: absolute;";
    text1.style = 'opacity:70%; visibility:visible; -webkit-transition: all 0.4s ease-in-out; top: 100px; left: 235px;';
    loup2.style.display = 'none';
    loup3.style.display = 'none';
    loup4.style.display = 'none';
});
document.querySelector("#loup2").addEventListener("click", () => {
    loup1.style.display = 'none';
    loup3.style.display = 'none';
    loup4.style.display = 'none';
    Petr.style = "opacity:1; visibility:visible; -webkit-transition: all 0.7s ease-in-out;top: 600px; left:1120px;transform:scale(1.4) "
    increase_Matfey.style ="opacity:1; visibility:visible; -webkit-transition: all 0.7s ease-in-out;top: 250px; left:920px;transform:scale(1.4) "
    loup2.style = "opacity: 65%;width: 5%; top: 475px; left: 235px; position: absolute;";
    text21.style = 'opacity:70%; visibility:visible; -webkit-transition: all 0.4s ease-in-out;top: 380px; left: 600px; border-bottom-left-radius: 0px; width:200px ';
    text2.style = 'opacity:70%; visibility:visible; -webkit-transition: all 0.4s ease-in-out;top: 495px; left: 260px; border-top-left-radius: 0px; border-bottom-left-radius: 25px; ';
});
document.querySelector("#loup3").addEventListener("click", () => {
    loup1.style.display = 'none';
    loup2.style.display = 'none';
    loup4.style.display = 'none';
    increase_Ohrannik.style = "opacity:1; visibility:visible; -webkit-transition: all 0.7s ease-in-out;top: 270px; left:1220px;transform:scale(1.4) "
    Dudes.style = "opacity:1; visibility:visible; -webkit-transition: all 0.7s ease-in-out;top: 200px; left:860px;transform:scale(1.2) "
    loup3.style = "opacity: 65%;width: 5%; top: 455px; left: 150px; position: absolute;";
    text3.style = 'opacity:70%; visibility:visible; -webkit-transition: all 0.4s ease-in-out; top: 475px; left: 180px; border-top-left-radius: 0px; border-bottom-left-radius: 25px;';
    text4.style = 'opacity:70%; visibility:visible; -webkit-transition: all 0.4s ease-in-out;top: 640px; left: 450px; border-top-left-radius: 0px; border-bottom-left-radius: 25px;';

});
loup4.addEventListener("click", () => {
    loup1.style.display = 'none';
    loup2.style.display = 'none';
    loup3.style.display = 'none';
    text11.style = 'opacity:70%; visibility:visible; -webkit-transition: all 0.4s ease-in-out; top: 460px; left: 560px; border-top-left-radius: 0px; border-bottom-left-radius: 25px;';
    loup4.style = "opacity: 65%; top: 390px; left: 500px; position: absolute; width: 5% ";
    light.style ="opacity:1; visibility:visible; -webkit-transition: all 0.7s ease-in-out; top: 290px; left:400px; border:none"
});
document.getElementById("but1").addEventListener("click", () => {
    if (k <4)
        k++;
    loup_img.src = loup[k];

    loup1.style = "opacity: 50%;width: 5%; top: 275px; left: 205px; position: absolute;";
    text1.style = 'opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out; top: 100px; left: 235px;  ';
    loup2.style.display = 'block';
    loup3.style.display = 'block';
    loup4.style.display = 'block';
});
document.getElementById("but2").addEventListener("click", () => {
    if (k < 4)
        k++;
    loup_img.src = loup[k];

    loup1.style.display = 'block';
    loup3.style.display = 'block';
    loup4.style.display = 'block';
    loup2.style = "opacity: 50%;width: 5%;opacity: 50%; top: 475px; left: 235px; position: absolute;";
    increase_Matfey.style = "opacity:0; visibility:hidden;top: 400px; -webkit-transition: all 0.7s ease-in-out; transform:scale(0.5) "
    text2.style = 'opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out; top: 520px; left: 260px; border-top-left-radius: 0px; border-bottom-left-radius: 25px; ';
    Petr.style = "opacity:0; visibility:hidden;top: 400px; left:600px; -webkit-transition: all 0.7s ease-in-out; transform:scale(0.5) "
    text21.style = 'opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out; top: 520px; left: 260px; border-top-left-radius: 0px; border-bottom-left-radius: 25px; ';
});
document.getElementById("but3").addEventListener("click", () => {
    if (k < 4)
        k++;
    loup_img.src = loup[k];

    loup1.style.display = 'block';
    loup2.style.display = 'block';
    loup4.style.display = 'block';
    loup3.style = "opacity: 50%;width: 5%;  top: 455px; left: 150px; position: absolute;";
    text3.style = 'opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out; top: 500px; left: 180px;  transform: ';
    text4.style = 'opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out; top: 700px; left: 450px; border-top-left-radius: 0px; border-bottom-left-radius: 25px;  ';
    Dudes.style = "opacity:0; visibility:hidden;top: 400px; -webkit-transition: all 0.7s ease-in-out; transform:scale(0.5) "
    increase_Ohrannik.style = "opacity:0; visibility:hidden;top: 400px;left:500px; -webkit-transition: all 0.7s ease-in-out; transform:scale(0.5) "

});
document.getElementById("but4").addEventListener("click", () => {
    if (k < 4)
        k++;
    loup_img.src = loup[k];

    loup1.style.display = 'block';
    loup2.style.display = 'block';
    loup3.style.display = 'block';
    loup4.style = "opacity: 50%;width: 5%;  top: 390px; left: 500px; position: absolute;";
    text11.style = 'opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out;top: 400px; left: 700px; ';
    light.style ='opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out; top: 290px; left:400px; border:none'

});
document.getElementById("Expand").addEventListener("click", () => {
    if (loup1.style.display != 'none') {
        document.querySelector("#find").style.display = "none";
        document.getElementById("picture").style = '-webkit-transition: all 1s ease-in-out;position: absolute;left:200px;top:20px; width:70%;';
        document.getElementById("Expand").style = '-webkit-transition: all 1s ease-in-out;position: absolute;left:1260px;top:30px;';
        document.getElementById("Head").style = '-webkit-transition: all 1s ease-in-out;position: absolute;left:550px;top:0px; font-size:215%;  font-family: Calibri;'
        document.getElementById("hr").style = '-webkit-transition: all 1s ease-in-out;position: absolute;  top: 1300px;  border: 4px solid #00ff99; width: 100%;'
        document.getElementById("razbor").style = '-webkit-transition: all 1s ease-in-out;position: absolute; top:1400px;'
        document.querySelector("#bio").style = '-webkit-transition: all 1s ease-in-out; top:2500px; width:50%'
        document.getElementById("friend").style = '-webkit-transition: all 1s ease-in-out;position: absolute; top:500px;left: 70%;';
        document.getElementById("works").style = "transform:translateY(3400px) scale(0.75)";
        loup1.style.display = 'none';
        loup2.style.display = 'none';
        loup3.style.display = 'none';
        loup4.style.display = 'none';
    }
    else {
        document.querySelector("#find").style.display = "block";

        document.getElementById("picture").style = '-webkit-transition: all 1s ease-in-out;width:50%; position:absolute; left:20px;top:50px;';
        document.getElementById("Expand").style = '-webkit-transition: all 1s ease-in-out;  top:60px; left: 770px;';
        document.getElementById("Head").style = '-webkit-transition: all 1s ease-in-out; position: absolute; font-family: Calibri;left:15%; top:35px '
        document.getElementById("hr").style = '-webkit-transition: all 1s ease-in-out;position: absolute; top: 900px;  border: 4px solid #00ff99; width: 100%;'
        document.getElementById("razbor").style = '-webkit-transition: all 1s ease-in-out;position: absolute; top:1000px;'
        document.querySelector("#bio").style = '-webkit-transition: all 1s ease-in-out; top:2000px; width:50%'
        document.getElementById("friend").style = '-webkit-transition: all 1s ease-in-out;';
        document.getElementById("works").style = "";
        loup1.style.display = 'block';
        loup2.style.display = 'block';
        loup3.style.display = 'block';
        loup4.style.display = 'block';
    }
});
let Imag = [5];
let j=0;
Imag[0] = "1.jpg";
Imag[1] = "2.jpg";
Imag[2] = "3.jpg";
Imag[3] = "4.jpg";
Imag[4] = "5.jpg";
let img = document.getElementById("pictures");
img.addEventListener("click", () => {
    j++;
    
    img.src = Imag[j];
    if (j == 2 || j == 4)
        img.style = "left: 25%;"
    else img.style = "";
    if (j == 4)
        j = -1;
});
