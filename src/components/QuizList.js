import { Card, CardContent, CardActions } from '@mui/material';
import {useState, useRef} from 'react';
import QuizCard from './QuizCard';

function QuizList() {

  const sampleQuestion = {
    type: "Note Identification",
    title: "Test test",
    sound: [3, 60, 2.5],
    correct: 1,
    choices: [
      { note: "C4-4n", sound: [3, 60, 2.5]},
      { note: "D4-4n", sound: [3, 62, 2.5]},
      { note: "E4-4n", sound: [3, 64, 2.5]},
      { note: "F4-4n", sound: [3, 65, 2.5]},
    ]
  };

  const sampleQuestion2 = {
    type: "Note Identification",
    title: "Questão 2",
    sound: [3, 62, 2.5],
    correct: 4,
    choices: [
      { note: "C5-4n", sound: [3, 60, 2.5]},
      { note: "C5-4n", sound: [3, 62, 2.5]},
      { note: "C5-4n", sound: [3, 64, 2.5]},
      { note: "C5-4n", sound: [3, 65, 2.5]},
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
