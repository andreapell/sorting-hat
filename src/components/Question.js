import React from 'react';

class Question extends React.Component {
  render() {
    return (
      <h3>
        {this.props.content}
      </h3>
    )
  }
}

export default Question;