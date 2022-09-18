const rateBoxPopup = document.querySelector('.rate-box'); 
const thankYouBoxPopup = document.querySelector('.thank-you-box');
const spanRateNumber = document.querySelector('#numberRateSelected');
const submitButton = document.querySelector('.submit-button');

let rateNumberSelect = 0;

function rateIconSelectedColor(rateNumber) {
    rateNumberSelect = rateNumber;
    for (let i=1; i<6; i++) {
        document.getElementById('rateIcon'+i).className = "";
    }
    document.getElementById('rateIcon'+rateNumber).className = "selected";
}

function showThankYouBox() {
    if (rateNumberSelect != 0) {
        spanRateNumber.innerText = rateNumberSelect;
        rateBoxPopup.setAttribute('style','display:none');
        thankYouBoxPopup.setAttribute('style','display:block');
    }
}