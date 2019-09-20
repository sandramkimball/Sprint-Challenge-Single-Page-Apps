import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import FormikSearchForm from './components/SearchForm';

function App() {
  return (
    <main>
      <Header />
      <WelcomePage/>
      <FormikSearchForm/>
      <section className = 'card-section'>
        <CharacterList/>
      </section>
    </main>
  );
}


export default App;