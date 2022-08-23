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

window.notas = ""
window.musica = "123444121222"

const comparaSeq = () => {
  var str1 = window.musica;
  var str2 = window.notas;
  var result = 0
  console.log(str2 + ' ' + str1);
  if (str1.startsWith(str2)) {
    if (str1 == str2) {
       result = 1; /* você venceu */
    } /* nota correta */
  }
  else {
    result = 2; /* você perdeu */
  }
  if (result > 0) {
    window.notas = "";
  }
  return result;
}


function App() {
  const msgStatus = () => {
      if (iniciou) {
        var rCompara = comparaSeq();
        if (rCompara == 0) {
          setJogo("Continue...")
        } else if (rCompara == 1) {
          setJogo("Você venceu!");
          setIniciou(0);
        } else {
          setJogo("Você perdeu!");
          setIniciou(0);
        }
      }
  }

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
  const [txtJogo,setJogo] = useState("Aperte play!");
  const [iniciou,setIniciou] = useState(0);
  let midiSounds = useRef(null);

  const playSnd = () => {
    window.notas = "";
    if (!iniciou) {
      setJogo("Tocando...");
      midiSounds.playChordAt(midiSounds.contextTime() + 0.5, 3, [60], 0.25);
      midiSounds.playChordAt(midiSounds.contextTime() + 1, 3, [62], 0.25);
      midiSounds.playChordAt(midiSounds.contextTime() + 1.5, 3, [64], 0.25);
      midiSounds.playChordAt(midiSounds.contextTime() + 2, 3, [65], 0.5);
      midiSounds.playChordAt(midiSounds.contextTime() + 3, 3, [65], 0.5);
      midiSounds.playChordAt(midiSounds.contextTime() + 3.5, 3, [65], 0.5);

      midiSounds.playChordAt(midiSounds.contextTime() + 4.5, 3, [60], 0.25);
      midiSounds.playChordAt(midiSounds.contextTime() + 5, 3, [62], 0.25);
      midiSounds.playChordAt(midiSounds.contextTime() + 5.5, 3, [60], 0.25);
      midiSounds.playChordAt(midiSounds.contextTime() + 6, 3, [62], 0.5);
      midiSounds.playChordAt(midiSounds.contextTime() + 7, 3, [62], 0.5);
      midiSounds.playChordAt(midiSounds.contextTime() + 7.5, 3, [62], 0.5);
      setJogo("Toque...");
    }
    setIniciou(1);
    /*midiSounds.playChordAt(midiSounds.contextTime(), 3, [64], 0.5)
    midiSounds.playChordAt(midiSounds.contextTime() + 0.5, 3, [64], 0.5)
    midiSounds.playChordAt(midiSounds.contextTime() + 1, 3, [67], 1)
    midiSounds.playChordAt(midiSounds.contextTime() + 3, 3, [64], 0.5)
    midiSounds.playChordAt(midiSounds.contextTime() + 3.5, 3, [64], 0.5)
    midiSounds.playChordAt(midiSounds.contextTime() + 4, 3, [67], 1)
    midiSounds.playChordAt(midiSounds.contextTime() + 6, 3, [64], 0.5)
    midiSounds.playChordAt(midiSounds.contextTime() + 6.5, 3, [67], 0.5)
    midiSounds.playChordAt(midiSounds.contextTime() + 7, 3, [72], 1)8 */
  }


  const showDo = () => {
    midiSounds.playChordNow(3, [60], 2.5)
    setNota(imgDo);
    setNome("dó");
    window.notas += "1";
    msgStatus();
  }

  const showRe = () => {
    midiSounds.playChordNow(3, [62], 2.5)
    setNota(imgRe);
    setNome("ré");
    window.notas += "2";
    msgStatus();
  }

  const showMi = () => {
    midiSounds.playChordNow(3, [64], 2.5)
    setNota(imgMi);
    setNome("mi");
    window.notas += "3";
    msgStatus();
  }

  const showFa = () => {
    midiSounds.playChordNow(3, [65], 2.5)
    setNota(imgFa);
    setNome("fá");
    window.notas += "4";
    msgStatus();
  }

  const showSol = () => {
    midiSounds.playChordNow(3, [67], 2.5)
    setNota(imgSol);
    setNome("sol");
    window.notas += "5";
    msgStatus();
  }


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
          {txtJogo}
        </p>
        <p>
            {txtNota} <br />
            <img src={imgNota} />
        </p>


        <table>
        <tbody>
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
          </tbody>
        </table>
        <button onClick={playSnd}>
          Play
        </button>
        <div style={{ visibility: "collapse" }}>
          <MIDISounds ref={(ref) => (midiSounds = ref)} appElementName="root" instruments={[3]} />
        </div>
      </header>
    </div>
  );
}

export default App;
