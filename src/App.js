import React, { useState } from 'react';
import Question from './Questions';
import Score from './Score';
import './App.css';

const questions = [
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'Berlin', isCorrect: false },
      { answerText: 'Madrid', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Lisbon', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    questionText: 'How many ribs are there in the human body?',
    answerOptions: [
      { answerText: '18', isCorrect: false },
      { answerText: '24', isCorrect: true },
      { answerText: '32', isCorrect: false },
      { answerText: '42', isCorrect: false },
    ],
  },
  {
    questionText: 'How is 4:00 pm expressed in military time?',
    answerOptions: [
      { answerText: '1600', isCorrect: true },
      { answerText: '004', isCorrect: false },
      { answerText: '0400', isCorrect: false },
      { answerText: '4:00', isCorrect: false },
    ],
  },
  {
    questionText: 'What animal is considered sacred in India?',
    answerOptions: [
      { answerText: 'Sheep', isCorrect: false },
      { answerText: 'Horse', isCorrect: false },
      { answerText: 'Cow', isCorrect: true },
      { answerText: 'Dog', isCorrect: false },
    ],
  },

];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <Score score={score} totalQuestions={questions.length} />
      ) : (
        <Question
          question={questions[currentQuestion]}
          onAnswerClick={handleAnswerOptionClick}
        />
      )}
    </div>
  );
}

export default App;
