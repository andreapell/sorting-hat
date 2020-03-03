import React from 'react';

class Result extends React.Component {
  showHouseColor() {
    if (this.props.result === "Gryffindor") {
      return "gryffindor"
    } else if (this.props.result === "Hufflepuff") {
      return "hufflepuff"
    } else if (this.props.result === "Slytherin") {
      return "slytherin"
    } else if (this.props.result === "Ravenclaw") {
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
            {this.props.result === "Gryffindor" && (
              <div>
                <div className="house-crest gryffindor-crest"/>
                <p className="house-description gryffindor-description">
                  Gryffindor values courage, bravery, nerve, and chivalry.
                </p>
              </div>
            )}
            {this.props.result === "Hufflepuff" && (
              <div>
                <div className="house-crest hufflepuff-crest"/>
                <p className="house-description hufflepuff-description">
                  Hufflepuff values hard work, patience, justice, and loyalty.
                </p>
              </div>
            )}
            {this.props.result === "Ravenclaw" && (
              <div>
                <div className="house-crest ravenclaw-crest"/>
                <p className="house-description ravenclaw-description">
                  Ravenclaw values intelligence, creativity, learning, and wit.
                </p>
              </div>
            )}
            {this.props.result === "Slytherin" && (
              <div>
                <div className="house-crest slytherin-crest"/>
                <p className="house-description slytherin-description ">
                  Slytherin values ambition, cunning, leadership, and resourcefulness.
                </p>
              </div>
            )}
        </div>
      </div>
    )
  }
}

export default Result;