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
const closeBtn2=document.getElementsByClassName('close2')[0];
const modalHeading=document.getElementsByClassName('modal_heading')[0];
const Total=document.getElementsByClassName('total')[0];
const desHeading=document.getElementsByClassName('Heading')[0];
const desTotal=document.getElementsByClassName('totalAmount')[0];
const selectionData=document.getElementsByClassName('selection-data')[0];
const replaceData=document.getElementsByClassName('ReplaceData')[0];
const disCodeInput=document.getElementById('codeInput');
const disCodeSection=document.getElementsByClassName('discountCodeSection')[0];


let total='';
total=600;

sum=(total,a)=>{total+=a;
return alert(total)}

myFunction1=(name)=>{modal.style.display="block";
    modalHeading.innerHTML=`${name}`;
    const orderNowBtn = document.getElementById('orderNowBtn');
    Total.innerHTML=`Total:${total}`;
    desTotal.innerHTML=Total.innerHTML;
    desHeading.innerHTML=modalHeading.innerHTML;}

getvalue= (value)=>{total+= value;
        Total.innerHTML=`Total: ${total}`;
        desTotal.innerHTML=Total.innerHTML;}

 Order =() => {replaceData.style.display="block";
    selectionData.style.display="none"}

 Edit = ()=>{selectionData.style.display="block"
 replaceData.style.display="none"}
    
displayModal = () => modal.style.display="none"


window.onclick=function(event){
    if(event.target==modal){
        modal.style.display="none";
    }
}

EnterCode=()=>{
    disCodeSection.style.display="block"
    selectionData.style.display="none"
    replaceData.style.display="none"
    disCodeInput.value=''
    disCodeInput.focus()
}
closeTasks=()=>{replaceData.style.display="block"
disCodeSection.style.display="none"
selectionData.style.display="none"}
Enter=()=>{
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






