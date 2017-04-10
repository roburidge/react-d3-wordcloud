# react-d3-wordcloud
A word cloud that displays the topics using [D3js](https://d3js.org/) with [React](https://facebook.github.io/react/)

## Run development enviroment
1. Install dependencies: `yarn`
2. Run dev server: `yarn start`
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
    * hot reloads
    * build errors and lint warnings

## Running tests
1. Install dependencies: `yarn`
2. Run test suite `yarn test`

## Project structure
```
react-d3-wordcloud/
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    components/
      WordCloud/
        index.js
        WordCloud.js
        Cloud.js
        Word.js
      MetaList/
        index.js
        MetaList.js
        MetaList.css
    containers/
      Topics.css
      Topics.js
    lib/
      utilities.js
```

* `index.js`:
  Loads our application into the DOM

* `App.js`: 
  Basic project structure and handles global events and state for the topics selections. If the app grew any further I would pull these out into Redux actions and stores.

* `components/`:
  Components in named folders and export themselves via an index.js file allowing us to import them form `components/ComponenFolder`. I've tried to keep the WordCloud modular by splitting it into a main `WordCloud` component that takes an array of topic data and uses d3 to produce svg positions that it feeds into `Word` & `Cloud` components. The `Word` & `Cloud` components are exported too allowing for more flexability in future use.

* `containers/`
  Containers are higher level components that are project specific. The topics container processes the topic data into a format that can be used by `WordCloud`