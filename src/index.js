import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './routing.jsx';


function App() {
    return (
        <div>
            <Routing />
        </div>
    );
}

export default App;


ReactDOM.render(<App />, document.getElementById('root'));