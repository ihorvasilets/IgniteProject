//-----------------------------------------------------------------------------
//----- RESPONSIVE-MENU --------------------------------------------------------

window.onload = function () {

    var menuButton = document.querySelectorAll('.header-bg button')[0];
    var respMenu = document.querySelectorAll('.header-bg ul')[0];
    var menuCounter = 0;

    window.addEventListener('resize', function () {
        if(document.documentElement.clientWidth >= 768){
            menuCounter = 1;
            respMenu.style.display = 'block';
        }
        else{
            menuCounter = 0;
            respMenu.style.display = 'none';
        }
    });

    menuButton.addEventListener('click', function(){
        if(!menuCounter){
            respMenu.style.display = 'block';
            menuCounter = !menuCounter;
        }
        else{
            respMenu.style.display = 'none';
            menuCounter = !menuCounter;
        }
    })

}