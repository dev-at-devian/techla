import { Card, CardContent, CardActions } from '@mui/material';
import SVGMusicNotation from 'svg-music-notation';
import MIDISounds from 'midi-sounds-react';
import {useState, useRef} from 'react';

function QuizCard() {
  const [selectedAnswer, setSelectedAnswer] = useState("Option 1");
  let midiSounds = useRef(null);

  return (
    <>
        <Card style={{ margin: 50 }}>
          <CardContent>
            Test test 2
          </CardContent>
            <CardActions style={{ justifyContent: "center" }}>

            <div>
              <button onClick={ () => midiSounds.playChordNow(3, [60], 2.5)}>
                <SVGMusicNotation width={100} height={100} source={"\\E C4-4n ||\n\\E"} />
              </button>
              <input type="radio" value="Option 1" checked={selectedAnswer === 'Option 1'} onChange={() => setSelectedAnswer("Option 1")} />
            </div>

            <div>
              <button onClick={ () => midiSounds.playChordNow(3, [62], 2.5)}>
                <SVGMusicNotation width={100} height={100} source={"\\E C4-4n ||\n\\E"} />
              </button>
              <input type="radio" value="Option 2" checked={selectedAnswer === 'Option 2'} onChange={() => setSelectedAnswer("Option 2")} />
            </div>

            <div>
              <button onClick={ () => midiSounds.playChordNow(3, [64], 2.5)}>
                <SVGMusicNotation width={100} height={100} source={"\\E C4-4n ||\n\\E"} />
              </button>
              <input type="radio" value="Option 3" checked={selectedAnswer === 'Option 3'} onChange={() => setSelectedAnswer("Option 3")} />
            </div>

            <div>
              <button onClick={ () => midiSounds.playChordNow(3, [65], 2.5)}>
                <SVGMusicNotation width={100} height={100} source={"\\E C4-4n ||\n\\E"} />
              </button>
              <input type="radio" value="Option 4" checked={selectedAnswer === 'Option 4'} onChange={() => setSelectedAnswer("Option 4")} />
            </div>
          </CardActions>
            <button onClick={() => {
              if (selectedAnswer === "Option 4") {
                console.log(true);
              } else {
                console.log(false);
              }
            }}>Submit</button>
        </Card>

        <div style={{ visibility: "collapse" }}>
          <MIDISounds ref={(ref) => (midiSounds = ref)} appElementName="root" instruments={[3]} />
        </div>

    </>

  );

}

export default QuizCard;
