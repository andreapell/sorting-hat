import React from 'react';

class AnswerOption extends React.Component {
  render() {
    return (
      <div className="answer-option">
        <input
          type="radio"
          className="radioCustomButton"
          name="radioGroup"
          checked={this.props.answerType === this.props.answer}
          id={this.props.answerType}
          value={this.props.answerType}
          disabled={this.props.answer}
          onChange={this.props.onAnswerSelected}
        />
        <label className="radioCustomLabel" htmlFor={this.props.answerType}>
          {this.props.answerContent}
        </label>
      </div>
    )
  }
}

export default AnswerOption;