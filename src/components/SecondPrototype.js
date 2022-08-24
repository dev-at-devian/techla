import MIDISounds from 'midi-sounds-react';
import {useState, useRef, useEffect, forwardRef} from 'react';
import {useTimer} from 'use-timer';

import RedWholeReleased from '../img/keys/red/whole_released.PNG';
import RedWholePressed from '../img/keys/red/whole_pressed.PNG';
import RedHalfReleased from '../img/keys/red/half_released.PNG';
import RedHalfPressed from '../img/keys/red/half_pressed.PNG';

import OrangeWholeReleased from '../img/keys/orange/whole_released.PNG';
import OrangeWholePressed from '../img/keys/orange/whole_pressed.PNG';
import OrangeHalfReleased from '../img/keys/orange/half_released.PNG';
import OrangeHalfPressed from '../img/keys/orange/half_pressed.PNG';

import YellowWholeReleased from '../img/keys/yellow/whole_released.PNG';
import YellowWholePressed from '../img/keys/yellow/whole_pressed.PNG';
import YellowHalfReleased from '../img/keys/yellow/half_released.PNG';
import YellowHalfPressed from '../img/keys/yellow/half_pressed.PNG';

import GreenWholeReleased from '../img/keys/green/whole_released.PNG';
import GreenWholePressed from '../img/keys/green/whole_pressed.PNG';
import GreenHalfReleased from '../img/keys/green/half_released.PNG';
import GreenHalfPressed from '../img/keys/green/half_pressed.PNG';

function SecondPrototype(props) {

    const redKey = { ref: useRef(null), half: {released: RedHalfReleased, pressed: RedHalfPressed}, whole: {released: RedWholeReleased, pressed: RedWholePressed}};
    const orangeKey = { ref: useRef(null), half: {released: OrangeHalfReleased, pressed: OrangeHalfPressed}, whole: {released: OrangeWholeReleased, pressed: OrangeWholePressed}};
    const yellowKey = { ref: useRef(null), half: {released: YellowHalfReleased, pressed: YellowHalfPressed}, whole: {released: YellowWholeReleased, pressed: YellowWholePressed}};
    const greenKey = { ref: useRef(null), half: {released: GreenHalfReleased, pressed: GreenHalfPressed}, whole: {released: GreenWholeReleased, pressed: GreenWholePressed}};

    let midiSounds = useRef(null);

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

    const setKeyVisibility = (setup) => {
      redKey.ref.current.style.visibility = setup[0];
      orangeKey.ref.current.style.visibility = setup[1];
      yellowKey.ref.current.style.visibility = setup[2];
      greenKey.ref.current.style.visibility = setup[3];
    };

    const keyDownHandler = ({ key }) => {
      if (key == 'a') {
        midiSounds.playChordNow(3, [60], 2.5);
        redKey.ref.current.src = redKey.whole.pressed;
      } else if (key == 's') {
        midiSounds.playChordNow(3, [62], 2.5);
        orangeKey.ref.current.src = orangeKey.whole.pressed;
      } else if (key == 'd') {
        midiSounds.playChordNow(3, [64], 2.5);
        yellowKey.ref.current.src = yellowKey.whole.pressed;
      } else if (key == 'f') {
        midiSounds.playChordNow(3, [65], 2.5);
        greenKey.ref.current.src = greenKey.whole.pressed;
      }
    };

    const keyUpHandler = ({ key }) => {
      if (key == 'a') {
        redKey.ref.current.src = redKey.whole.released;
      } else if (key == 's') {
        orangeKey.ref.current.src = orangeKey.whole.released;
      } else if (key == 'd') {
        yellowKey.ref.current.src = yellowKey.whole.released;
      } else if (key == 'f') {
        greenKey.ref.current.src = greenKey.whole.released;
      }
    };


    useEventListener("keydown", keyDownHandler);
    useEventListener("keyup", keyUpHandler);

    const useSequence = (sequence) => {
      for (let i = 1; i < sequence.length; i++) {
        sequence[i][3] += sequence[i-1][3];
      }
      for (let i = 1; i < sequence.length; i++) {
        sequence[i][3] *= 1000;
      }

      const { time, start, pause, reset, status } = useTimer({
        interval:1,
        onTimeUpdate: () => {
          sequence.forEach(element => {
            if (time === element[3]) {
              midiSounds.playChordNow(element[0], element[1], element[2]);
              let k = element[1][0];
              setKeyVisibility([k === 60 ? 'visible' : 'hidden',
                                k === 62 ? 'visible' : 'hidden', 
                                k === 64 ? 'visible' : 'hidden',
                                k === 65 ? 'visible' : 'hidden']);
            }
          });
        }
      });
      return [time,start];
    }

    /*
    const { time, start, pause, reset, status } = useTimer({
      interval:1,
      onTimeUpdate: () => {
        if (time === 1) {
          midiSounds.playChordNow(3, [60], 2.5);
          setKeyVisibility(['visible', 'hidden', 'hidden', 'hidden']);
        } else if (time === 200) {
          midiSounds.playChordNow(3, [62], 2.5);
          setKeyVisibility(['hidden', 'visible', 'hidden', 'hidden']);
        } else if (time === 400) {
          midiSounds.playChordNow(3, [64], 2.5);
          setKeyVisibility(['hidden', 'hidden', 'visible', 'hidden']);
        } else if (time === 600) {
          midiSounds.playChordNow(3, [62], 2.5);
          setKeyVisibility(['hidden', 'visible', 'hidden', 'hidden']);
        } else if (time === 800) {
          setKeyVisibility(['visible', 'visible', 'visible', 'visible']);
        }
      }
    });
    */

    const [seq_time, seq_start] = useSequence([[3, [60], 0.25, 0.5], 
                                           [3, [62], 0.25, 0.5], 
                                           [3, [64], 0.25, 0.5], 
                                           [3, [65], 0.25, 0.5], 
                                           [3, [65], 0.25, 1.0], 
                                           [3, [65], 0.25, 0.5]]);

    return (
       <>
           <div className="SecondPrototype">
           <img ref={redKey.ref} height={400} style={{position: "absolute", left:700+0}} src={redKey.whole.released} 
                onClick={() => {
                    midiSounds.playChordNow(3, [60], 2.5);
            }}/>
           <img ref={orangeKey.ref} height={400} style={{position: "absolute", left:700+100}} src={orangeKey.whole.released}
                onClick={() => {
                    midiSounds.playChordNow(3, [62], 2.5);
            }}/>
           <img ref={yellowKey.ref} height={400} style={{position: "absolute", left:700+200}} src={yellowKey.whole.released}
                onClick={() => {
                    midiSounds.playChordNow(3, [64], 2.5);
            }}/>
           <img ref={greenKey.ref} height={400} style={{position: "absolute", left:700+300}} src={greenKey.whole.released}
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
