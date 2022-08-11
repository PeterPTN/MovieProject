import { createGlobalStyle } from "styled-components";

//Global styling
export const GlobalStyles = createGlobalStyle`
    /* Global CSS styles */
:root {
  box-sizing: border-box;
  font-size: 1rem;
  font-family: var(--body), Arial, Helvetica, sans-serif;
  --small404: "https://i.stack.imgur.com/6M513.png";
  --big404: red;
  
  --body: 'Oswald', sans-serif;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  list-style: none;  
 
}

h2 {
  color: #0F0E0E;
}

img {
  max-width: 100%;
}

::selection {
  color: white;
  background-color: rgba(12, 8, 39, 0.877);
}

/* Determine what sections need section__padding and section__margin */
.section__padding {
  padding: 5rem 12rem;
}

.section__margin {
  margin: 5rem 12rem;
}

.text-center {
  text-align: center !important;
}

.hidden {
  display: none !important;
}

/* Make an ellipses that truncates overflow for blog preview */
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.truncate-lineclamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

.padding {
  padding-right: 10rem;
  padding-left: 10rem;
}

.margin {
  margin-right: 10rem;
  margin-left: 10rem;
}

@media screen and (max-width: 1500px) {
  .padding {
    padding-right: 4rem;
    padding-left: 4rem;
  }

  .margin {
    margin-right: 4rem;
    margin-left: 4rem;
  }
}


@media screen and (max-width: 1000px) {
  .padding {
    padding-right: 2rem;
    padding-left: 2rem;
  }

  .margin {
    margin-right: 2rem;
    margin-left: 2rem;
  }
}

@media screen and (max-width: 800px) {
  .padding {
    padding-right: 1rem;
    padding-left: 1rem;
  }

  .margin {
    margin-right: 1rem;
    margin-left: 1rem;
  }
}
`