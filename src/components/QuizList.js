import { Card, CardContent, CardActions } from '@mui/material';
import {useState, useRef} from 'react';
import QuizCard from './QuizCard';

function QuizList() {

  const sampleQuestion = {
    type: "Note Identification",
    title: "Test test",
    sound: [3, 60, 2.5],
    choices: [
      { note: "C4-4n", sound: [3, 60, 2.5], correct: true},
      { note: "C5-4n", sound: [3, 62, 2.5], correct: false},
      { note: "C5-4n", sound: [3, 64, 2.5], correct: false},
      { note: "C5-4n", sound: [3, 65, 2.5], correct: false},
    ]
  };

  const [currentQuestion, setCurrentQuestion] = useState(sampleQuestion);

  return (
    <>
        <Card style={{ margin: 50 }}>
          <CardContent>
            <h2>Questions:</h2>
            <QuizCard question={currentQuestion} />
          </CardContent>
        </Card>
    </>
  );
}

export default QuizList;
