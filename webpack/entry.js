import React, { Component } from 'react';
import { render } from 'react-dom';
import Root from './components/Root.jsx';

require('./assets/_sass/main.scss');

class App extends Component {
 render() {
   return (
     <Root />
   );
 };
};

render(<App />, document.getElementById('root'));
