import React from 'react';
import axios from 'axios';

class DiaryQuote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: '',
      author: '',
    };
  }
  componentDidMount() {
    axios
      .get('https://api.quotable.io/random')
      .then(result => {
        const content = result.data.content;
        const author = result.data.author;

        this.setState({
          quote: content,
          author: author,
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="diaryQuote-container">
        <p className="diaryQuote-content">{this.state.quote}</p>
        <p className="diaryQuote-author">{this.state.author}</p>
      </div>
    );
  }
}

export default DiaryQuote;
