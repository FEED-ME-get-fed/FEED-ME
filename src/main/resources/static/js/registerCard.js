"use strict";

$(document).ready(function () {

    //notes to remember
    //it's ordered this way because if I reverse the order, it throws an error.
    function makeAPopUp() {
        //if 'button[data-target]' is removed, the register link in the div
        // stops working.
        $(document).on('click', 'button[data-target]', function(e) {
           // console.log('am i even working');
            e.preventDefault();
            document.getElementsByClassName('selector1')[0].remove();
        });

        $(document).on('click', 'div[data-target]', function (e) {
            // console.log('testing dragging');
            // console.log(e);
            $( function() {
                $( "#draggable" ).draggable();
            } );
        });



        //making a div here because it was difficult (is it doable?)
        // to make the div appear with setTimeout
        // if made in partials.html
        let div = document.createElement('div');
        div.innerHTML = `
        <div id="draggable" class="popup selector1">
        <div id="thePopupDiv" data-target="uno">
        <h5 class="card-title pb-2 text-center">Join the Feed.</h5>
                   <button type="button" class="btn-close x-icon closeme" id="closepls" data-target="dos"></button>
                  <p class="registerCardText">Get the most out of our website by creating an account with us.</p>
              <div class="mx-auto d-grid pt-2">
              <a href="/user/register" class="btn-grad text-decoration-none text-light">Register</a>
               </div>
        </div>
        </div>
                `;
        document.body.appendChild(div);
        // tbh - don't understand appendChild yet but if this is removed
        //the div doesn't show.
    //    https://flexiple.com/javascript/javascript-appendchild/
    }


    function afterXsecondsMakeAPopUp() {
        setTimeout(makeAPopUp, 1999);
        //could change the time, just fast for presentation.
        //https://www.w3schools.com/jsref/met_win_settimeout.asp
    }
    afterXsecondsMakeAPopUp();

});

