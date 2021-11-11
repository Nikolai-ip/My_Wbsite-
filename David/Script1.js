let loup = [5];
loup[0] = "Lupa4b.png";
loup[1] = "Lupa3b.png";
loup[2] = "Lupa2b.png";
loup[3] = "Lupa1b.png";
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
let text3 = document.getElementById("text3");
let text4 = document.getElementById("text4");
let text41 = document.getElementById("text4.1");
let marat = document.getElementById("Marat");
let pero = document.getElementById("pero");
let rana = document.getElementById("rana");
let knife = document.getElementById("knife");
let pismo1 = document.getElementById("pismo_1");
let pismo2 = document.getElementById("pismo_2");
loup1.addEventListener("click", () => {
    loup1.style = "opacity: 65% ;width: 5%;  top: 1185px; left: 215px; position: absolute;";
    marat.style = "opacity:1; visibility:visible; -webkit-transition: all 0.4s ease-in-out;left:900px;top:950px; width:30%"

    document.getElementById("loups").style.display = 'none';
    text1.style = 'opacity:60%; visibility:visible; -webkit-transition: all 0.4s ease-in-out; top: 940px; left: 240px;';
});
loup2.addEventListener("click", () => {
    loup2.style = "opacity: 65% ;width: 5%;  top: 1250px; left: 265px; position: absolute;";
    rana.style = "opacity:1; visibility:visible; -webkit-transition: all 0.4s ease-in-out;left:900px;top:950px; width:30%"

    document.getElementById("loups").style.display = 'none';
    text2.style = 'opacity:70%; visibility:visible; -webkit-transition: all 0.4s ease-in-out;top: 1040px; left: 290px;';
});
loup3.addEventListener("click", () => {
    loup3.style = "opacity: 65% ;width: 5%;  top: 1525px; left: 435px; position: absolute;";
    pero.style = "opacity:1; visibility:visible; -webkit-transition: all 0.4s ease-in-out;left:900px;top:1120px; width:25%"
    knife.style = "opacity:1; visibility:visible; -webkit-transition: all 0.4s ease-in-out;position: absolute;left:900px;top:950px; width:25%; border:5px solid black; border-radius:10px; "

    document.getElementById("loups").style.display = 'none';
    text3.style = 'opacity:70%; visibility:visible; -webkit-transition: all 0.4s ease-in-out;top: 1125px; left: 165px; border-bottom-left-radius: 25px; border-top-right-radius: 0px;';
});
loup4.addEventListener("click", () => {
    loup4.style = "opacity: 65% ;width: 5%; top: 1255px; left: 590px; position: absolute;";
    pismo1.style = "opacity:1; visibility:visible; -webkit-transition: all 0.4s ease-in-out;position: absolute;left:760px;top:1180px; width:23%;  "
    pismo2.style = "opacity:1; visibility:visible; -webkit-transition: all 0.4s ease-in-out;position: absolute;left:1150px;top:1180px; width:23%; "
    document.getElementById("find").style = "-webkit-transition: all 0.4s ease-in-out; top:720px;  left:850px; width:600px";
    document.getElementById("loups").style.display = 'none';
    text4.style = 'opacity:70%; visibility:visible; -webkit-transition: all 0.4s ease-in-out;border-bottom-left-radius:25px; top: 825px; left: 820px;';
    text41.style = 'opacity:70%; visibility:visible; -webkit-transition: all 0.4s ease-in-out;border-bottom-left-radius: 25px; top: 1550px; left: 820px;';

});

document.getElementById("but1").addEventListener("click", () => {
    if (k < 4)
        k++;
    loup_img.src = loup[k];
    marat.style = "opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out;"

    text1.style = 'opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out; top: 1040px; left: 240px; ';
    document.getElementById("loups").style.display = 'block';
});
document.getElementById("but2").addEventListener("click", () => {
    if (k < 4)
        k++;
    loup_img.src = loup[k];
    rana.style = "opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out;"

    text2.style = 'opacity:0; visibility:hidden; -webkit-transition: all 0.4s;top: 940px; left: 290px; border-top-left-radius: 0px; border-bottom-left-radius: 25px;  ';
    document.getElementById("loups").style.display = 'block';
});
document.getElementById("but3").addEventListener("click", () => {
    if (k < 4)
        k++;
    loup_img.src = loup[k];
    knife.style = "opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out; position: absolute;width: 250px; top: 1350px; left: 100px;"
    pero.style = "opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out; top: 1350px; left: 100px;"


    text3.style = 'opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out; top: 1125px; left: 265px; ';
    document.getElementById("loups").style.display = 'block';
});
document.getElementById("but4").addEventListener("click", () => {
    if (k < 4)
        k++;
    loup_img.src = loup[k];
    pismo1.style = "opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out; left: 500px; top: 1150px"
    pismo2.style = "opacity:0; visibility:hidden; -webkit-transition: all 0.4s ease-in-out;left: 500px; top: 1250px"
    document.getElementById("find").style = "-webkit-transition: all 0.4s ease-in-out; top:750px;  left:850px; width:600px";
    document.getElementById("loups").style.display = 'block ';
    text4.style = 'opacity:0%; visibility:hidden; -webkit-transition: all 0.4s ease-in-out;';
    text41.style = 'opacity:0%; visibility:hidden; -webkit-transition: all 0.4s ease-in-out;';

});
document.getElementById("Expand").addEventListener("click", () => {

    if (document.getElementById("loups").style.display != 'none') {
        document.querySelector("#find").style.display = "none";

        document.getElementById("picture").style = "-webkit-transition: all 1s ease-in-out;position: absolute; left:100px;top:750px; width:60%;"
        document.getElementById("loups").style.display = 'none';
        document.getElementById("Expand").style = '-webkit-transition: all 1s ease-in-out;   top:760px;    left: 1000px;';
        document.getElementById("Head").style = '-webkit-transition: all 1s ease-in-out; position: absolute; font-family: Calibri;left:30%; top:735px '
        document.getElementById("under_picture").style = "-webkit-transition: all 1s ease-in-out; transform:translateY(1200px)"
    }
    else {
        document.querySelector("#find").style.display = "block";

        document.getElementById("under_picture").style = "-webkit-transition: all 1s ease-in-out; transform: translateY(850px)";
        document.getElementById("Expand").style = '-webkit-transition: all 1s ease-in-out; ';
        document.getElementById("picture").style = '-webkit-transition: all 1s ease-in-out;width:40%; position:absolute;  left:100px;top:750px;';
        document.getElementById("Head").style = '-webkit-transition: all 1s ease-in-out; position: absolute; font-family: Calibri;left:20%; top:735px';
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
    if (j == 4) {
        img.style ="left:22%"
        j = -1;
    }
    else img.style = "left:30%"
        
});