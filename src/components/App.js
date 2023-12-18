import React, { useEffect } from 'react'
import "@fontsource/libre-franklin";
import "@fontsource/inconsolata";
import "@fontsource/inconsolata/600.css";
import "@fontsource/inconsolata/400.css";
import Home from '../pages/Home'
import '../styles/styles.css'
import ReactGA from 'react-ga4';

ReactGA.initialize('G-5NPM6DB057');

function App() {

  useEffect(() => {
    ReactGA.send("pageview");
  }, []);

  return (
    <Home/>
  )
}

export default App
