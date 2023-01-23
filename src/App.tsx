import { useState } from 'react';
import './App.scss';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>{process.env.VSCODE_DEBUG}</p>
    </div>
  );
}

export default App;
