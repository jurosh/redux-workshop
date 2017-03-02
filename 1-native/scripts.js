const createStore = Redux.createStore;
const combineReducers = Redux.combineReducers;
const compose = Redux.compose;

// STEP_0: Run application in browser and see it's output - if it's working jump to STEP_1 :) 

// STEP_3: finalize `sum` and `history` reducers
// You should see state changes based on functions #ReduxDevTools.
// Try to run your actions to see if state is behaving correctly.
// Note that every reducer has 2 parameters - `state` and `action`
// Note: All reducers run after every triggered action
// Note: Reducer should always return new state
function sum () {
  return true;
}

function history () {
  return true;
}

// STEP_1: (Use hint from readme.md) Create a Redux store holding the state of your app. API of store is { subscribe, dispatch, getState }.
// Configure it to include `sum` and `history` reducer functions
// You should see initial state in Google Chrome - in ReduxDevTools

// STEP_2: create action functions `incrementBy5`, `incrementBy10`, reset`, ...
// Call `store.dispatch` to start action
// Try to call your actions!
// You should see them in ReduxDevTools.

function renderUI () {
  
  // STEP_6: Render UI and connect it to onclick actions
  // Hint: you can get state from store by calling store.getState()
  // And you are done! Try your calculator.

  document.getElementById('target').innerHTML = `
    <div class="history">
      (Calculation history should be here)
    </div>
    <div class="result">
      (Result should be here)
    </div>
    <div class="actions">
      (.buttons with onclick="myCoolAction() should be here)
    </div>
  `;
}

// STEP_4: render intial UI with our cool render function above
// So call it and see response in browser.

// STEP_5: render UI when store changes (Hint: use store.subscribe callback)
// Now our render should be called every time something in store changes.
