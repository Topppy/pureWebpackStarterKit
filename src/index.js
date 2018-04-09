
import './style.css';
import { cube } from './utils'

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = [
    'Hello webpack!!!',
    '5 cubed is equal to ',
    cube(5),
  ].join('\n\n');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());

