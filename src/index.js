import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './components/Quiz'
import Result from './components/Result'
import quizQuestions from './data/quizQuestions'

class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        Gryffindor: 0,
        Slytherin: 0,
        Ravenclaw: 0,
        Hufflepuff: 0,
      },
      result: ''
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    const answers = quizQuestions.map((question) => question.answers);  
  
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: answers[0]
    });
  }

  handleAnswerSelected(e) {
    this.setUserAnswer(e.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
        setTimeout(() => this.setNextQuestion(), 300);
      } else {
        setTimeout(() => this.setResults(this.getResults()), 500);
      }
  }

  setUserAnswer(answer) {
    this.setState((state) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
  
    const filteredKey = answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
    console.log(answersCount)
    console.log(filteredKey)
    return filteredKey
  }

  setResults (result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: result[Math.floor(Math.random() * result.length)]});
    }
  }

  render() {
    return (
      <div>
        {this.state.result ? (
          <Result result={this.state.result}/>
        ) : (
          <Quiz
            answer={this.state.answer}
            answerOptions={this.state.answerOptions}
            questionId={this.state.questionId}
            question={this.state.question}
            questionTotal={quizQuestions.length}
            onAnswerSelected={this.handleAnswerSelected}
          />
        )}
      </div>
    )
  }
}

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);