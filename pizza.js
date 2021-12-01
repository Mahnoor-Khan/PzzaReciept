const menu=document.querySelector('#mobile-menu')
const menuLinks=document.querySelector('.navbar__menu')
const navLogo=document.querySelector('#nav__logo')

//Display Menu
const mobilemenu = () =>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}
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

let total='';
total=600;

function sum(total,a){
total+=a;
return alert(total) 

}

function myFunction1(name){
    
    modal.style.display="block";
    modalHeading.innerHTML=`${name}`;
    const chickenCheckBox = document.getElementById('Chicken');
    const MayoCheckBox = document.getElementById('Mayo');
    const CheeseCheckBox = document.getElementById('Cheese');
    const OB = document.getElementById('ONbtn');
    Total.innerHTML=`Total:${total}`;
    desTotal.innerHTML=Total.innerHTML;
    desHeading.innerHTML=modalHeading.innerHTML;
    
    
}


function getvalue(value){
        total+= value;
        Total.innerHTML=`Total: ${total}`;
        desTotal.innerHTML=Total.innerHTML;
        
}

function Order(){
    // modal.style.display="none"; 
    orderModal.style.display="block";
    
}
function Edit(){
    orderModal.style.display="none";
}

closeBtn.onclick=function(){
    modal.style.display="none";
}
closeBtn2.onclick=function(){
    orderModal.style.display="none";

}
window.onclick=function(event){
    if(event.target==modal){
        modal.style.display="none";
    }
}
window.onclick=function(event){
    if(event.target==modal){
        orderModal.style.display="none";
    }
}





