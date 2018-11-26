import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello World</h1>;
console.log(element);

// Renders element inside the div='root' in our index.html
ReactDOM.render(element, document.getElementById('root'));