import React from 'react';
import './App.css';
import Header from './components/Header';
import Place from './components/Place';
import data from "./data"

export default function App() {
  const places = data.map((place) => {
    return <Place data={place} />;
  });
  console.log(places);
  return (
    <div>
      <Header />
      <section className="places-list">
          {places}
      </section>
    </div>
    );
}
