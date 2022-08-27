import MIDISounds from 'midi-sounds-react';
import {useState, useRef, useEffect, forwardRef} from 'react';
import Grid from '@mui/material/Grid';
import * as Tone from 'tone'

export function RedBlock(props) {
    return (
       <svg version="1.1" id="svg222" width="120" height="392.72699" viewBox="0 0 120 392.72699" xmlns="http://www.w3.org/2000/svg">
        <g
           id="red_released-0"
           style={{display:(props.blocks > 3 ? "inline" : "none")}}
           transform="matrix(1,0,0,1.1206954,5.0144196e-6,-0.54644258)">
          <path
             id="rect1100-6-3-9"
             style={{display:"inline", fill:"#cf396d", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"7.14039", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
             d="M 83.853652,4.529 112.38959,24.107 112.619,89.063134 C 112.626,91.063121 81.831,63.635471 81.831,63.635471 Z" />
          <path
             id="rect999-7-6-3"
             style={{display:"inline", fill:"#cf396d", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"7.14039", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
             d="M 4.5295,68.862044 H 83.750717 L 112.61883,92.106742 H 36.203221 Z" />
          <path
             id="rect389-5-0-6"
             style={{display:"inline", fill:"#da4565", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"7.14038", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
             d="M 4.5295,4.5295 H 81.83109 V 65.40724 H 4.5295 Z" />
        </g>
        <g
           id="red_released-0-0"
           style={{display:(props.blocks > 2 ? "inline" : "none")}}
           transform="matrix(1,0,0,1.1206954,5.0144196e-6,98.107616)">
          <path
             id="rect1100-6-3-9-6"
             style={{display:"inline", fill:"#cf396d", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"7.14039", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
             d="M 83.853652,4.529 112.38959,24.107 112.619,89.063134 C 112.626,91.063121 81.831,63.635471 81.831,63.635471 Z" />
          <path
             id="rect999-7-6-3-2"
             style={{display:"inline", fill:"#cf396d", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"7.14039", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
             d="M 4.5295,68.862044 H 83.750717 L 112.61883,92.106742 H 36.203221 Z" />
          <path
             id="rect389-5-0-6-6"
             style={{display:"inline", fill:"#da4565", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"7.14038", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
             d="M 4.5295,4.5295 H 81.83109 V 65.40724 H 4.5295 Z" />
        </g>
        <g
           id="red_released-0-0-1"
           style={{display:(props.blocks > 1 ? "inline" : "none")}}
           transform="matrix(1,0,0,1.1206954,5.0144195e-6,196.60216)">
          <path
             id="rect1100-6-3-9-6-8"
             style={{display:"inline", fill:"#cf396d", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"7.14039", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
             d="M 83.853652,4.529 112.38959,24.107 112.619,89.063134 C 112.626,91.063121 81.831,63.635471 81.831,63.635471 Z" />
          <path
             id="rect999-7-6-3-2-7"
             style={{display:"inline", fill:"#cf396d", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"7.14039", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
             d="M 4.5295,68.862044 H 83.750717 L 112.61883,92.106742 H 36.203221 Z" />
          <path
             id="rect389-5-0-6-6-9"
             style={{display:"inline", fill:"#da4565", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"7.14038", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
             d="M 4.5295,4.5295 H 81.83109 V 65.40724 H 4.5295 Z" />
        </g>
        <g
           id="red_released"
           style={{display:(props.blocks > 0 ? "inline" : "none")}}
           transform="translate(1e-5,296.09119)">
          <path
             id="rect1100-6-3"
             style={{display:"inline", fill:"#cf396d", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"7.55902", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
             d="M 83.853652,4.529 112.38959,24.107 112.619,89.063134 C 112.626,91.063121 81.831,63.635471 81.831,63.635471 Z" />
          <path
             id="rect999-7-6"
             style={{display:"inline", fill:"#cf396d", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"7.55902", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
             d="M 4.5295,68.862044 H 83.750717 L 112.61883,92.106742 H 36.203221 Z" />
          <path
             id="rect389-5-0"
             style={{display:"inline", fill:"#da4565", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"7.55901", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
             d="M 4.5295,4.5295 H 81.83109 V 65.40724 H 4.5295 Z" />
        </g>
      </svg>
    );
}


export function OrangeBlock(props) {
    return (
         <svg version="1.1" id="svg222" width="120" height="392.72699" viewBox="0 0 120 392.72699" xmlns="http://www.w3.org/2000/svg">
           <g
              id="yellow_released"
              style={{display:(props.blocks > 1 ? "inline" : "none")}}
              transform="matrix(1,0,0,0.94812787,1e-5,0.23510207)">
             <path
                id="rect1100-6-3"
                style={{display:"inline", fill:"#e76f47", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"7.76304", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                d="M 83.853652,4.529 112.38959,24.107 112.619,202.50237 C 110.65729,202.11289 81.831,177.07471 81.831,177.07471 Z" />
             <path
                id="rect999-7-6"
                style={{display:"inline", fill:"#e76f47", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"7.76304", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                d="m 4.5295,183.01433 h 79.221217 l 28.868113,23.2447 H 36.203221 Z" />
             <path
                id="rect389-5-0"
                style={{display:"inline", fill:"#e78a58", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"7.76301", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                d="M 4.5295,4.5295 H 81.83109 V 179.46798 H 4.5295 Z" />
           </g>
           <g
              id="yellow_released-2"
              style={{display:(props.blocks > 0 ? "inline" : "none")}}
              transform="matrix(1,0,0,0.94812787,0.10200501,192.73678)">
             <path
                id="rect1100-6-3-0"
                style={{display:"inline", fill:"#e76f47", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"7.76304", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                d="M 83.853652,4.529 112.38959,24.107 112.619,202.50237 C 110.65729,202.11289 81.831,177.07471 81.831,177.07471 Z" />
             <path
                id="rect999-7-6-6"
                style={{display:"inline", fill:"#e76f47", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"7.76304", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                d="m 4.5295,183.01433 h 79.221217 l 28.868113,23.2447 H 36.203221 Z" />
             <path
                id="rect389-5-0-1"
                style={{display:"inline", fill:"#e78a58", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"7.76301", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                d="M 4.5295,4.5295 H 81.83109 V 179.46798 H 4.5295 Z" />
           </g>
         </svg>
    );
}

export function YellowBlock(props) {
    return (
    <svg version="1.1" id="svg222" width="120" height="392.72699" viewBox="0 0 120 392.72699" xmlns="http://www.w3.org/2000/svg">
        <g id="yellow" style={{display:"inline"}} transform="translate(-190)">
          <g 
             id="yellow_released" 
             style={{display:(props.blocks > 0 ? "inline" : "none")}}
             transform="translate(190.00001,1.7320023e-4)">
            <path
               id="rect1100-6-3"
               style={{display:"inline", fill:"#fab01d", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"7.55902", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
               d="M 83.853652,4.529 112.38959,24.107 112.619,389.112 C 110.65729,388.72252 81.831,363.68434 81.831,363.68434 Z" />
            <path
               id="rect999-7-6"
               style={{display:"inline", fill:"#fab01d", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"7.55902", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
               d="m 4.5295,365.87738 h 79.221217 l 28.868113,23.2447 H 36.203221 Z" />
            <path
               id="rect389-5-0"
               style={{display:"inline", fill:"#fadd2b", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"7.55902", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
               d="M 4.5295,4.5295 H 81.83109 V 361.9659 H 4.5295 Z" />
          </g>
        </g>

    </svg>
    );
}

export function GreenBlock(props) {
    return (
         <svg version="1.1" id="svg222" width="120" height="392.72699" viewBox="0 0 120 392.72699" xmlns="http://www.w3.org/2000/svg">
           <g
              id="yellow_released-2"
              style={{display:(props.blocks > 7 ? "inline" : "none")}}
              transform="matrix(1.0000033,0,0,0.77668457,0.50907438,0.56298576)">
             <path
                id="rect1100-6-3-0"
                style={{display:"inline", fill:"#9aad3b", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"8.57714", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                d="m 83.853652,4.529 28.535938,19.578 0.22941,41.451692 c 0.0111,1.99997 -30.788,-25.42766 -30.788,-25.42766 z" />
             <path
                id="rect999-7-6-2"
                style={{display:"inline", fill:"#9aad3b", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"8.57714", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                d="m 4.5295,46.114342 h 79.221217 l 28.868113,23.2447 H 36.203221 Z" />
             <path
                id="rect389-5-0-3"
                style={{display:"inline", fill:"#97be4d", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"8.57715", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                d="M 4.5295,4.5295 H 81.83109 V 42.594854 H 4.5295 Z" />
           </g>
           <g
              id="yellow_released-2-7"
              style={{display:(props.blocks > 6 ? "inline" : "none")}}
              transform="matrix(1.0000033,0,0,0.77668457,0.50907438,48.748444)">
             <path
                id="rect1100-6-3-0-5"
                style={{display:"inline", fill:"#9aad3b", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"8.57714", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                d="m 83.853652,4.529 28.535938,19.578 0.22941,41.451692 c 0.0111,1.99997 -30.788,-25.42766 -30.788,-25.42766 z" />
             <path
                id="rect999-7-6-2-9"
                style={{display:"inline", fill:"#9aad3b", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"8.57714", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                d="m 4.5295,46.114342 h 79.221217 l 28.868113,23.2447 H 36.203221 Z" />
             <path
                id="rect389-5-0-3-2"
                style={{display:"inline", fill:"#97be4d", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"8.57715", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                d="M 4.5295,4.5295 H 81.83109 V 42.594854 H 4.5295 Z" />
           </g>
           <g
              id="yellow_released-2-7-2"
              style={{display:(props.blocks > 5 ? "inline" : "none")}}
              transform="matrix(1.0000033,0,0,0.77668457,0.50907438,98.126331)">
             <path
                id="rect1100-6-3-0-5-8"
                style={{display:"inline", fill:"#9aad3b", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"8.57714", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                d="m 83.853652,4.529 28.535938,19.578 0.22941,41.451692 c 0.0111,1.99997 -30.788,-25.42766 -30.788,-25.42766 z" />
             <path
                id="rect999-7-6-2-9-9"
                style={{display:"inline", fill:"#9aad3b", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"8.57714", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                d="m 4.5295,46.114342 h 79.221217 l 28.868113,23.2447 H 36.203221 Z" />
             <path
                id="rect389-5-0-3-2-7"
                style={{display:"inline", fill:"#97be4d", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"8.57715", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                d="M 4.5295,4.5295 H 81.83109 V 42.594854 H 4.5295 Z" />
           </g>
           <g
              id="yellow_released-2-7-2-3"
              style={{display:(props.blocks > 4 ? "inline" : "none")}}
              transform="matrix(1.0000033,0,0,0.77668457,0.50907438,143.92967)">
             <path
                id="rect1100-6-3-0-5-8-6"
                style={{display:"inline", fill:"#9aad3b", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"8.57714", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                d="m 83.853652,4.529 28.535938,19.578 0.22941,41.451692 c 0.0111,1.99997 -30.788,-25.42766 -30.788,-25.42766 z" />
             <path
                id="rect999-7-6-2-9-9-1"
                style={{display:"inline", fill:"#9aad3b", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"8.57714", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                d="m 4.5295,46.114342 h 79.221217 l 28.868113,23.2447 H 36.203221 Z" />
             <path
                id="rect389-5-0-3-2-7-2"
                style={{display:"inline", fill:"#97be4d", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"8.57715", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                d="M 4.5295,4.5295 H 81.83109 V 42.594854 H 4.5295 Z" />
           </g>
           <g
              id="yellow_released-2-7-2-3-9"
              style={{display:(props.blocks > 3 ? "inline" : "none")}}
              transform="matrix(1.0000033,0,0,0.77668457,0.50907438,190.89658)">
             <path
                id="rect1100-6-3-0-5-8-6-3"
                style={{display:"inline", fill:"#9aad3b", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"8.57714", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                d="m 83.853652,4.529 28.535938,19.578 0.22941,41.451692 c 0.0111,1.99997 -30.788,-25.42766 -30.788,-25.42766 z" />
             <path
                id="rect999-7-6-2-9-9-1-1"
                style={{display:"inline", fill:"#9aad3b", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"8.57714", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                d="m 4.5295,46.114342 h 79.221217 l 28.868113,23.2447 H 36.203221 Z" />
             <path
                id="rect389-5-0-3-2-7-2-9"
                style={{display:"inline", fill:"#97be4d", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"8.57715", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                d="M 4.5295,4.5295 H 81.83109 V 42.594854 H 4.5295 Z" />
           </g>
           <g
              id="yellow_released-2-7-2-3-9-4"
              style={{display:(props.blocks > 2 ? "inline" : "none")}}
              transform="matrix(1.0000033,0,0,0.77668457,0.50907438,238.14082)">
             <path
                id="rect1100-6-3-0-5-8-6-3-7"
                style={{display:"inline", fill:"#9aad3b", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"8.57714", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                d="m 83.853652,4.529 28.535938,19.578 0.22941,41.451692 c 0.0111,1.99997 -30.788,-25.42766 -30.788,-25.42766 z" />
             <path
                id="rect999-7-6-2-9-9-1-1-8"
                style={{display:"inline", fill:"#9aad3b", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"8.57714", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                d="m 4.5295,46.114342 h 79.221217 l 28.868113,23.2447 H 36.203221 Z" />
             <path
                id="rect389-5-0-3-2-7-2-9-4"
                style={{display:"inline", fill:"#97be4d", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"8.57715", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                d="M 4.5295,4.5295 H 81.83109 V 42.594854 H 4.5295 Z" />
           </g>
           <g
              id="yellow_released-2-7-2-3-9-4-5"
              style={{display:(props.blocks > 1 ? "inline" : "none")}}
              transform="matrix(1.0000033,0,0,0.77668457,0.50907438,287.85448)">
             <path
                id="rect1100-6-3-0-5-8-6-3-7-0"
                style={{display:"inline", fill:"#9aad3b", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"8.57714", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                d="m 83.853652,4.529 28.535938,19.578 0.22941,41.451692 c 0.0111,1.99997 -30.788,-25.42766 -30.788,-25.42766 z" />
             <path
                id="rect999-7-6-2-9-9-1-1-8-3"
                style={{display:"inline", fill:"#9aad3b", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"8.57714", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                d="m 4.5295,46.114342 h 79.221217 l 28.868113,23.2447 H 36.203221 Z" />
             <path
                id="rect389-5-0-3-2-7-2-9-4-6"
                style={{display:"inline", fill:"#97be4d", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"8.57715", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                d="M 4.5295,4.5295 H 81.83109 V 42.594854 H 4.5295 Z" />
           </g>
           <g
              id="yellow_released"
              style={{display:(props.blocks > 0 ? "inline" : "none")}}
              transform="matrix(1.0000033,0,0,0.77668457,0.50906502,334.77599)">
             <path
                id="rect1100-6-3"
                style={{display:"inline", fill:"#9aad3b", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"8.57714", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                d="m 83.853652,4.529 28.535938,19.578 0.22941,41.451692 c 0.0111,1.99997 -30.788,-25.42766 -30.788,-25.42766 z" />
             <path
                id="rect999-7-6"
                style={{display:"inline", fill:"#9aad3b", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"8.57714", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                d="m 4.5295,46.114342 h 79.221217 l 28.868113,23.2447 H 36.203221 Z" />
             <path
                id="rect389-5-0"
                style={{display:"inline", fill:"#97be4d", fillOpacity:"1", stroke:(props.highlighted ? "#ffffff" : "#1c1117"), strokeWidth:"8.57715", strokeLinecap:"round", strokeLinejoin:"round", strokeOpacity:"1", paintOrder:"stroke fill markers"}}
                d="M 4.5295,4.5295 H 81.83109 V 42.594854 H 4.5295 Z" />
           </g>
         </svg>
    );
}



function ScaledBlocks(props) {

   const synth = new Tone.Synth().toDestination();
   synth.toDestination();


   const [marks, setMarks] = useState([false,false,false,false]);
   const [success, setSuccess] = useState(false);
   const successRef = useRef(success);
   successRef.current = success;
   const [waitingKey, setWaitingKey] = useState(false);
   const [isTesting, setIsTesting] = useState(false);
   const [validHit, setValidHit] = useState(false);

   const [highlightedNote, setHighlightedNote] = useState(0);

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

    const keyDownHandler = async ({ key }) => {
      await Tone.start();
       if (waitingKey) {
          setWaitingKey(false);
          testTiming();
      }
      if (key == 'a') {
        synth.triggerAttackRelease("C4", "1n");
        setSuccess(isTesting && validHit);
        setRedPressed(true);
      } else if (key == 's') {
        synth.triggerAttackRelease("D4", "2n");
        setSuccess(isTesting && validHit);
        setOrangePressed(true);
      } else if (key == 'd') {
        synth.triggerAttackRelease("E4", "4n");
        setSuccess(isTesting && validHit);
        setYellowPressed(true);
      } else if (key == 'f') {
        synth.triggerAttackRelease("F4", "8n");
        setSuccess(isTesting && validHit);
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


   const playSong = () => {
      setTimeout(() => {setHighlightedNote(1); synth.triggerAttackRelease("C4", "1n")}, 0);
      setTimeout(() => {setHighlightedNote(2); synth.triggerAttackRelease("D4", "2n")}, 1000);
      setTimeout(() => {setHighlightedNote(4); synth.triggerAttackRelease("F4", "8n")}, 1250);
      setTimeout(() => {setHighlightedNote(3); synth.triggerAttackRelease("E4", "4n")},  1750);
      setTimeout(() => {setHighlightedNote(0); setWaitingKey(true)}, 1875);
   }

   const testTiming = () => {
      setTimeout(() => {setIsTesting(true); setMarks([false,false,false,false]); console.log("play")}, 0);
      setTimeout(() => {setValidHit(true); setSuccess(true)}, 0);
      setTimeout(() => {setValidHit(false); console.log(successRef.current)}, 200);
      setTimeout(() => {setValidHit(true); setSuccess(false)}, 900);
      setTimeout(() => {setValidHit(false); console.log(successRef.current)}, 1100);
      setTimeout(() => {setValidHit(true); setSuccess(false)}, 1150);
      setTimeout(() => {setValidHit(false); console.log(successRef.current); setSuccess(false)}, 1350);
      setTimeout(() => {setValidHit(true); setSuccess(false)}, 1650);
      setTimeout(() => {setValidHit(false); console.log(successRef.current); setSuccess(false); setIsTesting(false)}, 1850);
      setTimeout(() => {console.log(marks)}, 2000);
   }

    useEventListener("keydown", keyDownHandler);
    useEventListener("keyup", keyUpHandler);

    return (
       <>
         <Grid container direction="row" justifyContent="center" alignItems="flex-end">
           <Grid xs={1} container item direction="column" justifyContent="center" alignItems="center">
              <YellowBlock highlighted={(highlightedNote===1) ? 1 : 0} blocks={1}/>
           </Grid>
           <Grid xs={1} container item direction="column" justifyContent="center" alignItems="center">
              <OrangeBlock highlighted={(highlightedNote===2) ? 1 : 0} blocks={1} />
           </Grid>
           <Grid xs={1} container item direction="column" justifyContent="center" alignItems="center">
              <RedBlock highlighted={(highlightedNote===3) ? 1 : 0} blocks={1}/>
           </Grid>
           <Grid xs={1} container item direction="column" justifyContent="center" alignItems="center">
              <GreenBlock highlighted={highlightedNote===4 ? 1 : 0} blocks={1}/>
           </Grid>
         </Grid>
         <button style={{margin:25}} onClick={async () => {await Tone.start(); playSong()}}>Play</button>
          <h2>{`${waitingKey ? "waiting" : "no"} - ${isTesting} - ${validHit} - ${success}`}</h2>
       </>
    );
};

export default ScaledBlocks;
