import React from 'react';

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { Button, Calendar, CalendarContainer, CalendarList } from './styles';

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
    <div>
      <CalendarContainer>
        <Button onClick={handlePreDateSubmit} type="button">
          <FaArrowAltCircleLeft aria-hidden="true" />
        </Button>

        <Calendar>
          <h3>{recentDate}</h3>
          <CalendarList>
            {specificList.map(list => (
              <li key={list}>{list}</li>
            ))}
          </CalendarList>
        </Calendar>

        <Button onClick={handleNextDateSubmit} type="button">
          <FaArrowAltCircleRight aria-hidden="true" />
        </Button>
      </CalendarContainer>
    </div>
  );
};
export default ToDoDate;
