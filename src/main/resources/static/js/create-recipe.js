// Vars
let ing = '';
let amt = '';

// Preventing Modal Btn Default
$('#modal-open-btn').on('click', (e) => {
    e.preventDefault();
})

// Zero out Globals
// $('#add-recipe-btn').on('click', ()=> {
//     ing = '';
//     amt = '';
// })


let ingredentsAdded=0;
// ADD BTN TO FORM
$('#add-ing-to-form').on('click', (e) => {
    e.preventDefault();
    // vars
    ing += $('#ing-input').val() + ',,,';
    amt += $('#amount-input').val() + ',,,';

    // display
    $('#ingredients-data').append(makeShowIngredientList($('#ing-input').val(), $('#amount-input').val()));

    // store in value
    $('#all-ingredient-titles').val(ing);
    $('#all-ingredient-amounts').val(amt )


    createHiddenInput($('#ing-input').val(),$('#amount-input').val(), ingredentsAdded);
    ingredentsAdded++;
    // clear
    $('#ing-input').val('');
    $('#amount-input').val('');

    // close modal
    $(".modal").css('display', 'none');
    $(".modal-backdrop").css('display', 'none');

});


function makeShowIngredientList(n1, n2){
    let showIng = '<li>' + n1;
    let showAmt = n2 + '</li>';
    return showIng + ', ' + showAmt;
}



const createHiddenInput = (name, amount,i) => {
    document.getElementById("hidden-data").innerHTML += `
        <input id="ingredients" type="hidden" name="ingredients[${i}].ingredientName" value="${name}">
        <input type="hidden" name="ingredients[${i}].ingredientAmount" value="${amount}">
    `
}

function formCheck(event){
    const title = document.getElementById("title").value;
    const summary = document.getElementById("summary").value;
    const instruction = document.getElementById("instruction").value;
    const category = $('#category option:selected').text();
    const servings = document.getElementById("servings").value;
    const readyInMin = document.getElementById("time").value;

    console.log(category);

    if(title === "" || summary === "" || instruction === "" || category === "Select..." || servings === "" || readyInMin === ""){
        event.preventDefault();
        alert("Please Check that all inputs have been filled");

        if(title === ""){
            $('.error1').css('visibility', 'visible');
        }
        if(summary === ""){
            $('.error2').css('visibility', 'visible');
        }
        if(instruction === ""){
            $('.error3').css('visibility', 'visible');
        }
        if(category === "Select..."){
            $('.error4').css('visibility', 'visible');
        }
        if(servings === ""){
            $('.error5').css('visibility', 'visible');
        }
        if(readyInMin === ""){
            $('.error6').css('visibility', 'visible');
        }
    }
}


