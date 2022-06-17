const iconMenu = document.querySelector('#icon-menu');
const menu = document.querySelector('#menu');
const navBar = document.querySelector('#nav-bar');
const menuItems = document.querySelectorAll('#menu li a');
/*
const menuAbout = document.querySelector('#menu-about');
const menuService = document.querySelector('#menu-service');
const menuWork = document.querySelector('#menu-work');
const menuCollaborate = document.querySelector('#menu-collaborate');
const menuMore = document.querySelector('#menu-more');
*/
/*function to show and hide menu on click */
iconMenu.addEventListener('click', ()=>{
    if(menu.classList.contains('hidden')){
        navBar.classList.add('flex-col');
        menu.classList.remove('hidden');
        
    }else{
        menu.classList.add('hidden');
        navBar.classList.remove('flex-col');
    }
});


/*function to show current menu item in dark color and inactive in lighter gray */

menuItems.forEach(menuItem =>{
     menuItem.addEventListener('click', function handleClick(event){   
       menuItems.forEach(i =>{
        i.classList.remove('active');
      
       }) 
       menuItem.classList.add('active');
     

         

     })
});

