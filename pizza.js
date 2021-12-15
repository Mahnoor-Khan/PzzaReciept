const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#nav__logo')

//Display Menu
const mobilemenu = () => menu.classList.toggle('is-active');
menuLinks.classList.toggle('active');

menu.addEventListener('click', mobilemenu);
// Modal
const modal = document.getElementById('myModal');
const orderModal = document.getElementById('OrderModal');
const btn = document.getElementsByClassName('OrderBtn');
const closeBtn = document.getElementsByClassName('close')[0];
const modalHeading = document.getElementsByClassName('modal_heading')[0];
const Total = document.getElementsByClassName('total')[0];
const desHeading = document.getElementsByClassName('Heading')[0];
const desTotal = document.getElementsByClassName('totalAmount')[0];
const selectionData = document.getElementsByClassName('selection-data')[0];
const replaceData = document.getElementsByClassName('ReplaceData')[0];
const disCodeInput = document.getElementById('codeInput');
const disCodeSection = document.getElementsByClassName('discountCodeSection')[0];
const tenPercntDiscount = document.getElementById('tenPerDisBtn');
const twntyPercntDiscount = document.getElementById('twntyPerDisBtn');
const code = document.getElementsByClassName('code')[0];
const ExtraCheese = document.querySelector('.ECheese').checked;
const ExtraChicken = document.querySelector('.EChicken').checked;
const ExtraMayo = document.querySelector('.EMayo').checked;
const quantity = document.getElementsByClassName('quantity')[0];
const regularRadio = document.querySelector('.regular');
const mediumRadio = document.querySelector('.medium');
const largeRadio = document.querySelector('.large');
const ReceiptProName = document.getElementById('recieptProductName');
const ReceiptQuantity = document.getElementById('recieptQuantity');
const ReceiptTotal = document.getElementById('recieptTotal');
const recieptECheese = document.getElementById('recieptECheese');
const recieptEChicken = document.getElementById('recieptEChicken');
const recieptEMayo = document.getElementById('recieptEMayo');
const last = document.getElementById('last');
const recOrderNowBtn = document.getElementById('recOrderNowBtn');
const checkboxes = document.getElementsByClassName('checkboxes');
const checkmark = document.getElementsByClassName('checkmark');
const container = document.getElementsByClassName('container');
const Cheese = document.getElementById('Cheese');
const Chicken = document.getElementById('Chicken');
const Mayo = document.getElementById('Mayo');
const orderBtn = document.getElementById('orderNowBtn');
// orderBtn.disabled=true
let total = 0;

getNameOfPizza = (name) => {
    orderBtn.style.background=   'rgba(0, 128, 0, 0.356)'
    orderBtn.style.cursor=   'not-allowed'
    modal.style.display = 'block';
    selectionData.style.display = 'block'
    disCodeSection.style.display = 'none'
    disCodeInput.style.display='none'
    modalHeading.innerHTML = `${name}`;
    last.style.display = 'none'
    const orderNowBtn = document.getElementById('orderNowBtn');
    checkboxes[0].checked=false
    checkboxes[1].checked=false
    checkboxes[2].checked=false
    regularRadio.checked=false
    mediumRadio.checked=false
    largeRadio.checked=false
    quantity.innerHTML=1
}
var pizzaSizeVal = 0
var extrasVal = 0
var quantityVal = 1
// var getEValue;
getvalue = (value) => {
    orderBtn.disabled=false
    orderBtn.style.cursor = "pointer"
    orderBtn.style.backgroundColor = "green"
    if (pizzaSizeVal > 0) {
        if(quantityVal > 1)
    {  total =   total - pizzaSizeVal * quantityVal }
      else{
      total =  total - pizzaSizeVal
      }
      pizzaSizeVal = 0
    } 
    if(pizzaSizeVal == 0) {
        pizzaSizeVal = value
        if(quantityVal > 1)
        total = total + pizzaSizeVal*quantityVal 
        else{
            total = total + pizzaSizeVal
        }
    }
    Total.innerHTML = total
}
count = 0
decrement = () => {
    if(quantity.innerHTML>1){
    quantityVal = quantityVal -1
    
    document.getElementById('qualtityId').innerText = quantityVal
    total = total - pizzaSizeVal
     Total.innerHTML = ` ${total}`
    }
}

increment = () => {
    
    quantityVal = quantityVal +1
    
    document.getElementById('qualtityId').innerText = quantityVal
    total = total + pizzaSizeVal
     Total.innerHTML = ` ${total}`
}

var check1 = false
var chek1=0
function extraCheese(value1) {
    this.check1 = !this.check1
    if (this.check1) {
        extrasVal =  value1
        total = total+extrasVal
        Total.innerHTML = ` ${total}`;
        chek1=value1
    }
    else {
        extrasVal = extrasVal-value1
        total = total - value1
        Total.innerHTML = ` ${total}`;
        chek1=0
    }

}
var check2 = false
var chek2=0
function extraChicken(value) {
    this.check2 = !this.check2
    if (this.check2) {
        extrasVal =  value
        total = total+extrasVal
        Total.innerHTML = ` ${total}`;
        chek2=value
    }
    else {
        extrasVal = extrasVal-value
        total = total - value
        Total.innerHTML = ` ${total}`;
        chek2=0
    }
}
var check3 = false
var chek3=0
function extraMayo(value) {
    this.check3 = !this.check3
    if (this.check3) {
        extrasVal =  value
        total = total+extrasVal
        Total.innerHTML = ` ${total}`;
        chek3=value
    }
    else {
        extrasVal = extrasVal-value
        total = total - value
        Total.innerHTML = ` ${total}`;
        chek3=0
    }

}

function ModalOrderNow() {
    if(regularRadio.checked==true || mediumRadio.checked==true || largeRadio.checked==true ){
        document.getElementById('recOrderNowBtn').style.background='green'
        orderBtn.disabled=false
        orderBtn.style.cursor = "pointer"
        orderBtn.style.backgroundColor = "green"
    replaceData.style.display = "block";
    selectionData.style.display = "none"
    disCodeInput.style.display = "none"
    ReceiptProName.innerHTML = modalHeading.innerHTML
    ReceiptQuantity.innerHTML = ` ${quantity.innerHTML} X `;
    if (check1 == true) {
        recieptECheese.innerHTML = 50 
    }
    else {
        recieptECheese.innerHTML = 0
    }
    if (check2 == true) {
        recieptEChicken.innerHTML = 100
    }
    else {
        recieptEChicken.innerHTML = 0
    }
    if (check3 == true) {
        recieptEMayo.innerHTML = 80 
    }
    else {
        recieptEMayo.innerHTML = 0
    }
    ReceiptTotal.innerHTML = Total.innerHTML
    
}
else{
    orderBtn.disabled=true  
    
  
}

}

Edit = () => {
    document.getElementById('orderNowBtn').style.background='green'
    selectionData.style.display = "block"
    replaceData.style.display = "none"
    total= (pizzaSizeVal*quantityVal) + chek1 + chek2 + chek3
    Total.innerHTML=total

}

function ReceiptOrderPlaced() {
    last.style.display = "block"
    selectionData.style.display = "none"
    replaceData.style.display = "none"
    disCodeSection.style.display = "none"
}

hideModal = () => {
    modal.style.display = "none";
    selectionData.style.display = "none"
    replaceData.style.display = "none"
    disCodeInput.style.display = "none"
    quantityVal= 1;
    extrasVal=0
    pizzaSizeVal = 0
    total =0
    Total.innerHTML = ` ${total}`;
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        selectionData.style.display = "none"
        replaceData.style.display = "none"
        disCodeInput.style.display = "none"
        quantityVal= 1;
    extrasVal=0
    pizzaSizeVal = 0
    total =0
    Total.innerHTML = ` ${total}`;
    }
}

EnteredCode = (value) => {
    disCodeSection.style.display = "block"
    disCodeInput.style.display="block"
    selectionData.style.display = "none"
    replaceData.style.display = "none"
    disCodeInput.value = ''
    disCodeInput.focus()
    code.innerHTML = value
}
getValueOfCode = (value) => {
    code.innerHTML = value
}
closeTasks = () => {
    replaceData.style.display = "block"
    disCodeSection.style.display = "none"
    selectionData.style.display = "none"
}
AfterCodeEnter = () => {
    ModalOrderNow();
    let userEnteredCode = disCodeInput.value

    if (userEnteredCode == '123A') {
        total -= (10 / 100) * total
        ReceiptTotal.innerHTML = total
        closeTasks()

    }
    else if (userEnteredCode == '123B') {
        total = total - ((20 / 100) * total)
        ReceiptTotal.innerHTML = total
        closeTasks()
    }
    else {
        closeTasks()
        return alert("Your Code doen`t Match with any discount code")
    }
}