import MIDISounds from 'midi-sounds-react';
import {useState, useEffect, useRef} from 'react';
import './Prototype.css';

function Prototype(props) {
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
        console.log('A');
      }
   
      if (key == 's') {
        console.log('S');
      }
   
      if (key == 'd') {
        console.log('D');
      }
   
      if (key == 'f') {
        console.log('F');
      }
   
      if (key == 'g') {
        console.log('G');
      }
    };

    useEventListener("keydown", handler);

    return (
       <>
        <div className="Prototype">
            <svg
               width="109.74925mm"
               height="124.38894mm"
               viewBox="0 0 109.74925 124.38894"
               version="1.1"
               id="svg5"
               xmlns="http://www.w3.org/2000/svg">
              <defs
                 id="defs2" />
              <g
                 id="layer1"
                 transform={"translate(-15.45272,-12.369445)"}>
                <rect
                   fill={"#000000"}
                   stroke-width={"0.257201"}
                   id="rect234"
                   width="109.74925"
                   height="124.38894"
                   x="15.45272"
                   y="12.369445" />
                <rect
                   className={animationClassNames}
                   onClick={ () => {
                        midiSounds.playChordNow(3, [65], 2.5);
                        setAnimationClassNames("note-animation");
                      }
                   }
                   onAnimationEnd={() => setAnimationClassNames("")}
                   fill={"#ffffff"}
                   stroke-width={"0.264583"}
                   id="nota4"
                   width="18.177063"
                   height="111.85882"
                   x="98.209297"
                   y="12.474401" />
                <rect
                   onClick={ () => midiSounds.playChordNow(3, [64], 2.5)}
                   fill={"#ffffff"}
                   stroke-width={"0.264583"}
                   id="nota3"
                   width="18.177063"
                   height="111.85882"
                   x="73.80265"
                   y="12.083591" />
                <rect
                   onClick={ () => midiSounds.playChordNow(3, [62], 2.5)}
                   fill={"#ffffff"}
                   stroke-width={"0.264583"}
                   id="nota2"
                   width="18.177063"
                   height="111.85882"
                   x="49.396004"
                   y="12.083591" />
                <rect
                   onClick={ () => midiSounds.playChordNow(3, [60], 2.5)}
                   fill={"#ffffff"}
                   stroke-width={"0.264583"}
                   id="nota1"
                   width="18.177063"
                   height="111.85882"
                   x="24.989357"
                   y="12.083591" />
              </g>
            </svg>
        </div>
        <div style={{ visibility: "collapse" }}>
          <MIDISounds ref={(ref) => (midiSounds = ref)} appElementName="root" instruments={[3]} />
        </div>
       </>
    );
};

export default Prototype;
