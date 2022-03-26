import React from 'react';
import { useSelector } from 'react-redux';

const TotalCompleteItems = () => {
	const todo=useSelector((state)=>
	state.todo.filter((data)=>
	data.completed===true
	))
	return <h4 className='mt-3'>Total Complete Items: 
	{todo.length}</h4>;
};

export default TotalCompleteItems;
