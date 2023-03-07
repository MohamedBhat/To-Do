let button = document.querySelectorAll('button')
let button2 = document.all[17]
let h1 = document.querySelector('h1')
let body = document.querySelector('body')
let modal = document.getElementById('modal')
let closepop = document.getElementById('closepop') 



// Dark and Light mood .
button[0].onclick = function(){
    if(body.classList.contains('body-effect')){

    body.classList.remove('body-effect');
    body.classList.add('DL-mood');
    button[0].classList.toggle('D-btn');
    
    button[0].innerText = "Light Mood";

    }else{
        body.classList.add('body-effect');
        body.classList.remove('DL-mood');
        button[0].innerText= 'Dark Mood';
        button[0].classList.remove('D-btn')
    }
}

//button to show modal form 
button2.onclick = function(){

    if(modal.classList.contains('modal-display')){

        modal.classList.remove('modal-display');
    }else{
        modal.classList.add('modal-display');

    }
}

//button to close modal form 

closepop.onclick = function (){

    modal.classList.toggle('modal-display')
}


















