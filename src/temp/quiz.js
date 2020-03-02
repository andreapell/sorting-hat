import React from 'react';
import AnswerOption from '../components/AnswerOption';
import Question from '../components/Question'

class Quiz extends React.Component {
  renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={key.answer}
        questionId={this.props.questionId}
        onAnswerSelected={key.onAnswerSelected}
      />
    );
  }

  render() {
    return (
      <div key={this.props.questionId}>
        <Question content={this.props.question}/>
        {this.props.answerOptions.map(this.renderAnswerOptions)}
      </div>

             
        {/* {quizQuestions.map( quizQuestion => (
          <div>
            {quizQuestion.answers.map(answer => (
             <AnswerOption answerContent={answer.content}/>
            ))}
          </div>
        ))} */}
    )
  }
}

export default Quiz;