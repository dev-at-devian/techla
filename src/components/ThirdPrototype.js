import MIDISounds from 'midi-sounds-react';
import {useState, useRef, useEffect, forwardRef} from 'react';

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

function ThirdPrototype(props) {

    const [redPressed, setRedPressed] = useState(false);
    const [orangePressed, setOrangePressed] = useState(false);
    const [yellowPressed, setYellowPressed] = useState(false);
    const [greenPressed, setGreenPressed] = useState(false);

    const redKey = { ref: useRef(null) }
    const orangeKey = { ref: useRef(null) }
    const yellowKey = { ref: useRef(null) }
    const greenKey = { ref: useRef(null) }

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
        midiSounds.playChordNow(3, [60], 1.0);
        setRedPressed(true);
      } else if (key == 's') {
        midiSounds.playChordNow(3, [62], 1.0);
        setOrangePressed(true);
      } else if (key == 'd') {
        midiSounds.playChordNow(3, [64], 1.0);
        setYellowPressed(true);
      } else if (key == 'f') {
        midiSounds.playChordNow(3, [65], 1.0);
        setGreenPressed(true);
      }
    };

    const keyUpHandler = ({ key }) => {
      if (key == 'a') {
        setRedPressed(false);
      } else if (key == 's') {
        setOrangePressed(false);
      } else if (key == 'd') {
        setYellowPressed(false);
      } else if (key == 'f') {
        setGreenPressed(false);
      }
    };


    useEventListener("keydown", keyDownHandler);
    useEventListener("keyup", keyUpHandler);

    return (
       <>
          <svg
             version="1.1"
             id="svg222"
             width="402"
             height="392.72726"
             viewBox="0 0 402 392.72726"
             xmlns="http://www.w3.org/2000/svg">
            <defs
               id="defs226" />
            <g
               id="red">
              <g
                 id="red_pressed"
                 style={{display:(redPressed ? "inline" : "none")}}
                 transform="translate(0,6.6320757e-4)">
                <path
                   id="rect1100-62"
                   style={{display:"inline", fill:"#cf396d", fillOpacity:"1", stroke:"#1c1117", strokeWidth:"7.559", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                   d="M 83.853652,4.529 112.38959,4.5288368 112.619,389.112 c -1.96171,-0.38948 -30.788,-25.42766 -30.788,-25.42766 z" />
                <path
                   id="rect389-1"
                   style={{display:"inline", fill:"#da4565", fillOpacity:"1", stroke:"#1c1117", strokeWidth:"7.559", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                   d="m 4.5295,4.5295 h 77.30159 l 29.48889,384.59234 H 34.01839 Z" />
              </g>
              <g
                 ref={redKey.ref}
                 id="red_released"
                 style={{display:(redPressed ? "none" : "inline")}}>
                <path
                   id="rect1100"
                   style={{display:"inline", fill:"#cf396d", fillOpacity:"1", stroke:"#1c1117", strokeWidth:"7.559", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                   d="M 83.853652,4.529 112.38959,24.107 112.619,389.112 C 110.65729,388.72252 81.831,363.68434 81.831,363.68434 Z" />
                <path
                   id="rect999"
                   style={{display:"inline", fill:"#cf396d", fillOpacity:"1", stroke:"#1c1117", strokeWidth:"7.559", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                   d="m 4.5295,365.87738 h 79.221217 l 28.868113,23.2447 H 36.203221 Z" />
                <path
                   id="rect389"
                   style={{display:"inline", fill:"#da4565", fillOpacity:"1", stroke:"#1c1117", strokeWidth:"7.559", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                   d="M 4.5295,4.5295 H 81.83109 V 361.9659 H 4.5295 Z" />
              </g>
            </g>
            <g
               id="orange">
              <g
                 id="orange_pressed"
                 style={{display:(orangePressed ? "inline" : "none")}}
                 transform="translate(94.99997,6.6320757e-4)">
                <path
                   id="rect1100-62-7"
                   style={{display:"inline", fill:"#e76f47", fillOpacity:"1", stroke:"#1c1117", strokeWidth:"7.559", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                   d="M 83.853652,4.529 112.38959,4.5288368 112.619,389.112 c -1.96171,-0.38948 -30.788,-25.42766 -30.788,-25.42766 z" />
                <path
                   id="rect389-1-0"
                   style={{display:"inline", fill:"#e78a58", fillOpacity:"1", stroke:"#1c1117", strokeWidth:"7.559", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                   d="m 4.5295,4.5295 h 77.30159 l 29.48889,384.59234 H 34.01839 Z" />
              </g>
              <g
                 id="orange_released"
                 style={{display:(orangePressed ? "none" : "inline")}}
                 transform="matrix(0.99999538,0,0,1,95.000013,1.6318754e-4)">
                <path
                   id="rect1100-6"
                   style={{display:"inline", fill:"#e76f47", fillOpacity:"1", stroke:"#1c1117", strokeWidth:"7.55902", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                   d="M 83.853652,4.529 112.38959,24.107 112.619,389.112 C 110.65729,388.72252 81.831,363.68434 81.831,363.68434 Z" />
                <path
                   id="rect999-7"
                   style={{display:"inline", fill:"#e76f47", fillOpacity:"1", stroke:"#1c1117", strokeWidth:"7.55902", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                   d="m 4.5295,365.87738 h 79.221217 l 28.868113,23.2447 H 36.203221 Z" />
                <path
                   id="rect389-5"
                   style={{display:"inline", fill:"#e78a58", fillOpacity:"1", stroke:"#1c1117", strokeWidth:"7.55902", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                   d="M 4.5295,4.5295 H 81.83109 V 361.9659 H 4.5295 Z" />
              </g>
            </g>
            <g
               id="yellow">
              <g
                 id="yellow_pressed"
                 style={{display:(yellowPressed ? "inline" : "none")}}
                 transform="translate(189.99997,6.6320757e-4)">
                <path
                   id="rect1100-62-7-2"
                   style={{display:"inline", fill:"#fab01d", fillOpacity:"1", stroke:"#1c1117", strokeWidth:"7.559", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                   d="M 83.853652,4.529 112.38959,4.5288368 112.619,389.112 c -1.96171,-0.38948 -30.788,-25.42766 -30.788,-25.42766 z" />
                <path
                   id="rect389-1-0-6"
                   style={{display:"inline", fill:"#fadd2b", fillOpacity:"1", stroke:"#1c1117", strokeWidth:"7.559", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                   d="m 4.5295,4.5295 h 77.30159 l 29.48889,384.59234 H 34.01839 Z" />
              </g>
              <g
                 id="yellow_released"
                 style={{display:(yellowPressed ? "none" : "inline")}}
                 transform="translate(190.00001,1.7320023e-4)">
                <path
                   id="rect1100-6-3"
                   style={{display:"inline", fill:"#fab01d", fillOpacity:"1", stroke:"#1c1117", strokeWidth:"7.55902", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                   d="M 83.853652,4.529 112.38959,24.107 112.619,389.112 C 110.65729,388.72252 81.831,363.68434 81.831,363.68434 Z" />
                <path
                   id="rect999-7-6"
                   style={{display:"inline", fill:"#fab01d", fillOpacity:"1", stroke:"#1c1117", strokeWidth:"7.55902", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                   d="m 4.5295,365.87738 h 79.221217 l 28.868113,23.2447 H 36.203221 Z" />
                <path
                   id="rect389-5-0"
                   style={{display:"inline", fill:"#fadd2b", fillOpacity:"1", stroke:"#1c1117", strokeWidth:"7.55902", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                   d="M 4.5295,4.5295 H 81.83109 V 361.9659 H 4.5295 Z" />
              </g>
            </g>
            <g
               id="green"
               transform="translate(-284.47676,68.596086)">
              <g
                 id="green_pressed"
                 style={{display:(greenPressed ? "inline" : "none")}}
                 transform="translate(569.4765,-68.595426)">
                <path
                   id="rect1100-62-7-2-7"
                   style={{display:"inline", fill:"#9aad3b", fillOpacity:"1", stroke:"#1c1117", strokeWidth:"7.559", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                   d="M 83.853652,4.529 112.38959,4.5288368 112.619,389.112 c -1.96171,-0.38948 -30.788,-25.42766 -30.788,-25.42766 z" />
                <path
                   id="rect389-1-0-6-9"
                   style={{display:"inline", fill:"#97be4d", fillOpacity:"1", stroke:"#1c1117", strokeWidth:"7.559", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                   d="m 4.5295,4.5295 h 77.30159 l 29.48889,384.59234 H 34.01839 Z" />
              </g>
              <g
                 id="green_released"
                 style={{display:(greenPressed ? "none" : "inline")}}
                 transform="translate(569.47651,-68.595676)">
                <path
                   id="rect1100-6-3-0"
                   style={{display:"inline", fill:"#9aad3b", fillOpacity:"1", stroke:"#1c1117", strokeWidth:"7.55902", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                   d="M 83.853652,4.529 112.38959,24.107 112.619,389.112 C 110.65729,388.72252 81.831,363.68434 81.831,363.68434 Z" />
                <path
                   id="rect999-7-6-2"
                   style={{display:"inline", fill:"#9aad3b", fillOpacity:"1", stroke:"#1c1117", strokeWidth:"7.55902", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                   d="m 4.5295,365.87738 h 79.221217 l 28.868113,23.2447 H 36.203221 Z" />
                <path
                   id="rect389-5-0-3"
                   style={{display:"inline", fill:"#97be4d", fillOpacity:"1", stroke:"#1c1117", strokeWidth:"7.55902", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                   d="M 4.5295,4.5295 H 81.83109 V 361.9659 H 4.5295 Z" />
              </g>
            </g>
          </svg>
          <div style={{ visibility: "collapse" }}>
            <MIDISounds ref={(ref) => (midiSounds = ref)} appElementName="root" instruments={[3]} />
          </div>
       </>
    );
};

export default ThirdPrototype;
