let loup = [6];
loup[0] = "Lupa5b.png";
loup[1] = "Lupa4b.png";
loup[2] = "Lupa3b.png";
loup[3] = "Lupa2b.png";
loup[4] = "Lupa1b.png";
loup[5] = "Lupaok.png";
let k = 0;
let loup_img = document.getElementById("loup");
loup_img.src = loup[k];


let loup1 = document.querySelector("#loup1");
let loup2 = document.querySelector("#loup2");
let loup3 = document.querySelector("#loup3");
let loup4 = document.querySelector("#loup4");
let loup5 = document.querySelector("#loup5");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let text21 = document.getElementById("text2.1");
let text11 = document.getElementById("text11");
let text3 = document.getElementById("text3");
let text4 = document.getElementById("text4");
let jesus = document.getElementById("Jesus");
let plashenica = document.getElementById("plashenica");
let bes = document.getElementById("bes");
let maria = document.getElementById("MAria")
let peoples = document.getElementById("peoples")
loup1.addEventListener("click", () => {
    loup1.style = "opacity: 65% ;width: 5%; top: 335px; left: 375px; position: absolute;";

    jesus.style = "opacity:1; visibility:visible; -webkit-transition: all 0.4s ease-in-out;top:350px; left:900px; width:30%"
    document.getElementById("loups").style.display = 'none';
    text1.style = 'opacity:70%; visibility:visible; -webkit-transition: all 0.4s ease-in-out;  top:185px; left: 400px;';
});
loup2.addEventListener("click", () => {
    loup2.style = "opacity: 65% ;width: 5%; top: 825px; left: 200px;  position: absolute;";

    plashenica.style = "opacity:1; visibility:visible; -webkit-transition: all 0.4s ease-in-out;top:350px; left:900px; width:30%"
    document.getElementById("loups").style.display = 'none';
    text3.style = 'opacity:70%; visibility:visible; -webkit-transition: all 0.4s ease-in-out;top: 735px; left: 220px;';
});
loup3.addEventListener("click", () => {
    loup3.style = "opacity: 65% ;width: 5%; top: 825px; left: 600px;  position: absolute;";

    bes.style = "border:none;opacity:1; visibility:visible; -webkit-transition: all 0.4s ease-in-out;top:350px; left:900px; width:30%"
    document.getElementById("loups").style.display = 'none';
    text4.style = 'opacity:70%; visibility:visible; -webkit-transition: all 0.4s ease-in-out;top: 840px; left: 620px; border-top-left-radius: 0px; border-bottom-left-radius: 25px;';
});
loup4.addEventListener("click", () => {
    loup4.style = "opacity: 65% ;width: 5%;  top: 515px; left: 640px;   position: absolute;";

    maria.style = "border:none;opacity:1; visibility:visible; -webkit-transition: all 0.4s ease-in-out;top:350px; left:900px; width:40%"
    document.getElementById("loups").style.display = 'none';
    text11.style = 'opacity:70%; visibility:visible; -webkit-transition: all 0.4s ease-in-out;top: 325px; left: 660px;';
});
loup5.addEventListener("click", () => {
    loup5.style = "opacity: 65% ;width: 5%; top: 590px; left: 400px;   position: absolute;";

    document.getElementById("triangle").style = 'opacity:1;visibility:visible; -webkit-transition: all 0.4s; ';
    document.getElementById("loups").style.display = 'none';
    text2.style = 'opacity:70%; visibility:visible; -webkit-transition: all 0.4s ease-in-out;top: 605px; left: 420px; border-top-left-radius: 0px; border-bottom-left-radius: 25px;';
});
document.getElementById("but5").addEventListener("click", () => {
    if (k < 5)
        k++;
    loup_img.src = loup[k];

    maria.style = "border:none;opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out; "

    text11.style = 'opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out; top: 225px; left: 660px; ';
    document.getElementById("loups").style.display = 'block';
});
document.getElementById("but1").addEventListener("click", () => {
    if (k < 5)
        k++;
    loup_img.src = loup[k];
    jesus.style = "opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out;"
    text1.style = 'opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out; top:85px; left: 400px;  ';
    document.getElementById("loups").style.display = 'block';
});
document.getElementById("but2").addEventListener("click", () => {
    if (k < 5)
        k++;
    loup_img.src = loup[k];
    text2.style = 'opacity:0; visibility:hidden; -webkit-transition: all 0.4s; top: 505px; left: 420px; border-top-left-radius: 0px; border-bottom-left-radius: 25px;  ';
    document.getElementById("loups").style.display = 'block';
    document.getElementById("triangle").style = 'opacity:0%; visibility:hidden;-webkit-transition: all 0.4s; ';
});
document.getElementById("but3").addEventListener("click", () => {
    if (k < 5)
        k++;
    loup_img.src = loup[k];
    plashenica.style = "opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out; top:700px"
    text3.style = 'opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out; top:635px; left: 220px;  ';
    document.getElementById("loups").style.display = 'block';
});
document.getElementById("but4").addEventListener("click", () => {
    if (k < 5)
        k++;
    loup_img.src = loup[k];
    bes.style = "border:none;opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out; top:700px; left:400px"
    document.getElementById("loups").style.display = 'block ';
    text4.style = 'opacity:0%; visibility:hidden; -webkit-transition: all 0.4s ease-in-out; top:735px; left: 620px; border-top-left-radius: 0px; border-bottom-left-radius: 25px;  ';
});
document.getElementById("Expand").addEventListener("click", () => {

    if (document.getElementById("loups").style.display != 'none') {
        document.querySelector("#find").style.display = "none";
        document.getElementById("picture").style = "-webkit-transition: all 1s ease-in-out;position: absolute;left:200px;top:20px; width:60%;"
        document.getElementById("loups").style.display = 'none';
        document.getElementById("Expand").style = '-webkit-transition: all 1s ease-in-out;  top:30px; left: 1105px;';
        document.getElementById("Head").style = '-webkit-transition: all 1s ease-in-out; position: absolute; font-family: Calibri;left:36%; top:10px '
        document.getElementById("under_picture").style = "-webkit-transition: all 1s ease-in-out; transform:translateY(600px)"
    }
    else {
        document.querySelector("#find").style.display = "block";
        document.getElementById("under_picture").style = "-webkit-transition: all 1s ease-in-out; transform: translateY(150px)";
        document.getElementById("Expand").style = '-webkit-transition: all 1s ease-in-out; ';
        document.getElementById("picture").style = '-webkit-transition: all 1s ease-in-out;width:40%; position:absolute; left:100px;top:50px;';
        document.getElementById("Head").style = '-webkit-transition: all 1s ease-in-out; position: absolute; font-family: Calibri;left:20%; top:35px';
        document.getElementById("loups").style.display = 'block';
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
    if (j == 4)
        j = -1;
});