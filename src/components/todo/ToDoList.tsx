import React from 'react';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';

interface ToDoProps {
  lists: any[];
}

const ToDoList = ({ lists }: ToDoProps) => {
  return (
    <>
      <div className="listBox">
        <fieldset>
          <legend>To Do List</legend>
          <ul className="toDo-list">
            {lists.map(list => {
              return (
                <li key={list}>
                  <MdCheckBoxOutlineBlank aria-hidden="true" />
                  {list}
                </li>
              );
            })}
          </ul>
        </fieldset>
      </div>
    </>
  );
};
export default ToDoList;
