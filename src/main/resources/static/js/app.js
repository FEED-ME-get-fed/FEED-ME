// VARS, ARRAYS AND LISTS
let recipeListReturns;
let recipeDetails;
let startingOffset = 0;

/**
 *   PAGE ACTIONS
 */
// SEARCH BTN ACTION
$('#find-more-from-api-btn').on('click', (e) => {
    e.preventDefault();
    startingOffset += 50;
    getSpoonRecipeListByKeyWord($('#search-input').val());
    scrollToTop();
})

// LOCAL AJAX TEST
$('#test-local-ajax-request').on('click', (e) => {
    e.preventDefault();
    console.log("local ajax click");
    testLocalAjaxRequest()

})

// ACCESS MODAL
function seeRecipeDetails(id){
    getSpoonRecipeDetailsByID(id);
}

// SCROLL TO TOP
function scrollToTop() {
    window.scrollTo(0, 0);
}


/**
 *    API CRUD
 */
// GET R LIST
function getSpoonRecipeListByKeyWord(kw){
    // const apiKey = SPOON_KEY_01;
    const apiKey = SPOON_KEY_02;
    // const apiKey = SPOON_KEY_03;

    const spoonURL = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=' + apiKey + '&query=' + kw + '&offset=' + startingOffset + '&number=50';
    const readOption = {
        method: 'GET',
    };

    fetch(spoonURL, readOption)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            recipeListReturns = data;
        }).then(() => {
        $('#feed').html(combineCards(recipeListReturns));
    })
}

// GET R DETAILS
function getSpoonRecipeDetailsByID(cid){
    // const apiKey = SPOON_KEY_01;
    const apiKey = SPOON_KEY_02;
    // const apiKey = SPOON_KEY_03;

    const spoonURL = 'https://api.spoonacular.com/recipes/' + cid + '/information?apiKey=' + apiKey;
    const readOption = {
        method: 'GET',
    };

    fetch(spoonURL, readOption)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            recipeDetails = data;
        })
        .then(() => {
            // Loader here
            $('#recipe-details-modal-content').html(makeModalBody(recipeDetails));
        });
}

// TEST LOCAL AJAX REQ
function testLocalAjaxRequest(){
    const url = 'http://localhost:8080/admin/get-recipe-titles';
    const readOption = {
        method: 'GET',
    };

    fetch(url, readOption)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });
}


/**
 * BUILD BODY
 */
// CREATE CARD
function makeCard(r){
    return  `
        <div class="card border-0 mt-4">
            <div class="row no-gutters">
                <div class="col-sm-7">
                    <img 
                        src="${r.image}" 
                        alt="image of ${r.title}" 
                        class="card-img-top">
                </div>
                <div class="col-sm-5">
                    <div class="card-body">
                        <div class="card-title h4">
                            ${r.title}
                        </div>
                    </div>
                    <div class="card-footer">
                        <button 
                            onclick="seeRecipeDetails(${r.id})"
                            class="btn btn-secondary w-100" 
                            type="button" 
                            data-toggle="modal" 
                            data-target="#recipe-details-modal"
                            >
                                Seed Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `
}

// COMBINE CARDS
function combineCards(rL){
    let output = '';
    for (let i = 0; i < rL.results.length; i++) {
        output += makeCard(rL.results[i]);
    }
    return output;
}

// CREATE MODAL BODY
function makeModalBody(r){
    return `
                <div id="recipe-details-modal-content" >
                    <!--header-->
                    <div class="modal-header">
                        <img src="${r.image}" alt="Image data here" class="img-fluid">
                    </div>
                    <!--body-->
                    <div class="modal-body">
                        <h4>${r.title}</h4>
                            <div>
                                <div class="h4">
                                    Summary:
                                </div>
                                ${r.summary}
                            </div>
                            <div>
                                <div class="h4 mt-2">
                                    Instructions:
                                </div>
                                ${r.instructions}
                            </div>
                            <div><strong>Ready in</strong> ${r.readyInMinutes} minutes</div> 
                        
                        <h4 class="mt-2">Ingredients</h4>
                        <ol> 
                        
                        
                                ` +  ingredientList(r) + `                   
                        
                        
                        </ol>
                        <h4>Diet Notes:</h4>
                        <ul>
                            <li>vegetarian: ${r.vegetarian}</li>
                            <li>vegan: ${r.vegan}</li>
                            <li>gluten free: ${r.glutenFree}</li>
                            <li>dairy free: ${r.dairyFree}</li>
                            <li>dish type: ${r.dishTypes}</li>
                        </ul>

                    </div>
                    <!--footer-->
                    <div class="modal-footer d-flex justify-content-between">
                        <div>
                            <small>Source:
                                <a href="${r.sourceUrl}" alt="source link">${r.sourceName}</a>
                            </small>
                        </div>
                        <form action="/recipes" method="post">
                            <div id="recipe-data">
                                <input type="hidden" name="cid" value="${r.id}">
                                <input type="hidden" name="title" value="${r.title}">
                                <input type="hidden" name="image-url" value="${r.image}">
                                <input type="hidden" name="summary" value="${r.summary.replaceAll('"', '')}">
                                <input type="hidden" name="instructions" value="${r.instructions.replaceAll('"', '')}">
                                <input type="hidden" name="ready-in-minutes" value="${r.readyInMinutes}">
                                <input type="hidden" name="servings" value="${r.servings}">
                                <input type="hidden" name="source-name" value="${r.sourceName.replaceAll('"', '')}">
                                <input type="hidden" name="source-url" value="${r.sourceUrl.replaceAll('"', '')}">
                                <input type="hidden" name="vegetarian" value="${r.vegetarian}">
                                <input type="hidden" name="vegan" value="${r.vegan}">
                                <input type="hidden" name="gluten-free" value="${r.glutenFree}">
                                <input type="hidden" name="dairy-free" value="${r.dairyFree}">
                                
                                <div id="categories">
                                
                                ` + hiddenCategoryInputList(r) + `
                                
                                
                                </div>
                                
                            </div>
                            <div id="ingredients">      <!--for each-->
    
    
                            ` + hiddenIngredientInputList(r) + `
    
    
                            </div>
                            <div>
                                <button 
                                    class="btn btn-secondary" 
                                    type="button" 
                                    data-dismiss="modal">
                                        Close
                                </button>                                
                                <button 
                                    class="btn btn-primary" 
                                    type="submit">
                                        Add to Your Feed
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
    `
}

// CREATE INGREDIENT LIST ITEM
function ingredientListItem(rI){
    return `
        <li>${rI.name}, Amount: ${rI.original}</li>
    `
}

// COMBINE INGREDIENTS INTO A LIST
function ingredientList(r){
    let output = '';
    for (let i = 0; i < r.extendedIngredients.length; i++) {
        output += ingredientListItem(r.extendedIngredients[i]);
    }
    return output;
}

// CREATE HIDDEN INGREDIENT INPUT FOR FORM
function hiddenIngredientInputs(rI){
    return `
                <input type="hidden" name="ingredient-name" value="${rI.name}">
                <input type="hidden" name="ingredient-original" value="${rI.original}">
    `
}

// COMBINE HIDDEN INGREDIENT LIST FOR FORM
function hiddenIngredientInputList(r){
    let output = '';
    for (let i = 0; i < r.extendedIngredients.length; i++) {
        output += hiddenIngredientInputs(r.extendedIngredients[i]);
    }
    return output;
}

// CREATE HIDDEN CAT INPUT FOR FORM
function hiddenCategoryInputs(rC){
    return `
                <input type="hidden" name="category-type" value="${rC}">
    `
}

// COMBINE HIDDEN CAT LIST FOR MORM
function hiddenCategoryInputList(r) {
    let output = '';
    for (let i = 0; i < r.dishTypes.length; i++) {
        output += hiddenCategoryInputs(r.dishTypes[i]);
    }
    return output;
}