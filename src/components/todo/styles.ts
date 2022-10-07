import styled from 'styled-components';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';

export const ListContainer = styled.div`
  text-align: center;
`;

export const Fieldset = styled.fieldset`
  border-radius: 10px 0px 10px 0px;
  border: 5px solid #d5c3b0;
  overflow: scroll;
`;

export const Legend = styled.legend`
  font-size: 1.5em;
  padding: 5px;
`;

export const ToDoListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  max-height: 150px;
`;

export const ToDoListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CheckBoxOutlineBlank = styled(MdCheckBoxOutlineBlank)`
  padding: 4px;
  padding-right: 6px;
  margin-top: 2px;
`;

export const CalendarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Button = styled.button`
  border: none;
  font-size: 1.5em;
  background-color: transparent;
`;

export const Calendar = styled.div`
  margin: 10px;
  padding: 10px;
  text-align: center;
`;

export const CalendarList = styled.ul`
  padding-left: 0;
  list-style-type: none;
`;
