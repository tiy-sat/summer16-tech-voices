# SA Tech Voices

## Tech Decisions
### Frameworks
1. React.js
  - Faster load times for viewers of blog
  - Fast development (more organized)

### Libraries
1. react-router
  - Allows us to model against back end clean URLs which are the expected default behavior

1. Jest
  - Works well with React

1. jQuery
  - Possible scrolling behavior
  - AJAX request are shorter, and browsers compatible

### Services
1. tiny-tiny
  - Quick Database as a service

1. Heroku

## Naming

### CSS
Prefer classes over other selector in conjunction with BEM.
`.Block__element--modifier`

### JS
1. File names
  - First letter always capitol
  `Main.js`
2. Variable names
  - Use `el` as suffix when reference to DOM element is created
  - Use `$` as prefix when referencing variables that use jQuery
3. Method names
  - Event handlers should have `handler` as suffix and `on` as prefix
4. Selecting/referencing elements in the DOM
  - Prefer to use `ref='elementName'` over `$` or `document` selectors to match React conventions
