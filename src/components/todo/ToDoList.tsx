import React from 'react';
import {
  CheckBoxOutlineBlank,
  Fieldset,
  Legend,
  ListContainer,
  ToDoListContainer,
  ToDoListItem,
} from './styles';

interface ToDoProps {
  lists: any[];
}

const ToDoList = ({ lists }: ToDoProps) => {
  return (
    <>
      <ListContainer>
        <Fieldset>
          <Legend>To Do List</Legend>
          <ToDoListContainer>
            {lists.map(list => {
              return (
                <ToDoListItem key={list}>
                  <CheckBoxOutlineBlank aria-hidden="true" />
                  {list}
                </ToDoListItem>
              );
            })}
          </ToDoListContainer>
        </Fieldset>
      </ListContainer>
    </>
  );
};
export default ToDoList;
