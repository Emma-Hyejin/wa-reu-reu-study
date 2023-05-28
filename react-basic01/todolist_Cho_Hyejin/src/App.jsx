import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Main from './Main';
import Weather from './Weather/Weather';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <main>
      <Navbar/>
      {/* <section className="main">    
        <Routes>
            <Route path="/" element={Main}/>
            <Route path="/weather" element={Weather}/>
        </Routes>
      </section> */}
      <section className="main">
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/weather" element={<Weather/>}/>
        </Routes>
      </section>
      {/* <Main/> */}
      </main>
    </div>

  );
}

export default App;
