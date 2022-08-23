import logo from './logo.svg';
import ximg from './x.png';
import vazio from './vazio.png';
import imgDo from './do.png';
import imgRe from './re.png';
import imgMi from './mi.png'
import imgFa from './fa.png';
import imgSol from './sol.png';
import './App.css';
import { useState, useRef, useEffect } from 'react';
import MIDISounds from 'midi-sounds-react';

const ESCAPE_KEYS = ["27", "Escape"];

const useEventListener = (eventName, handler, element = window) => {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (event) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};


function App() {
  const handler = ({ key }) => {
    if (key == 'a') {
      showDo();
    }

    if (key == 's') {
      showRe();
    }

    if (key == 'd') {
      showMi();
    }

    if (key == 'f') {
      showFa();
    }

    if (key == 'g') {
      showSol();
    }
  };

  useEventListener("keydown", handler);


  const [imgNota,setNota] = useState(vazio);
  const [txtNota,setNome] = useState("");
  let midiSounds = useRef(null);



  const showDo = () => {
    midiSounds.playChordNow(3, [60], 2.5)
    setNota(imgDo);
    setNome("dó");
  }

  const showRe = () => {
    midiSounds.playChordNow(3, [62], 2.5)
    setNota(imgRe);
    setNome("ré");
  }

  const showMi = () => {
    midiSounds.playChordNow(3, [64], 2.5)
    setNota(imgMi);
    setNome("mi");
  }

  const showFa = () => {
    midiSounds.playChordNow(3, [65], 2.5)
    setNota(imgFa);
    setNome("fá");
  }

  const showSol = () => {
    midiSounds.playChordNow(3, [67], 2.5)
    setNota(imgSol);
    setNome("sol");
  }

  console.log("teste1");


  return (


    <div className="App">

      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >


         </a>
        <p>
            {txtNota} <br />
            <img src={imgNota} />
        </p>


        <table>
          <tr>
            <td>
              <button onClick={showDo}>
              dó
              </button>
            </td>
            <td>
              <button onClick={showRe}>
                ré
              </button>
            </td>
            <td>
              <button onClick={showMi}>
                mi
              </button>
            </td>
            <td>
              <button onClick={showFa}>
                fá
              </button>
            </td>
            <td>
              <button onClick={showSol}>
                sol
              </button>
            </td>
          </tr>
        </table>
        <div style={{ visibility: "collapse" }}>
          <MIDISounds ref={(ref) => (midiSounds = ref)} appElementName="root" instruments={[3]} />
        </div>
      </header>
    </div>
  );
}

export default App;
