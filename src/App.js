import React from 'react';
import './App.css';

import Header from './components/Header/Header';
function App({children}){
  return (
    <div>
     <Header/>
     in the app
     {children}
    </div>
  );
}

export default App;
