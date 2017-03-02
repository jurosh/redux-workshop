# Redux Workshop

*Simple redux workshop (partially react) under 2 hours*


# 0 | Introduction to redux

http://redux.js.org/

Redux is a predictable state container for JavaScript apps.

It helps you write applications that behave *consistently*, run in different environments (client, server, and native), and are *easy to test*.
On top of that, it provides a great developer experience, such as *live code editing* combined with a *time traveling* debugger.

* Actions
* Reducers
* Store

--> event dispatch Action -> reducer updates Store -> redux trigger event on components listening on Store changes -->

## Requirements:

- Nodejs + npm
- Chrome with “Redux DevTools” plugin https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
- In workshop directory run `cd ./2-react/ && npm install` to install dependencies for lesson 2 (Please do it NOW as it may take some time).

# 1 | Redux without React or npm

Install `npm install http-server -g`

Run `cd 1-native && http-server -c0` command and then access http://localhost:8080 in browser. You should see you project running.

See how the final product may look like: https://youtu.be/XPCqW0Dp6Aw

Hint - how to create redux store:

```
const store = createStore(
  combineReducers({all, my, reducers, ...}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
 ```

Hint - how to push redux action:

```
store.dispatch({type: 'MY_ACTION'});
```

Check `./1-native/index.html`. It already includes every dependency you would need.

Follow steps in code `./1-native/scripts.js`. Add/modify code only after step is defined.

After **1-3** steps you should have function application core - no visible changes, but actions and store which represents application state.

**4-6** will take application state and render UI. Afterwards is required to connect actions to action buttons.

**BONUS STEP**

Add guess `<input />` with information text next to it.

Information should output `"Your guess is higher!"` / `"Correct!"` / `"Your guess is lower!"` based on compare of value in `Input` and current store `sum` state.

It may looks like https://screen.jurosh.com/i16/2017_03_01_14221668810419326.png

Text should update in realtime - after calculator change and also after input text is modified.

# 2 | Redux with React and npm

To work with React is recommended to install: **React plugin for chrome**.

Run `cd ./2-react/ && npm install && npm start` to start development server on http://localhost:3000

Store:
  - humans [
    
     1: {

        id: 1,
        photo: './images/human1.jpg',
        border: 'red',
        size: 3
      },

      2: {

        id: 2,
        photo: './images/human2.png',
        border: 'green',
        size: 2
      },

      3: {

        id: 3,
        photo: './images/human3.png',
        border: 'blue',
        size: 1
      }
      
  ]

  - listing [1, 2, 3 ]
  - sorted [ 3, 1, 2 ]

Search for TODOs in code and try to make sure you have working functionality:

- Every "human" should have displayed image defined in state
- Functionality of changing "humans" colors (action and reducer is already functional)
- Increasing "humans" size
- Decreasing humans size
- Every change should be updated in realtime in both listings
- "Add new human" button should add new human to listings
- BONUS: Add button to reset all images to some default size (eg. 25)

See TODOs in:

- src/actions/humans.js
- src/components/HumanContainer.js
- src/components/HumansSortedContainer.js
- src/reducers/human.js
- BONUS: src/reducers/index.js

Sorting (BONUS) Note: action `STORE_SORTED_LISTING` will be fired  automatically for you. You just need to modify sorting function in `reducer/index.js` and update reducer to save result.

Good luck.