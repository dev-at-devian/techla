import MIDISounds from 'midi-sounds-react';
import {useState, useRef, useEffect} from 'react';
import {useTimer} from 'use-timer';

import RedWholeReleased from '../img/keys/red/whole_released.PNG';
//import RedHalfReleased from '../img/keys/red/half_released.PNG';
import OrangeWholeReleased from '../img/keys/orange/whole_released.PNG';
//import OrangeHalfReleased from '../img/keys/orange/half_released.PNG';
import YellowWholeReleased from '../img/keys/yellow/whole_released.PNG';
//import YellowHalfReleased from '../img/keys/yellow/half_released.PNG';
import GreenWholeReleased from '../img/keys/green/whole_released.PNG';
//import GreenHalfReleased from '../img/keys/green/half_released.PNG';

function SecondPrototype(props) {
    const redKeyRef = useRef(null);
    const orangeKeyRef = useRef(null);
    const yellowKeyRef = useRef(null);
    const greenKeyRef = useRef(null);
    const redKey = { half: RedWholeReleased, whole: RedWholeReleased};
    const orangeKey = { half: OrangeWholeReleased, whole: OrangeWholeReleased};
    const yellowKey = { half: YellowWholeReleased, whole: YellowWholeReleased};
    const greenKey = { half: GreenWholeReleased, whole: GreenWholeReleased};

    const pianoKeys = [];
    let midiSounds = useRef(null);
    const [animationClassNames, setAnimationClassNames] = useState("");

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

    const handler = ({ key }) => {
      if (key == 'a') {
        midiSounds.playChordNow(3, [60], 2.5);
        redKeyRef.current.style.backgroundColor = 'black';
      }
   
      if (key == 's') {
        midiSounds.playChordNow(3, [62], 2.5);
        orangeKeyRef.current.style.backgroundColor = 'black';
      }
   
      if (key == 'd') {
        midiSounds.playChordNow(3, [64], 2.5);
        yellowKeyRef.current.style.backgroundColor = 'black';
      }
   
      if (key == 'f') {
        midiSounds.playChordNow(3, [65], 2.5);
        greenKeyRef.current.style.backgroundColor = 'black';
      }
    };

    useEventListener("keydown", handler);

    const { time, start, pause, reset, status } = useTimer({
      interval:1,
      onTimeUpdate: () => {
        if (time === 1) {
          midiSounds.playChordNow(3, [60], 2.5);
          redKeyRef.current.style.visibility = 'visible';
          orangeKeyRef.current.style.visibility = 'hidden';
          yellowKeyRef.current.style.visibility = 'hidden';
          greenKeyRef.current.style.visibility = 'hidden';
        } else if (time === 200) {
          midiSounds.playChordNow(3, [62], 2.5);
          redKeyRef.current.style.visibility = 'hidden';
          orangeKeyRef.current.style.visibility = 'visible';
          yellowKeyRef.current.style.visibility = 'hidden';
          greenKeyRef.current.style.visibility = 'hidden';
        } else if (time === 400) {
          midiSounds.playChordNow(3, [64], 2.5);
          redKeyRef.current.style.visibility = 'hidden';
          orangeKeyRef.current.style.visibility = 'hidden';
          yellowKeyRef.current.style.visibility = 'visible';
          greenKeyRef.current.style.visibility = 'hidden';
        } else if (time === 600) {
          midiSounds.playChordNow(3, [62], 2.5);
          redKeyRef.current.style.visibility = 'hidden';
          orangeKeyRef.current.style.visibility = 'visible';
          yellowKeyRef.current.style.visibility = 'hidden';
          greenKeyRef.current.style.visibility = 'hidden';
        } else if (time === 800) {
          redKeyRef.current.style.visibility = 'visible';
          orangeKeyRef.current.style.visibility = 'visible';
          yellowKeyRef.current.style.visibility = 'visible';
          greenKeyRef.current.style.visibility = 'visible';
        }
      }
    });


    return (
       <>
         <button onClick={() => start()}>start</button>
         <h3>Time: {time}</h3>
           <div className="SecondPrototype">
           <img ref={redKeyRef} height={400} style={{position: "absolute", left:700+0}} src={redKey.whole} 
                onClick={() => {
                    midiSounds.playChordNow(3, [60], 2.5);
            }}/>
           <img ref={orangeKeyRef} height={400} style={{position: "absolute", left:700+100}} src={orangeKey.whole}
                onClick={() => {
                    midiSounds.playChordNow(3, [62], 2.5);
            }}/>
           <img ref={yellowKeyRef} height={400} style={{position: "absolute", left:700+200}} src={yellowKey.whole} 
                onClick={() => {
                    midiSounds.playChordNow(3, [64], 2.5);
            }}/>
           <img ref={greenKeyRef} height={400} style={{position: "absolute", left:700+300}} src={greenKey.whole}
                onClick={() => {
                    midiSounds.playChordNow(3, [65], 2.5);
            }}/>

        </div>
        <div style={{ visibility: "collapse" }}>
          <MIDISounds ref={(ref) => (midiSounds = ref)} appElementName="root" instruments={[3]} />
        </div>
       </>
    );
};

export default SecondPrototype;
