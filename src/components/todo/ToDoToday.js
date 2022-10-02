import React from 'react';
import axios from 'axios';

import ToDoList from './ToDoList.tsx';
import ToDoDate from './ToDoDate.js';

import { FaPencilAlt } from 'react-icons/fa';

class ToDoToday extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      toDo: [],
      dates: [],
      specificList: [],
      currentDate: '',
      recentDate: '',
      newToDo: '',
      todoValid: false,
      dateValid: false,
      errorMessage: { todo: '', date: '' },
    };

    this.handleToDoUpdate = this.handleToDoUpdate.bind(this);
    this.handleDateUpdate = this.handleDateUpdate.bind(this);
    this.handleToDoSubmit = this.handleToDoSubmit.bind(this);
    this.handlePreDateSubmit = this.handlePreDateSubmit.bind(this);
    this.handleNextDateSubmit = this.handleNextDateSubmit.bind(this);
  }

  // Get all the to-do lists from the previous date to the recent one and show under the To Do List
  componentDidMount() {
    this._isMounted = true;

    axios
      .get('/api/v1/toDoLists')
      .then(result => {
        const listArray = [];
        const dateArray = [];

        result.data.forEach(display => {
          for (let i = 0; i < display.list.length; i++) {
            listArray.push(display.list[i].list);
          }
          dateArray.push(display.dateWritten);
        });

        if (this._isMounted) {
          this.setState({
            toDo: listArray,
            dates: dateArray,
            recentDate: dateArray[dateArray.length - 1],
          });
        }

        const specificDatePromise = axios.get(
          `/api/v1/toDoLists/${this.state.recentDate}`,
        );
        return specificDatePromise;
      })
      .then(specificResult => {
        const lists = [];

        specificResult.data.list.forEach(display => {
          lists.push(display.list);
        });

        if (this._isMounted) {
          this.setState({
            specificList: lists,
          });
        }
      })
      .catch(error => console.log(error));
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  // Change the to do list array when the user type new to-do list and update the To Do List
  componentDidUpdate(prevProps, prevState) {
    if (prevState.toDo !== this.state.toDo) {
      axios
        .get('/api/v1/toDoLists')
        .then(result => {
          const dateArray = [];

          result.data.forEach(display => {
            dateArray.push(display.dateWritten);
          });

          this.setState({
            dates: dateArray,
            recentDate: dateArray[dateArray.length - 1],
          });

          const specificDatePromise = axios.get(
            `/api/v1/toDoLists/${this.state.recentDate}`,
          );
          return specificDatePromise;
        })
        .then(specificResult => {
          const lists = [];

          specificResult.data.list.forEach(display => {
            lists.push(display.list);
          });

          this.setState({
            specificList: lists,
          });
        })
        .catch(error => console.log(error));
    }
  }

  // OnChange for the input of to do
  handleToDoUpdate(event) {
    this.setState({
      newToDo: event.target.value,
    });
  }

  // OnChange for the input of date
  handleDateUpdate(event) {
    this.setState({
      currentDate: event.target.value,
    });
  }

  // Post new to do list and date
  handleToDoSubmit(event) {
    event.preventDefault();

    if (this.handleValidation()) {
      const datePost = {
        text: this.state.newToDo,
        date: this.state.currentDate,
      };

      axios
        .post('/api/v1/toDoLists', datePost)
        .then(result => {
          const cloneToDoArray = this.state.toDo.slice();
          cloneToDoArray.push(this.state.newToDo);

          this.setState({
            newToDo: '',
            toDo: cloneToDoArray,
            todoValid: true,
            dateValid: true,
            errorMessage: { todo: '', date: '' },
          });
        })
        .catch(error => console.log(error));
    }
  }

  // Show the previous date's to do lists
  handlePreDateSubmit(event) {
    event.preventDefault();

    let index = this.state.dates.indexOf(this.state.recentDate);
    if (index === 0) {
      this.setState({
        recentDate: this.state.dates[this.state.dates.length - 1],
      });
      index = this.state.dates.length;
    }

    axios
      .get(`/api/v1/toDoLists/${this.state.dates[index - 1]}`)
      .then(previousDate => {
        const lists = [];

        previousDate.data.list.forEach(display => {
          lists.push(display.list);
        });

        this.setState({
          recentDate: this.state.dates[index - 1],
          specificList: lists,
        });
      })
      .catch(error => console.log(error));
  }

  // Show the next date's to do lists
  handleNextDateSubmit(event) {
    event.preventDefault();

    let index = this.state.dates.indexOf(this.state.recentDate);
    if (index === this.state.dates.length - 1) {
      this.setState({
        recentDate: this.state.dates[0],
      });
      index = 0;
    } else if (index === 0) {
      index++;
      this.setState({
        recentDate: this.state.dates[index],
      });
    } else {
      index++;
    }

    axios
      .get(`/api/v1/toDoLists/${this.state.dates[index]}`)
      .then(nextDate => {
        const lists = [];

        nextDate.data.list.forEach(display => {
          lists.push(display.list);
        });

        this.setState({
          recentDate: this.state.dates[index],
          specificList: lists,
        });
      })
      .catch(error => console.log(error));
  }

  // Validate the input data is correct
  handleValidation() {
    const errorArray = { todo: '', date: '' };
    let todoValidClone = true;
    let dateValidClone = true;
    let inputValid = true;
    const expressionDate = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;

    // todo validation
    if (this.state.newToDo.length < 5) {
      todoValidClone = false;
      errorArray.todo = 'Please enter more than 5 characters';
    } else {
      errorArray.todo = '';
    }

    // date validation
    if (this.state.currentDate.length === 0) {
      dateValidClone = false;
      errorArray.date = 'Please enter a date';
    } else if (!this.state.currentDate.match(expressionDate)) {
      dateValidClone = false;
      errorArray.date =
        'Please enter a date format of YYYY-MM-DD and proper number';
    } else {
      errorArray.date = '';
    }

    this.setState({
      todoValid: todoValidClone,
      dateValid: dateValidClone,
      errorMessage: errorArray,
    });

    if (!todoValidClone || !dateValidClone) {
      inputValid = false;
    }

    return inputValid;
  }

  render() {
    return (
      <>
        <div className="today">
          <ToDoList lists={this.state.toDo} />
          <div className="newSubmit">
            <form onSubmit={this.handleToDoSubmit}>
              <label>
                Choose a date:
                <input
                  onChange={this.handleDateUpdate}
                  type="date"
                  id="datePicker"
                  value={this.state.currentDate}
                  placeholder="YYYY-MM-DD"
                />
              </label>
              <input
                onChange={this.handleToDoUpdate}
                type="text"
                value={this.state.newToDo}
                placeholder="Make a To-Do List"
              />

              <label className="visually-hidden">
                {' '}
                Submit your to-do list{' '}
              </label>
              <button type="submit" className="toDoButton">
                <FaPencilAlt aria-hidden="true" />
              </button>
            </form>
            <div className="submitResult">
              {this.state.todoValid && this.state.dateValid ? (
                <small className="success">Successfully submitted</small>
              ) : !this.state.todoValid && !this.state.dateValid ? (
                <div className="todoFailure">
                  <small className="failure">
                    {this.state.errorMessage.todo}
                  </small>
                  <small className="failure">
                    {this.state.errorMessage.date}
                  </small>
                </div>
              ) : !this.state.todoValid ? (
                <small className="failure">
                  {this.state.errorMessage.todo}
                </small>
              ) : (
                <small className="failure">
                  {this.state.errorMessage.date}
                </small>
              )}
            </div>
          </div>
          <ToDoDate
            recentDate={this.state.recentDate}
            specificList={this.state.specificList}
            handlePreDateSubmit={this.handlePreDateSubmit}
            handleNextDateSubmit={this.handleNextDateSubmit}
          />
        </div>
      </>
    );
  }
}
export default ToDoToday;
