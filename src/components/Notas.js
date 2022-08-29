import imgDo from '../img/do.png';
import imgRe from '../img/re.png';
import imgMi from '../img/mi.png'
import imgFa from '../img/fa.png';
import { useState, useRef, useEffect } from 'react';
import MIDISounds from 'midi-sounds-react';
import FreePlayKeyboard from './FreePlayKeyboard';

function Notas() {

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


  const [notas, setNotas] = useState();
  const musica = "123444121222";

  const comparaSeq = (str1, str2) => {
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
      setNotas("");
    }
    return result;
  }


  const msgStatus = () => {
      if (iniciou) {
        var rCompara = comparaSeq(musica, notas);
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

  };

  useEventListener("keydown", handler);


  const [imgNota,setNota] = useState(imgDo);
  const [txtNota,setNome] = useState("");
  const [txtJogo,setJogo] = useState("Aperte play!");
  const [iniciou,setIniciou] = useState(0);
  let midiSounds = useRef(null);

  const playSnd = () => {
    setNotas("");
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
    //midiSounds.playChordNow(3, [60], 2.5)
    setNota(imgDo);
    setNome("dó");
    setNotas(notas + "1");
    msgStatus();
  }

  const showRe = () => {
    //midiSounds.playChordNow(3, [62], 2.5)
    setNota(imgRe);
    setNome("ré");
    setNotas(notas + "2");
    msgStatus();
  }

  const showMi = () => {
    //midiSounds.playChordNow(3, [64], 2.5)
    setNota(imgMi);
    setNome("mi");
    setNotas(notas + "3");
    msgStatus();
  }

  const showFa = () => {
    //midiSounds.playChordNow(3, [65], 2.5)
    setNota(imgFa);
    setNome("fá");
    setNotas(notas + "4");
    msgStatus();
  }

  return (


    <div className="App">

      <FreePlayKeyboard />

      <div>
        <div>
          <h2>{txtNota}</h2>
          <img src={imgNota} alt="Note"/>
        </div>
        <div style={{ visibility: "collapse" }}>
        </div>
      </div>
    </div>
  );
}

export default Notas;
