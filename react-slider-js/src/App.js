import React, {useState} from 'react';
import './App.css';
import 'h8k-components';

import Slides from './components/Slides';
const title = "Slideshow App";

function App({slides}) {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h8k-navbar header={title}></h8k-navbar>
            <div className="App">
                <Slides 
                 slides={slides} 
                 restart={() => setCount(0)} 
                 next={() => setCount(count + 1)}
                 previous={() => setCount(count - 1)}
                 currentSlide={count} />
            </div>
        </div>
    );
}

export default App;
