import React from 'react';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';

type ToDoProps = {
  lists: Array<any>
}

const ToDo = ({lists} : ToDoProps) => {

    return (
      <>
        <div className="listBox">
          <fieldset>
            <legend>To Do List</legend>
            <ul className="toDo-list">
              {lists.map(list => (
                <li key={list}>
                  <MdCheckBoxOutlineBlank aria-hidden="true" />
                  {list}
                </li>
              ))}
            </ul>
          </fieldset>
        </div>
      </>
  )
}
export default ToDo;
