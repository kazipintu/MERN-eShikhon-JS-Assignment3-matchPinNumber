//console.log('connected');

function generatePin() {
  const pin = Math.round((Math.random() * 10000));
  const pinText = pin + "";
  if (pinText.length == 4) {
    const displayPin = document.getElementById('dispaly-pin');
    displayPin.value = pin;
    //console.log(displayPin);
    return
  } else {
    return generatePin();
  }
}

document.getElementById('key-pad').addEventListener('click', function (clickTheButton) {
  const pickNumber = (clickTheButton).target.innerText;
  const insertNumber = document.getElementById('typed-numbers');
  //console.log(insertNumber);

  if (isNaN(pickNumber)) {
    if (pickNumber == "C") {
      insertNumber.value = '';
    }
  } else {
    const precedingNumber = insertNumber.value;
    const presentNumber = precedingNumber + pickNumber;
    insertNumber.value = presentNumber;
  }
})

function verifyPin() {
  pin = document.getElementById('dispaly-pin').value;
  const outputNumber = document.getElementById('typed-numbers').value;
  const notifySuccess = document.getElementById('notify-success');
  const notifyFailed = document.getElementById('notify-failed');

  if (pin == outputNumber) {
    notifySuccess.style.display = 'block';
    notifyFailed.style.display = 'none';

  } else {
    notifySuccess.style.display = 'none';
    notifyFailed.style.display = 'block';
  }
  document.getElementById('dispaly-pin').value = '';
  document.getElementById('typed-numbers').value = '';
}




// document.getElementById('key-pad').addEventListener('onclick', function () {
//   document.getElementById('typed-numbers');
// })




// function verifyPin() {

// }

