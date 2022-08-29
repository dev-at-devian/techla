import { Card, CardContent, CardActions } from '@mui/material';
import {useState, useRef} from 'react';
import QuizCard from './QuizCard';
import {getImgNota, getNota} from './Funcoes.js';
import FreePlayKeyboard from './FreePlayKeyboard';
import TimingTestCard from './TimingTestCard';
import {useNavigate} from "react-router-dom";

function ChallengeList() {

  const navigate = useNavigate();
  const [ended, setEnded] = useState(false);
  const [score, setScore] = useState(0);

  const sampleQuestion = {
    type: "Note Identification",
    title: "Which note do you hear?",
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
    title: "Which note do you hear?",
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
    type: "Timing Test",
  }

  const sampleQuestion4 = {
    type: "Sequence Identification",
    title: "Which sequence do you hear?",
    sound: [[3, 62, 2.5, 0], [3, 60, 2.5, 0.5], [3, 64, 0.5, 1]],
    correct: 4,
    choices: [
      { note: getImgNota("1"), sound: getNota("1")},
      { note: getImgNota("2"), sound: getNota("2")},
      { note: getImgNota("3"), sound: getNota("3")},
      { note: getImgNota("4"), sound: getNota("4")},
    ]
  };

  const [questions, setQuestions] = useState([sampleQuestion2, sampleQuestion3, sampleQuestion4]);

  const [currentQuestion, setCurrentQuestion] = useState(sampleQuestion);

  const handleAnswer = () => {
    console.log(questions.length);
    if (questions.length > 0) {
      setCurrentQuestion(questions[0]);
      setQuestions(questions.slice(1));
    } else {
      setEnded(true);
    }
  }

  const handleCorrectAnswer = () => {
    setScore(score+1);
    handleAnswer();
  }

  const handleIncorrectAnswer = () => {
    handleAnswer();
  }

  return (
    <>
        <div>
          Score: {score}
        </div>
        <div style={{ display:(ended ? "none" : "inline") }}>
          <Card style={{ margin: 50 }}>
            <CardContent>
              <h2>Challenges:</h2>
              { currentQuestion.type === "Timing Test" ?
                <TimingTestCard question={currentQuestion} onCorrect={handleCorrectAnswer} onIncorrect={handleIncorrectAnswer} />
                :
                <QuizCard question={currentQuestion} onCorrect={handleCorrectAnswer} onIncorrect={handleIncorrectAnswer} />
              }
            </CardContent>
          </Card>
        </div>
        <div style={{ display:(ended ? "inline" : "none") }}>
          <Card style={{ margin: 50 }}>
            <CardContent>
              <h1>Finished!</h1>
              <h3>Score: {score}</h3>
              <button onClick={() => navigate("/")}>Return</button>
            </CardContent>
          </Card>
        </div>
        <div>
          <FreePlayKeyboard />
        </div>
 
        
    </>
  );
}

export default ChallengeList;
