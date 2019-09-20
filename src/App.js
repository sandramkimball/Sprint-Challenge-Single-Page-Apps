import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <main>
      <Header />
      <WelcomePage></WelcomePage>
      <section className = 'card-section'>
        <CharacterList/>
      </section>
    </main>
  );
}


export default App;