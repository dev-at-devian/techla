import { Card, CardContent, CardActions } from '@mui/material';
import {useState, useRef} from 'react';
import QuizCard from './QuizCard';
import {getImgNota, getNota} from './Funcoes.js';
import SecondPrototype from './SecondPrototype';

function QuizList() {

  const [ended, setEnded] = useState(false);

  const sampleQuestion = {
    type: "Note Identification",
    title: "Chalange 1",
    sound: [3, 60, 2.5],
    correct: 1,
    choices: [
      { note: getImgNota("C"), sound: getNota("C")},
      { note: getImgNota("D"), sound: getNota("D")},
      { note: getImgNota("E"), sound: getNota("E")},
      { note: getImgNota("F"), sound: getNota("F")},
    ]
  };

  const sampleQuestion2 = {
    type: "Note Identification",
    title: "Chalange 2",
    sound: [3, 62, 2.5],
    correct: 4,
    choices: [
      { note: getImgNota("E"), sound: getNota("E")},
      { note: getImgNota("C"), sound: getNota("C")},
      { note: getImgNota("F"), sound: getNota("F")},
      { note: getImgNota("D"), sound: getNota("D")},
    ]
  };

  const sampleQuestion3 = {
    type: "Sequence Identification",
    title: "Chalange 3",
    sounds: [[3, 62, 2.5, 0], [3, 60, 2.5, 0.5], [3, 64, 0.5, 1]],
    correct: 4,
    choices: [
      { note: getImgNota("C"), sound: getNota("C")},
      { note: getImgNota("D"), sound: getNota("D")},
      { note: getImgNota("E"), sound: getNota("E")},
      { note: getImgNota("F"), sound: getNota("F")},
    ]
  };



  const [questions, setQuestions] = useState([sampleQuestion2, sampleQuestion3]);

  const [currentQuestion, setCurrentQuestion] = useState(sampleQuestion);

  const handleCorrectAnswer = () => {
    console.log(questions.length);
    if (questions.length > 0) {
      setCurrentQuestion(questions[0]);
      setQuestions(questions.slice(1));
    } else {
      setEnded(true);
    }
  }

  return (
    <>
        <Card style={{ margin: 50 }}>
          <CardContent>
            <h2>Questions:</h2>
            {ended ? <h2>Success</h2> : <QuizCard question={currentQuestion} onCorrect={handleCorrectAnswer} />}
          </CardContent>
          <SecondPrototype />
        </Card>
        
    </>
  );
}

export default QuizList;
