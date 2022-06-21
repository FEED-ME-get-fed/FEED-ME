"use strict";
(function () {

    //REFACTOR LATER .....
    //[]a div that displays in X seconds.


    // function after30secondsDoThis() {
    //     let  divPopup = document.getElementById('displayAfter');
    //     divPopup.style.display = 'none';
    //
    //     setTimeout(function () {
    //         divPopup.style.display = 'block';
    //     }, 60000);


function makeAPopUp() {
    let thisFunction = closeDiv();

    // //POP UP DIV
    function closeDiv() {

        $(function(){
            $('#closepls').click(function(){
                document.getElementById('thePopupDiv').remove();
            });
        });

        // //THIS GRABS THE POPUP DIV
        // let thePopUpDiv = document.getElementById("thePopupDiv");
        // //THIS HIDES THE DIV
        // if (thePopUpDiv.style.display === "none") {
        //     thePopUpDiv.style.display = "block";
        // } else {
        //     thePopUpDiv.style.display = "none";
        // }
    }
// //CLICK EVENT
    function addClickEventToPopupDiv() {
        //THIS GRABS THE ELEMENT WITH THE ID 'CLICKME' --THE X-- AND ADDS A CLICK EVENT
        let popupElement = document.getElementById('clickMe');
        popupElement.addEventListener('click', () => {
            //THIS ADDS THE FUNCTION ONCE CLICKED, ERASING THE DIV.
            closeDiv();
        })
    }



    let div = document.createElement('div');
    div.innerHTML = `
    <div sec:authorize="!isAuthenticated()" th:fragment="registrationPopUp" class="popup" id="thePopupDiv">
        <h5 class="card-title pb-2 text-center">Join the Feed.</h5>
                   <button type="button" class="btn-close x-icon" data-bs-dismiss="card" aria-label="Close" id="closepls" onclick="${thisFunction}"></button>
                  <p class="registerCardText">Get the most out of our website by creating an account with us.</p>
              <div class="mx-auto d-grid pt-2">
              <a href="/user/register" class="btn-grad text-decoration-none text-light">Register</a>
               </div>
        </div>
                `;
    document.body.appendChild(div);


}

function afterXsecondsMakeAPopUp(){
    setTimeout(makeAPopUp, 1999);
}

afterXsecondsMakeAPopUp();

})();
