import React from 'react';
import AnswerOption from '../components/AnswerOption';
import Question from '../components/Question'
import './styles/quiz.css'

function Quiz(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return (
    <div className="quiz-container" key={props.questionId}>
      <div className="question-and-answers">
        <Question content={props.question} />
        <div className="answer-options-container">
          {props.answerOptions.map(renderAnswerOptions)}
        </div>
      </div>
    </div>
  );
}

export default Quiz;