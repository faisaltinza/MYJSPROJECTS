const submit = document.getElementById('calculate');
const totalPrice = document.querySelector('#totalAmount');
const billEr = document.querySelector('.billEr')
const tipEr = document.querySelector('.tipEr')
const billInpt = document.getElementById('bill')
const tipInpt = document.getElementById('tip')
submit.addEventListener('click', e => {
    e.preventDefault();
    const inputBill = parseFloat(document.querySelector('#bill').value);
    const inputTip = parseFloat(document.querySelector('#tip').value);
    let hasError = false;
    if(inputBill === "" || inputBill <= 0 || isNaN(inputBill)) {
       console.log('Invalid bill amount');
       billEr.innerHTML = "Invalid bill amount";
       hasError = true
    }
    if(inputTip === "" || inputTip <= 0 || isNaN(inputTip)) {
        console.log('Invalid tip amount');
        tipEr.innerHTML = "Invalid tip amount";
        hasError = true;
    }
    if (hasError){return
    }
    else {
     calculated(inputBill,inputTip)
    }
})

function calculated(inputBill,inputTip) {
    const total = inputBill * (inputTip/100);

    totalPrice.innerText = `${(inputBill+total).toFixed(2)} $`
}

billInpt.addEventListener("click",(e)=>{e.preventDefault();billEr.innerHTML=""})
tipInpt.addEventListener("click",(e)=>{e.preventDefault();tipEr.innerHTML=""})