import { Card, CardContent, CardActions } from '@mui/material';
import SVGMusicNotation from 'svg-music-notation';
import MIDISounds from 'midi-sounds-react';
import {useState, useRef} from 'react';
import SpeakerSVG from '../img/speaker.svg';

function QuizCard(props) {

  const [selectedAnswer, setSelectedAnswer] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const question = props.question;
  let midiSounds = useRef(null);
  const choices = []

  function ChoiceSelector(props) {
    return (
      <>
        {props.question.choices.map((choice, index) => {
          return (
          <div style={{ border:((props.selectedAnswer === (index+1)) ? "4px solid black" : "none"), padding:10, borderRadius:25 }} 
                onClick={ () => {
                   if (props.question.type === "Note Identification") {
                      midiSounds.playChordNow(choice.sound[0], [choice.sound[1]], choice.sound[2]);
                   } else if (props.question.type === "Sequence Identification") {
                      choice.sound.forEach(sound => {
                      midiSounds.playChordAt(midiSounds.contextTime() + sound[3], sound[0], [sound[1]], sound[2]);
                    });
                   };

                   props.setSelectedAnswer(index+1);
             }}>
             <img src={choice.note} width="100" height="60" alt={`choice ${index}`}/>
          </div>
          );
        })}
      </>
    );
  }

  for (let i = 0; i < question.choices.length; i++) {
    choices.push(
      <div style={{ border:((selectedAnswer === (i+1)) ? "4px solid black" : "none"), padding:10, borderRadius:25 }} 
            onClick={ () => {
               if (question.type === "Note Identification") {
                  midiSounds.playChordNow(question.choices[i].sound[0], [question.choices[i].sound[1]], question.choices[i].sound[2]);
               } else if (question.type === "Sequence Identification") {
                question.choices[i].sound.forEach(sound => {
                  midiSounds.playChordAt(midiSounds.contextTime() + sound[3], sound[0], [sound[1]], sound[2]);
                });
               };

               setSelectedAnswer(i+1);
         }}>
         <img src={question.choices[i].note} width="100" height="60" />
      </div>
    );
  }

  const handlePlay = (question, index=0) => {
    let toPlay = null;
    if (index === 0) {
      toPlay = question.sound;
    } else {
      toPlay = question.choices[index];
    }
    if (question.type === "Note Identification") {
      midiSounds.playChordNow(toPlay[0], [toPlay[1]], toPlay[2]);
    } else if (question.type === "Sequence Identification") {
      toPlay.forEach(sound => {
        midiSounds.playChordAt(midiSounds.contextTime() + sound[3], sound[0], [sound[1]], sound[2]);
      });
    }
  }

  return (
    <>
      <div style={{ display: (isAnswered ? "none" : "inline") }}>
        <Card style={{ margin: 50, padding: 50 }}>
            <CardContent>
              <h2>{question.title}</h2>
              <div onClick={() => handlePlay(question)}>
                <img width={100} src={SpeakerSVG} alt="Sound"/>
              </div>
            </CardContent>

            <CardActions style={{ justifyContent: "center" }}>
              <ChoiceSelector question={question} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} onPlay={(question, index) => handlePlay(question, index)}/>
            </CardActions>
              <button onClick={() => {
                if (selectedAnswer === question.correct) {
                  console.log(true);
                } else {
                  console.log(false);
                }
                setIsAnswered(true);
              }}>Submit</button>
          </Card>
        </div>
        <div style= {{ display: (isAnswered ? "inline" : "none") }}>
          <Card style={{ margin: 50, padding: 50 }}>
            <CardContent>
              <h2>{(selectedAnswer === question.correct) ? "Correct!" : "Oops!"}</h2>
            </CardContent>

            <CardActions style={{ justifyContent: "center" }}>
              <div style={{ display: ((selectedAnswer === question.correct) ? "none" : "inline"), 
                            border:"4px solid #ff0033", padding:10, borderRadius:25 }}>
                <img src={question.choices[(selectedAnswer != 0 ? selectedAnswer : 1)-1].note}
                     alt="Your Answer" width="100" height="60" />
              </div>
              <div style={{ border:"4px solid #00ff33", padding:10, borderRadius:25 }}>
                <img src={question.choices[question.correct-1].note} 
                     alt="Correct Answer" width="100" height="60" />
              </div>
            </CardActions>
              <button onClick={() => {
                if (selectedAnswer === question.correct) {
                  props.onCorrect();
                } else {
                  props.onIncorrect();
                }
                setIsAnswered(false);
                setSelectedAnswer(0);
              }}>Continue</button>
          </Card>
        </div>

        <div style={{ visibility: "collapse" }}>
          <MIDISounds ref={(ref) => (midiSounds = ref)} appElementName="root" instruments={[3]} />
        </div>

    </>

  );

}

export default QuizCard;
