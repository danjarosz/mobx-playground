import React from 'react';
import StoreProvider from './stores/StoreProvider';

const App = () => {
  return (
    <StoreProvider>
      <div>
        Start
      </div>
    </StoreProvider>
  );
}

export default App;
