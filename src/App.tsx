import React from 'react';
import { Admin } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

function App(): JSX.Element {
  return <Admin dataProvider={simpleRestProvider('http//0.0.0.0:3000')} />;
}

export default App;
