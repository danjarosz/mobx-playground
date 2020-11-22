import React from 'react';
import StoreProvider from './stores/StoreProvider';
import Form from "./components/Form"

const App = () => {
  return (
    <StoreProvider>
      <div>
        <h1>Opinie na temat naszej najnowszej książki</h1>
        <Form />
      </div>
    </StoreProvider>
  );
}

export default App;
