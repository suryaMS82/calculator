var btns= document.querySelectorAll('.btn');
var screen= document.querySelector('.screen');
var btnequl= document.querySelector('.btn-equal');
var btnclear= document.querySelector('.btn-clear');

for(let i =0; i<btns.length ; i++){
btns[i].addEventListener('click', function(){
let number= btns[i].getAttribute('data-num');
screen.value += number 

    })
}


btnequl.addEventListener('click',function(){
    if(screen.value=== ""){
        alert('please, provide some input')
    }
    else{
        var valuee=eval(screen.value)
        screen.value= valuee
    }
})


btnclear.addEventListener('click' ,function(){
    screen.value="";
})