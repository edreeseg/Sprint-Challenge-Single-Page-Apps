import React from "react";
import {
    WelcomePage,
    CharacterList,
    CharacterCard,
    Header,
} from "./components";
import { Route } from 'react-router-dom';

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterList} />
      <Route path="/characters/:id" component={CharacterCard} />
    </main>
  );
}
