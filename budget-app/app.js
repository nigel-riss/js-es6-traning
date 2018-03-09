// Budget Controller
var budgetController = (function() {



})();



// UI Controller
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDesctiption: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDesctiption).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    }

})();



// Global app controller
var controller = (function(budgetCtrl, UICtrl) {

    var DOM = UIController.getDOMstrings();
    console.log(DOM);
    var ctrlAddItem = function() {

        // 1. Get the field input data
        var input = UICtrl.getInput();
        console.log(input);

        // 2. Add the item to the budget controlle

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
        
    });

})(budgetController, UIController);