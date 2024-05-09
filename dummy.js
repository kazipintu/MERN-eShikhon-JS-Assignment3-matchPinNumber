function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin()
    }

}

function generatePin() {
    const pin = getPin();
    document.getElementById('dispaly-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbes');

    if (isNaN(number)) {
        if (number == "C") {
            calcInput.value = '';
        }

    } else {
        const calcPriviousNumber = calcInput.value;
        const newNumbers = calcPriviousNumber + number
        calcInput.value = newNumbers;

    }

})


function verifyPin() {
    const pin = document.getElementById('dispaly-pin').value;
    const typedNumbers = document.getElementById('typed-numbes').value;
    const notifySuccess = document.getElementById('notify-success');
    const notifyfiled = document.getElementById('notify-faild');

    if (pin == typedNumbers) {
        notifySuccess.style.display = 'block'
        notifyfiled.style.display = 'none'
    } else {
        notifyfiled.style.display = 'block'
        notifySuccess.style.display = 'none'
    }
    // value clear optional
    document.getElementById('dispaly-pin').value = '';
}

// *** presentation

//set onClick on button with function / functionName() + call the same name function on app.js +
// call another function above the generatePin() function + console pin + get pin value and make it string ( pin + '' ) +
/*
validation for 4 latter like as
if (pinString == 4) {
    return pin;
} else {
    getPin()
} */
// call the getPin() function, in generatePin() function + set in a vaiable
//set the pin = di diye jekhane set korbo setake dhore ante hbe + value hisebe set kore dite hbe

// calculater input ke dhorte hbe by event delegate + evet inputParameters + e.target.value and set it in a variable + documetn.getELemenID (input filld) + event value in inputFiled
//collect the input value =( priviosuNumber = calcInput.value ) +  make nweNumbe = proviosNumber + number  + set at last calcInput.value = newNumber

//error solve        without number , nothing show on display
/*
if(isNan){
    if(number =="C")
    //clear
}
else{}
*/

//function with onClick on verifyPin
// documetn.getElementByID('') = two input id call + set in a varibal
// check condition by if, else  + show console + show error or success message = duita message box  kei id diye ante hbe + css er vitore display none + set style by js +
//error solve = duitai show kore,, error or success
//dui box er document.getElementById ke if else er upre niye jaite hbe + if er vitore success hole, error ke display none and else er vitore eror hole success er display none kore idte hbe 



