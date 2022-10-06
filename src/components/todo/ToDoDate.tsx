import React from 'react';

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

interface ToDoDateProps {
  recentDate: string;
  specificList: string[];
  handleNextDateSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handlePreDateSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ToDoDate = ({
  recentDate,
  specificList,
  handleNextDateSubmit,
  handlePreDateSubmit,
}: ToDoDateProps) => {
  return (
    <>
      <div className="showDate">
        <div className="calendarContainer">
          <label className="visually-hidden">
            {' '}
            See your previous date's to-do lists{' '}
          </label>
          <button
            onClick={handlePreDateSubmit}
            type="button"
            className="previousDate">
            <FaArrowAltCircleLeft aria-hidden="true" />
          </button>

          <div className="calendar">
            <h3>{recentDate}</h3>
            <ul className="calendarList">
              {specificList.map(list => (
                <li key={list}>{list}</li>
              ))}
            </ul>
          </div>

          <label className="visually-hidden">
            {' '}
            See your next date's to-do lists{' '}
          </label>
          <button
            onClick={handleNextDateSubmit}
            type="button"
            className="nextDate">
            <FaArrowAltCircleRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </>
  );
};
export default ToDoDate;
