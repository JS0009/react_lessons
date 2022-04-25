import React, { useState } from 'react';
import Postitem from './components/Postitem';
import './styles/App.css';


function App() {
  
  const [value, setValue] = useState()

  return (
    
    <div className='App'>
      <Postitem post={{id: 1, title: 'JavaScript', body: 'JavaScript - язык программирования'}} />
      <Postitem post={{id: 2, title: 'JavaScript', body: 'JavaScript - язык программирования'}} />
      <Postitem post={{id: 3, title: 'JavaScript', body: 'JavaScript - язык программирования'}} />
    </div>

  );
}

export default App;
