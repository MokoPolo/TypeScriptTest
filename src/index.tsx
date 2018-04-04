import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
// import './Hello.css';
// import Hello from './Hello';
import RecipeContainer from './RecipeContainer';

ReactDOM.render(
  <RecipeContainer />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
