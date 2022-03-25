
import { useState } from 'react';
import './App.css';
import Shop from './components/Shop';
import fakeDb from './fakeDb/fakeDb'

function App() {

  //fetching the data from fakeDb
  const [data, setData] = useState(fakeDb);

 





  return (
    <div className="App">
      <Shop/>
    </div>
  );
}

export default App;
