
// for display typing effect
let cv = document.getElementById('cv');
let title = document.getElementById('title');
let title1 = document.getElementById('title1');
const word = 'MUKUL'
title.innerText='<title>'
title1.innerText='</title>'
changeColorCV = () =>{
 
setTimeout ( () => 
cv.innerText= 'P', 500,

)
setTimeout ( () => 
cv.innerText = 'Pr', 1000
)
setTimeout ( () => 
cv.innerText = 'Pro', 1500
)
setTimeout ( () => 
cv.innerText = 'Proj', 2000
)
setTimeout ( () => 
cv.innerText = 'Proje', 2500
)

setTimeout ( () => 
cv.innerText = 'Projec', 3000
)

setTimeout ( () => 
cv.innerText = 'Project', 3500
)
setTimeout ( () => 
cv.innerText = 'Projects', 4000
)};


changeColorCV();
setInterval (changeColorCV, 5500);


// for hamburgur
document.querySelector('.hamburgur').addEventListener("click", ()=>{
    document.getElementById('box1').classList.toggle('box1change');
    document.getElementById('box2').classList.toggle('box2change');
    document.getElementById('box3').classList.toggle('box3change');
    document.getElementById('menuBar').classList.toggle('menuBarChange');
    if(document.getElementById('menuBar').classList.contains('menuBarChange')){
            document.getElementById('menu').style.display = 'none';
            document.getElementById('CVdownload').style.display = 'none';


    }
    else {
       setTimeout  (()=>{ document.getElementById('menu').style.display = 'flex'},400 );
       setTimeout  (()=>{ document.getElementById('CVdownload').style.display = 'flex'},450 )
    }
});




