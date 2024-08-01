//--------- JAVASCRIPT FOR THE HAMBURGUER MENU ---------//

//--- VARIABLES ---//
//CAPTURING THE HTML HAMBURGUER MENU BUTTON
const buttonHamburguerMenu = document.querySelector('.header-hamburguer-menu-button');

//CAPTURING THE HTML HAMBURGUER MENU OPTIONS
const hamburguerMenuOptions = document.querySelector('.hamburguer-menu-options-container');

//--- FUNCTIONS ---//
//MONITORING CLICKS ON THE HAMBURGUER MENU BUTTON
buttonHamburguerMenu.addEventListener('click', ()=> {
    //IF CLICKED, ADD THE FOLLOWING CLASSES TO THE HTML COMPONENTS.
    buttonHamburguerMenu.classList.toggle('header-hamburguer-menu-button-active');
    hamburguerMenuOptions.classList.toggle('hamburguer-menu-options-container-active');
});