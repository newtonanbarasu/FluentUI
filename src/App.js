import React from 'react';

import './App.css';

import Navigation from './nav';
import CardsSection from './card';
import Table from './table';

function App() {
  return (
   <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm2 ms-xl2 p-0">
          <Navigation />
        </div>
        <div className="main-element ms-Grid-col ms-sm10 ms-xl10">
          <div className="ms-Grid-row">
            <CardsSection />
          </div>
          <div className="ms-Grid-row">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;