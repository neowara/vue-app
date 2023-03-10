# **TVMaze Vue App**
This project was built using Vue 2.6 and TypeScript 4.5 in ~8 hours
Uses [TVMaze](https://www.tvmaze.com/api) as API

### If I had more time this is what I would do:

* Add a component to render stars as images inside a div depending on the Score of a TV show or movie.
* Make it so all the pictures in the result align properly (since all pictures are not the same size there needs to be a workaround for this)
* Create a filter for the Search component, so that the user can search with different filters such as 'year', 'genre', 'release year', etc.
* Give the user feedback if there are no results found in the API call or if their connection is slow
* Give search movie or show suggestions as the user types in the search bar
* Add the possibility to search for an actor/actress & display their data (like movies, age, etc.)
* Allow the user to click on Cast details in ShowDetails.vue to take them to a detailed actor/actress page
* More descriptive alt texts with the right data to improve accesability
* Prepare the html for the possibility of responsive images (https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

---

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm start
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```


