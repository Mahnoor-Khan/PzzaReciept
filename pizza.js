const menu=document.querySelector('#mobile-menu')
const menuLinks=document.querySelector('.navbar__menu')
const navLogo=document.querySelector('#nav__logo')

//Display Menu
const mobilemenu = () =>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}
menu.addEventListener('click',mobilemenu);

const modal=document.getElementById('myModal');
const btn =document.getElementsByClassName('OrderBtn');
// const btn1=document.getElementById('btn1');
// const btn2=document.getElementById('btn2');
// const btn3=document.getElementById('btn3');
const closeBtn=document.getElementsByClassName('close')[0];
const cheeseCheckBox = document.getElementsByClassName("ECheese");
// $(btn).click(function() {
//     alert(this.id); // or alert($(this).attr('id'));
// });

// function myFunction1(name){
//     modal.style.display="block";
//    let heading=`<div class="modal-content"><h1 style="margin-bottom:20px">${name}</h1>
//    <div style="display:flex;flex-direction:row;justify-content:space-between;width:50%;margin-bottom:20px"><lable><input type="radio" class"regular" />Regular</lable><lable><input type="radio" class"medium" />Medium</lable><lable><input type="radio" class"large" />Large</lable></div><div style="display:flex;flex-direction:column"><label class="container">Extra Cheese
//    <input type="checkbox"  class="ECheese">
//    <span class="checkmark"></span>
//  </label><label class="container">Extra Chicken
//  <input type="checkbox" checked="checked" class="EChicken">
//  <span class="checkmark"></span>
// </label>
// <label class="container">Extra Mayonese
//  <input type="checkbox" checked="checked" class="EMayo">
//  <span class="checkmark"></span>
// </label></div>
// <button class="OB">Order Now</button></div>`;
//     modal.innerHTML= heading;
    
//     alert(cheeseCheckBox.innerHTML);
//     const chickenCheckBox = document.getElementsByClassName("EChicken");
//     const MayoCheckBox = document.getElementsByClassName("EMayo");
//     const regular = document.getElementsByClassName("regular");
//     const medium = document.getElementsByClassName("medium");
//     const large = document.getElementsByClassName("large");
//     const OB = document.getElementsByClassName("OB");

//     let total='';
//     if(regular.checked==true ){
//         if(cheeseCheckBox.checked==true){
//              total=500;
//             total += 50;
//         }
//         if(chickenCheckBox.checked==true){
//             total=700;
//            total += 80;
//        }
       
//        if(MayoCheckBox.checked==true){
//         total=1000;
//        total += 60;
//    }
//    OB.onclick(alert(total));
//     }


// }


function myFunction2(name){
    console.log( name)

}
function myFunction3(name){
    console.log( name)

}
// btn1.onclick= function(){
//     alert('ok');
//     modal.style.display="block";
   
// // }
// btn2.onclick= function(){
//     modal.style.display="block";
    
// }
// btn3.onclick= function(){
//     modal.style.display="block";
    
// }

closeBtn.onclick=function(){
    modal.style.display="none";
}
window.onclick=function(event){
    if(event.target==modal){
        modal.style.display="none";
    }
}

// function showModalData(){
//     let heading='';
//     if()
// }



