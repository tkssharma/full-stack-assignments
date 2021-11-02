import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App colorPickerOptions={['#5d77f5', '#0fd085', '#ffba5b', '#f95e62', 'lightpink']} initialSelectedColor={'black'}/>, document.getElementById('root'));
registerServiceWorker();
