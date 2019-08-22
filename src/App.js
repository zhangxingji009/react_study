import React from 'react';
import FakeApp from './FakeApp';
import TrueApp from './TrueApp';
import './App.css';



function App() {
  return (
    <div>
      <FakeApp/>
      <TrueApp/>
      <FakeApp/>
      <TrueApp/>
      <FakeApp/>
    </div>
  );
}

export default App;
