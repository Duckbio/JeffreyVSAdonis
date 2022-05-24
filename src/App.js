import './App.css';
import Navbar from './components/Navbar';
import Bar from './components/Bar';
import Add from './components/Add';
import Qualities from './components/Qualities';
import Footer from './components/Footer';
import data from "./data.js"
import qualitiesList from './qualitiesList';
import generate from './generateASCII';
import { getByAltText } from '@testing-library/react';
import cookie from './cookies';
import { useState } from 'react';

function App() {
  const [valueOfAdd, setValueOfAdd] = useState(0);
  const add = data.map(add => {
    return <Add 
        setValueOfAdd={setValueOfAdd} //There's probably a much better way to do it but whatever LMAO
        description={add.description}
        value={add.value}
        key={add.description}
    />
  })
  const qualities = qualitiesList.map(quality => {
    return <Qualities 
        description={quality.description}
        value={quality.value}
        key={quality.description}
    />
  })
  var final = 0;
  qualitiesList.forEach(element => {
    final += element.value;
  })
  final = final / qualitiesList.length;
  return (
    <div>
      <Navbar />
      <Bar valueOfAdd={valueOfAdd}/>
      <div className='all-buttons'>
        {add}
      </div>
      <hr></hr>
      <div className='all-qualities'>
        {qualities}
      </div>
      <div className='parent-all-around-quality'>
      <p className='all-around-quality'><h3>Average quality</h3>{generate('⬛⬜', 10, final/10)}</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
