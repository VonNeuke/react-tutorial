import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



// const heading = <h1 className='side-heading'>Hello React</h1>
// const heading = React.createElement('h1',{className:'side-heading'},'Hello, React!')

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>);
