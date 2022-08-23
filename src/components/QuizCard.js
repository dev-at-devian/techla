import { Card, CardContent, CardActions } from '@mui/material';
import SVGMusicNotation from 'svg-music-notation';
import MIDISounds from 'midi-sounds-react';
import {useState, useRef} from 'react';
import SpeakerSVG from '../img/speaker.svg';

function QuizCard(props) {

  const [selectedAnswer, setSelectedAnswer] = useState(0);
  const question = props.question;
  let midiSounds = useRef(null);
  const choices = []

  for (let i = 0; i < question.choices.length; i++) {
    choices.push(
      <div style={{ border:((selectedAnswer === (i+1)) ? "4px solid black" : "none"), padding:10, borderRadius:25 }} 
            onClick={ () => {
               midiSounds.playChordNow(question.choices[i].sound[0], [question.choices[i].sound[1]], question.choices[i].sound[2]);
               setSelectedAnswer(i+1);
         }}>
         <img src={question.choices[i].note} width="100" height="60" />
      </div>
    );
  }

  return (
    <>
      <Card style={{ margin: 50, padding: 50 }}>
          <CardContent>
            <h2>{question.title}</h2>
            <div 
                 onClick={() => midiSounds.playChordNow(question.sound[0], [question.sound[1]], question.sound[2])}>
              <img width={100} src={SpeakerSVG} alt="Sound"/>
            </div>
          </CardContent>

          <CardActions style={{ justifyContent: "center" }}>
            {choices}
          </CardActions>
            <button onClick={() => {
              if (selectedAnswer === question.correct) {
                props.onCorrect();
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
