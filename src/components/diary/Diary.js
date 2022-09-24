import React from 'react';
import axios from 'axios';

import DiaryQuote from './DiaryQuote.js';
import { FaHeart } from 'react-icons/fa';

class Diary extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);

    this.state = {
      recentDiary: '',
      newText: '',
      diaryValid: false,
      errorMessage: { diary: '' },
    };

    this.handleTextSubmit = this.handleTextSubmit.bind(this);
    this.handleTextUpdate = this.handleTextUpdate.bind(this);
  }

  //Get the latest diary when the site is loaded
  componentDidMount() {
    this._isMounted = true;

    axios
      .get('/api/v1/diary/latest')
      .then(result => {
        let latestOne = '';

        result.data.forEach(display => {
          latestOne = display.diary;
        });

        if (this._isMounted) {
          this.setState({
            recentDiary: latestOne,
          });
        }
      })
      .catch(error => console.log(error));
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  //Change the latest diary when the new diary is submitted
  componetDidUpdate(prevProps, prevState) {
    if (prevState.recentDiary != this.state.recentDiary) {
      axios
        .get('/api/v1/diary/latest')
        .then(result => {
          const latestOne = '';

          result.data.forEach(display => {
            latestOne = display.diary;
          });

          this.setState({
            recentDiary: latestOne,
          });
        })
        .catch(error => console.log(error));
    }
  }

  //Submit the new diary to api/v1/diary
  handleTextSubmit(event) {
    event.preventDefault();

    if (this.handleValidation()) {
      const newDiary = {
        diary: this.state.newText,
      };

      axios
        .post('/api/v1/diary', newDiary)
        .then(result => {
          const cloneText = this.state.newText;

          this.setState({
            recentDiary: cloneText,
            newText: '',
            errorMessage: { diary: '' },
          });
        })
        .catch(error => console.log(error));
    }
  }

  //Change the new text when the user type the new diary
  handleTextUpdate(event) {
    this.setState({
      newText: event.target.value,
    });
  }

  //Validate the input data is correct
  handleValidation() {
    let errorArray = {};
    let inputValid = true;

    //Diary Text validation
    if (this.state.newText.length < 8) {
      inputValid = false;
      errorArray = { diary: 'Please enter more than 8 characters' };
    }

    this.setState({
      diaryValid: inputValid,
      errorMessage: errorArray,
    });

    return inputValid;
  }

  render() {
    return (
      <>
        <div className="diary">
          <div className="diaryImgContainer">
            <div className="diaryImg_group">
              <img
                src="https://source.unsplash.com/random/200x200?sig=1"
                alt="diaryPhoto"
                className="diaryPhoto"
              />
              <img
                src="https://source.unsplash.com/random/200x200?sig=2"
                id="minMediaPhoto"
                alt="diaryPhoto"
                className="diaryPhoto"
              />
            </div>
            <div className="diaryQuote">
              <h2 className="diaryQuote-heading">Quote of the Day</h2>

              <DiaryQuote />
            </div>
          </div>

          <div className="diarySpace">
            <h2 className="diaryHeading">Dear Diary</h2>
            <div className="diaryForm">
              <div className="dearMyself">{this.state.recentDiary}</div>
              <form onSubmit={this.handleTextSubmit}>
                <label className="visually-hidden">
                  {' '}
                  Write your daily diary{' '}
                </label>
                <textarea
                  className="text"
                  value={this.state.newText}
                  onChange={this.handleTextUpdate}
                  placeholder="Write a Daily Diary"
                ></textarea>
                <label className="visually-hidden"> Submit your diary </label>
                <button type="submit" className="submitText">
                  <FaHeart aria-hidden="true" />
                </button>
              </form>
              {this.state.diaryValid ? (
                <small className="success">Successfully submitted</small>
              ) : (
                <small className="failure">
                  {this.state.errorMessage.diary}
                </small>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Diary;
