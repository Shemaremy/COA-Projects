import React from 'react'
import './App.css'
import Intro from './components/Intro';
import Gallery01 from './components/Gallery01';
import Gallery02 from './components/Gallery02';

function App() {

  return (
    <>
     <div className="Everything">
       <div className='Intro'><Intro/></div>
       <div className='gallery1'><Gallery01/></div>
       <div className='gallery2'><Gallery02/></div>
     </div>
    </>
  )
}
export default App;
