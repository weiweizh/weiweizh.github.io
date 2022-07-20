const iconMenu = document.querySelector('#icon-menu');
const menu = document.querySelector('#menu');
const navBar = document.querySelector('#nav-bar');
const menuItems = document.querySelectorAll('#menu li');
const articleLink = document.querySelector('.articleLink')

/*function to call track() when the article link is clicked */
articleLink.addEventListener('click',()=>{
    analytics.track("article clicked",{
        "type":"article link",
        "url": this.href
    });  
});


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

        var screenWidth = window.innerWidth;
         
     if( screenWidth >= 768/*screensize is md and above:*/) {
        menuItems.forEach(i =>{
            i.classList.remove('active');
            i.classList.remove('activeM');
           }) 
           menuItem.classList.add('active');
     } else {
        menuItems.forEach(i =>{
            i.classList.remove('activeM');
            i.classList.remove('active');
          
           }) 
           menuItem.classList.add('activeM');
     }
     
         

     })
});

