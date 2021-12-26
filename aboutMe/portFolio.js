
// for display typing effect
let cv = document.getElementById('cv');
let title = document.getElementById('title');
let title1 = document.getElementById('title1');
const word = 'MUKUL'
title.innerText='<title>'
title1.innerText='</title>'
changeColorCV = () =>{
  
setTimeout ( () => 
cv.innerText= 'M_', 500,

)
setTimeout ( () => 
cv.innerText = 'Mu_', 1000
)
setTimeout ( () => 
cv.innerText = 'Muk_', 1500
)
setTimeout ( () => 
cv.innerText = 'Muku_', 2000
)
setTimeout ( () => 
cv.innerText = 'Mukul_', 2500
)

setTimeout ( () => 
cv.innerText = '_', 4000
)

setTimeout ( () => 
cv.innerText = 'd_', 4500
)
setTimeout ( () => 
cv.innerText = 'de_', 5000
)
setTimeout ( () => 
cv.innerText = 'dev_', 5500
)
setTimeout ( () => 
cv.innerText = 'deve_', 6000
)
setTimeout ( () => 
cv.innerText = 'devel_', 6500
)
setTimeout ( () => 
cv.innerText = 'develo_', 7000
)
setTimeout ( () => 
cv.innerText = 'develop_', 7500
)
setTimeout ( () => 
cv.innerText = 'develope_', 8000
)
setTimeout ( () => 
cv.innerText = 'developer_', 8500
)};


changeColorCV();
setInterval (changeColorCV, 9000);

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




