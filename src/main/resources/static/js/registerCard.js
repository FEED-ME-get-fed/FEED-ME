"use strict";

$(document).ready(function () {

    function makeAPopUp() {

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
    }

    function afterXsecondsMakeAPopUp() {
        setTimeout(makeAPopUp, 1999);
    }

    afterXsecondsMakeAPopUp();

});

