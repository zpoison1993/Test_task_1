// "use strict";
const number1 = document.querySelector('#num1');
const number2 = document.querySelector('#num2');
const error = document.querySelectorAll('.error');
const buttonSum = document.querySelector('.btn-calculate');

filterInput(number1);
filterInput(number2);


buttonSum.addEventListener('click', e => {
    if((number1.value =="") || (number2.value == "")) {
        e.preventDefault;
     [].forEach.call(error, function(error) {
            error.style.opacity='1';; // HEAD, текст, BODY
        });   
    } else{
       [].forEach.call(error, function(error) {
        error.style.opacity='0';; // HEAD, текст, BODY
      });
    alert(`Результат вычисления: ${sum(number1.value,number2.value)}`)
    number1.value="";
    number2.value="";  
    }
   
});


function sum(a,b) {
    let result = parseFloat(a) + parseFloat(b);
    return +result.toFixed(10);
}

function filterInput(number) {
    var dotCounter = 0;
    number.nextElementSibling.style.opacity='0';
    number.addEventListener('keydown',event => {
        let isDigit = false;
        let isMinus = false;
        let isDot = false;
        let dotFull = false;
        if(number.value.length!=0 && String(number.value).indexOf('.')!=-1) {
            dotFull=true;
        }
        
        let isControl = false;
        if(number.value.length==0 || String(number.value).indexOf('.')==-1) {
            dotCounter=0;
        }

        if(event.key>=0 || event.key<=9 ) {
            isDigit = true;
        }
        if(event.key =="-" && number.value.length==0) {
            isMinus = true;
        }
        if(event.key =="." && dotFull==false) {
          isDot = true;
          dotCounter++;
          console.log(dotCounter)
        }
        if(event.key=="ArrowLeft" || event.key == "ArrowRight" || event.key == "Backspace") {
            isControl = true;
        }

        if(!isDigit && !isMinus && !isControl && (!isDot || dotCounter>1) ){
            event.preventDefault();
            number.nextElementSibling.style.opacity='1';
            console.log('Введите цифры, точку или знак минус!')
        }


    })
};




