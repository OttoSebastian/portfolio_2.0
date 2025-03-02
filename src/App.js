import React, {useEffect} from 'react';
import './App.css';
import favicon from './images/logo_white_navy.png';
//Components
import Navigation from './components/Navigation';

function App() {

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.href = favicon;
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <Navigation/>
    </>
  );
}

export default App;