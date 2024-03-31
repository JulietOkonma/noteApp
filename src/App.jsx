// App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './assets/component/store';
import NotePad from './assets/component/Notepad'
import './App.css'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className='h1'>Notepad Application</h1>
        <NotePad />
      </div>
    </Provider>
  );
}

export default App;
