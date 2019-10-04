// Get modal element
var modal = document.getElementById('simpleModal');
//Get open modal button
var modalBtn = document.getElementById('modalBtn');
//Get Close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

var bg = document.getElementsByClassName('header')[0];


//Listen for open click
modalBtn.addEventListener('click', openModal);

//Listen for close click
closeBtn.addEventListener('click', closeModal);

//Listen for outside click
window.addEventListener('click', outsideClick);

//Function to open modal
function openModal(){

        if (matchMedia("screen and (min-width: 320px) and (max-width: 767px)").matches) {
            modal.style.display = 'block';
            bg.style.display = 'none';
            $('html, body').css({'overflow': 'hidden'});
            $('#submit').addClass('disabled');
            $('#simpleModal').on('scroll touchmove mousewheel', function(event) {
                event.preventDefault();
                event.stopPropagation();
                return false;
            });
          } else {
            modal.style.display = 'block';
            bg.style.display = 'none';
            // $('html, body').css({'overflow': 'hidden'});
            $('#submit').addClass('disabled');
            $('#simpleModal').on('scroll touchmove mousewheel', function(event) {
                event.preventDefault();
                event.stopPropagation();
                return false;
            });
          }
}

//Function to close modal
function closeModal(){
        modal.style.display = 'none';
        bg.style.display = 'block';
        $('#name').val('')
        $('#email').val('')
        $('#message').val('')
        $('html, body').css({'overflow': 'visible'});
        $('#simpleModal').off('scroll touchmove mousewheel');
}

//Function to close modal if outside click
function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none';
        bg.style.display = 'block';
        $('#name').val('')
        $('#email').val('')
        $('#message').val('')
        $('html, body').css({'overflow': 'visible'});
        $('#simpleModal').off('scroll touchmove mousewheel');
    }
}
