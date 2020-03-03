import React from 'react';

class Result extends React.Component {
  showHouseColor() {
    if (this.props.result == "Gryffindor") {
      return "gryffindor"
    } else if (this.props.result == "Hufflepuff") {
      return "hufflepuff"
    } else if (this.props.result == "Slytherin") {
      return "slytherin"
    } else if (this.props.result == "Ravenclaw") {
      return "ravenclaw"
    }
  }
  render() {
    return (
      <div className="quiz-container">
        <div className={`results-container ${this.showHouseColor()}`}>
          <h2 className="title">
            {this.props.result}
          </h2>
        </div>
      </div>
    )
  }
}

export default Result;