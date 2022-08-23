import logo from './logo.svg';
import './App.css';
import beep from './beep.wav';
import Piano from './Piano';
import SVGMusicNotation from 'svg-music-notation';
import MIDISounds from 'midi-sounds-react';
import {useState, useRef} from 'react';
import { Card, CardContent, CardActions } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizCard from './components/QuizCard';

function App() {
  const alarm = new Audio(beep);
  const [selectedAnswer, setSelectedAnswer] = useState("Option 1");
  let midiSounds = useRef(null);
  const userSource = `
                      \\E C5-4n ||
                      \\E 
`;
  return (
    <div className="App">
      <BrowserRouter>
        <Piano whiteKeysColor="#000000" blackKeysColor="#ff0" stroke="#ff0"/>

        <Routes>
            <Route path="/" element={<div>lalala</div>} />
            <Route path="/test" element={<QuizCard />} />
            <Route path="*" element={<div>lol</div>} />
        </Routes>

        <div style={{ visibility: "collapse" }}>
          <MIDISounds ref={(ref) => (midiSounds = ref)} appElementName="root" instruments={[3]} />
        </div>
      </BrowserRouter>

    </div>
  );
};

export default App;
