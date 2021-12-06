const menu=document.querySelector('#mobile-menu')
const menuLinks=document.querySelector('.navbar__menu')
const navLogo=document.querySelector('#nav__logo')

//Display Menu
const mobilemenu = () => menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

menu.addEventListener('click',mobilemenu);
// Modal
const modal=document.getElementById('myModal');
const orderModal=document.getElementById('OrderModal');
const btn =document.getElementsByClassName('OrderBtn');
const closeBtn=document.getElementsByClassName('close')[0];
const modalHeading=document.getElementsByClassName('modal_heading')[0];
const Total=document.getElementsByClassName('total')[0];
const desHeading=document.getElementsByClassName('Heading')[0];
const desTotal=document.getElementsByClassName('totalAmount')[0];
const selectionData=document.getElementsByClassName('selection-data')[0];
const replaceData=document.getElementsByClassName('ReplaceData')[0];
const disCodeInput=document.getElementById('codeInput');
const disCodeSection=document.getElementsByClassName('discountCodeSection')[0];
const tenPercntDiscount=document.getElementById('tenPerDisBtn');
const twntyPercntDiscount=document.getElementById('twntyPerDisBtn');
const code=document.getElementsByClassName('code')[0];
const ExtraCheese=document.querySelector('.ECheese').checked;
const ExtraChicken=document.querySelector('.EChicken').checked;
const ExtraMayo=document.querySelector('.EMayo').checked;
const quantity=document.getElementsByClassName('quantity')[0];
const regularRadio=document.querySelector('.regular').checked;
const mediumRadio=document.querySelector('.medium').checked;
const largeRadio=document.querySelector('.large').checked;
const ReceiptProName=document.getElementById('recieptProductName');
const ReceiptQuantity=document.getElementById('recieptQuantity');
const ReceiptTotal=document.getElementById('recieptTotal');


let total=0;
let Quantity=1;

getNameOfPizza=(name)=>{modal.style.display="block";
    selectionData.style.display="block"
    replaceData.style.display="none"   
    // disCodeInput.style.display="none"
    modalHeading.innerHTML=`${name}`;
    const orderNowBtn = document.getElementById('orderNowBtn');
    Total.innerHTML=`${total}`;
    desTotal.innerHTML=Total.innerHTML;
    desHeading.innerHTML=modalHeading.innerHTML;
    
    
}

getvalue= (value)=>{
    total= value;
        Total.innerHTML=` ${total}`;
        desTotal.innerHTML=Total.innerHTML;
    }
getValueOfExtraToppings=(value)=>{
    total+= value
    Total.innerHTML=` ${total}`;
    desTotal.innerHTML=Total.innerHTML;
}  

ModalOrderNow =() => {
//     let checkboxes=document.getElementsByClassName('checkboxes')
// if(checkboxes[0].checked){
//     console.log('ok')
// }

// if(checkboxes[1].checked){
//     console.log('ok1')
// }
// if(checkboxes[2].checked){
//     console.log('ok2')
// }
    replaceData.style.display="block";
    selectionData.style.display="none"
    disCodeInput.style.display="none"
    
    ReceiptProName.innerHTML=modalHeading.innerHTML
    ReceiptQuantity.innerHTML=` ${quantity.value} X `;
    ReceiptTotal.innerHTML=Total.innerHTML
    }

 Edit = ()=>{selectionData.style.display="block"
 replaceData.style.display="none"}
    
hideModal = () => {modal.style.display="none";
selectionData.style.display="none"
replaceData.style.display="none"
disCodeInput.style.display="none"
}

window.onclick=function(event){
    if(event.target==modal){
        modal.style.display="none";
    }
}

EnteredCode=(value)=>{
    disCodeSection.style.display="block"
    selectionData.style.display="none"
    replaceData.style.display="none"
    disCodeInput.value=''
    disCodeInput.focus()
    code.innerHTML=value
}
getValueOfCode=(value)=>{
    code.innerHTML=value
}
closeTasks=()=>{replaceData.style.display="block"
disCodeSection.style.display="none"
selectionData.style.display="none"}
AfterCodeEnter=()=>{
    let userEnteredCode=disCodeInput.value

    if(userEnteredCode== '123A'){
        total-= (10 / 100)*total
        desTotal.innerHTML=total
        closeTasks()
        
    }
    else if(userEnteredCode=='123B'){
        total= total- ((20 / 100)*total)
        desTotal.innerHTML=total
        closeTasks()
    }
    else {
        closeTasks()
        return alert("Your Code doen`t Match with any discount code")
    }
}
