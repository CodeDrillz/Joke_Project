import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { JokeCentral } from './project/Jokecentral';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <JokeCentral />
    </>
  );
}

export default App;
