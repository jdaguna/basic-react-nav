import React from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import Hero from './components/hero/hero';
import Search from './components/search/search';
import Footer from  './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Toolbar/>
       <main style={{marginTop: '57px'}}>
        <Hero />
        <Search />
      </main>
      <Footer/>
      
      
    </div>
  );
}

export default App;
