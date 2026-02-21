# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop View]()

![Mobile View]()

### Links

- Solution URL: [GitHub Link](https://github.com/RoxySash/faq-accordion-main.git)
- Live Site URL: [GitHub Pages](https://roxysash.github.io/faq-accordion-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I learned how to use JS to do the dropdown options.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.accordion .question::after {
  content: url("./assets/images/icon-plus.svg");
  position: absolute;
  right: -5px;
}
.body {
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}

.accordion.active .question::after {
  content: url("./assets/images/icon-minus.svg");
  transition: 0.5s;
}
```

```js
this.classList.toggle("active");
```

### Continued development

I am excited to learn more about dropdown features on websites. I had trouble with CSS more than I had with JS which is fine I am still learning. I will work on making my CSS cleaner and more responsive.

If I add the background image and use the position absolute on the body and the position relative on the contianer I realize that in desktop view the container is floating on the left side. I have tried to fix this but I haven't. I need to read up on position.

## Author

- Frontend Mentor - [@RoxySash](https://www.frontendmentor.io/profile/RoxySash)
