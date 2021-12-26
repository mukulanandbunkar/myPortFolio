
// for display typing effect
let cv = document.getElementById('cv');
let title = document.getElementById('title');
let title1 = document.getElementById('title1');
const word = 'MUKUL'
title.innerText = '<title>'
title1.innerText = '</title>'
changeColorCV = () => {

    setTimeout(() =>
        cv.innerText = 'C', 500,

    )
    setTimeout(() =>
        cv.innerText = 'Co', 1000
    )
    setTimeout(() =>
        cv.innerText = 'Con', 1500
    )
    setTimeout(() =>
        cv.innerText = 'Cont', 2000
    )
    setTimeout(() =>
        cv.innerText = 'Conta', 2500
    )

    setTimeout(() =>
        cv.innerText = 'Contac', 3000
    )

    setTimeout(() =>
        cv.innerText = 'Contact', 3500
    )
    setTimeout(() =>
        cv.innerText = 'Contact ', 4000
    )
    setTimeout(() =>
        cv.innerText = 'Contact M', 4500
    )
    setTimeout(() =>
        cv.innerText = 'Contact Me', 5000
    )
};


changeColorCV();
setInterval(changeColorCV, 6000);


// for hamburgur
document.querySelector('.hamburgur').addEventListener("click", () => {
    document.getElementById('box1').classList.toggle('box1change');
    document.getElementById('box2').classList.toggle('box2change');
    document.getElementById('box3').classList.toggle('box3change');
    document.getElementById('menuBar').classList.toggle('menuBarChange');
    if (document.getElementById('menuBar').classList.contains('menuBarChange')) {
        document.getElementById('menu').style.display = 'none';
        document.getElementById('CVdownload').style.display = 'none';


    }
    else {
        setTimeout(() => { document.getElementById('menu').style.display = 'flex' }, 400);
        setTimeout(() => { document.getElementById('CVdownload').style.display = 'flex' }, 450)
    }
});


//send mail









document.querySelector('.contactForm').addEventListener('submit', mail);

function mail(e) {
    e.preventDefault();

    let Name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    document.querySelector('.contactForm').reset();
    sendEmail(Name, email, message)
}
function sendEmail(Name, email, message) {

    Email.send({
        Host: "smtp.gmail.com",
        Username: "mukulanandbunkarsender@gmail.com",
        Password: "wpjwwovwoeqdthyb",
        To: 'mukulanandbunkarreceiver@gmail.com',
        From: "mukulanandbunkarsender@gmail.com",
        Subject: `${Name} IS SENT YOU A MESSAGE`,
        Body: `Name: ${Name}<br/>Email: ${email}<br/>${message}`
    }).then(
        message => alert("Message send sucessfully!!!!!")
    );
}




