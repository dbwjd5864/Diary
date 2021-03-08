import React from 'react';

import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { FaArrowAltCircleRight } from 'react-icons/fa';

class ShowDate extends React.Component {
  render() {
    return (
      <>
        <div className="showDate">
          <div className="calendarContainer">
            <label className="visually-hidden">
              {' '}
              See your previous date's to-do lists{' '}
            </label>
            <button
              onClick={this.props.handlePreDateSubmit}
              type="submit"
              className="previousDate"
            >
              <FaArrowAltCircleLeft aria-hidden="true" />
            </button>

            <div className="calendar">
              <h3>{this.props.recentDate}</h3>
              <ul className="calendarList">
                {this.props.specificList.map((list) => (
                  <li key={list}>{list}</li>
                ))}
              </ul>
            </div>

            <label className="visually-hidden">
              {' '}
              See your next date's to-do lists{' '}
            </label>
            <button
              onClick={this.props.handleNextDateSubmit}
              type="submit"
              className="nextDate"
            >
              <FaArrowAltCircleRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default ShowDate;
