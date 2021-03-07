import React from 'react';
import { MdCheckBoxOutlineBlank } from "react-icons/md";

class ToDo extends React.Component {
    render() {
        return <>
            <div className='listBox'>
                <fieldset>
                    <legend>To Do List</legend>
                    <ul className='toDo-list'>
                        {this.props.lists.map(list=><li key={list}><MdCheckBoxOutlineBlank aria-hidden="true" />{list}</li>)}
                    </ul>
                </fieldset>
            </div>
        </>
    }
}
export default ToDo;