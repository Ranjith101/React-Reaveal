import logo from "./logo.svg";
import "./App.css";
import Zoom from "react-reveal/Zoom";
import config from "react-reveal/globals";
import Fade from 'react-reveal/Fade';
config({ ssrFadeout: true });



function App() {
  return (
    <Fade>
    <h1>
      Your content goes here
    </h1>
  </Fade>   
  );
}

export default App;
