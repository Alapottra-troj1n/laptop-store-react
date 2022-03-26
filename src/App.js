
import { useState } from 'react';
import './App.css';
import QA from './components/QA';
import Shop from './components/Shop';
//importing fakeDb array of objects
import fakeDb from './fakeDb/fakeDb'

function App() {

  //fetching the data from fakeDb
  const [data, setData] = useState(fakeDb);
  

 



  return (
    <div className="App">
      <Shop data={data} />

      <div className="footer-section">
        <QA/>
      </div>
    </div>
  );
}

export default App;
