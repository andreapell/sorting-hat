import React from 'react';

class Question extends React.Component {
  render() {
    return (
      <div className="question-container">
        <h3 className="question">{this.props.content}</h3>
      </div>
    )
  }
}

export default Question;