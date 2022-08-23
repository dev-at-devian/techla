import { Card, CardContent, CardActions } from '@mui/material';
import {useState, useRef} from 'react';
import QuizCard from './QuizCard';
import {getImgNota, getNota} from './Funcoes.js';

function QuizList() {

  const sampleQuestion = {
    type: "Note Identification",
    title: "Test test",
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
    title: "Questão 2",
    sound: [3, 62, 2.5],
    correct: 4,
    choices: [
      { note: getImgNota("E"), sound: getNota("E")},
      { note: getImgNota("C"), sound: getNota("C")},
      { note: getImgNota("F"), sound: getNota("F")},
      { note: getImgNota("D"), sound: getNota("D")},
    ]
  };


  const questions = [sampleQuestion2];

  const [currentQuestion, setCurrentQuestion] = useState(sampleQuestion);

  const handleCorrectAnswer = () => {
    setCurrentQuestion(questions.pop());
  }

  return (
    <>
        <Card style={{ margin: 50 }}>
          <CardContent>
            <h2>Questions:</h2>
            <QuizCard question={currentQuestion} onCorrect={handleCorrectAnswer} />
          </CardContent>
        </Card>
    </>
  );
}

export default QuizList;
