import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo,toggleCompleteTodo } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {

	const dispatch=useDispatch();

	const handleDeleteAction=()=>{
		dispatch(deleteTodo({id:id}));
	}
	const handleCompleteAction=()=>{
		dispatch(toggleCompleteTodo({id:id,completed:!completed}))
	}
	
	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' checked={completed} onChange={handleCompleteAction}></input>
					{title}
				</span>
				<button onClick={handleDeleteAction} className='btn btn-danger'>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
