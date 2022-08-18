import React from 'react';
import { Grid } from '../../components/Grid';
import { cards } from '../../data/cards';

export const App = () => {
  return (
    <div className="App">
      <Grid cards={cards} />
    </div>
  );
}

