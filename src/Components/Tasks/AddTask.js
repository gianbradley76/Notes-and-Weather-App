/* eslint-disable no-unused-vars */
import { MdOutlineAddCircle } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import './AddTask.css';

function AddTask(props) {
	const [task, setTask] = useState({
		taskDesc: '',
		deadline: new Date(),
		isImportant: false,
	});

	function handleChange(event) {
		const { name, value, type, checked } = event.target;
		setTask((prevTaskData) => {
			return {
				...prevTaskData,
				[name]: type === 'checkbox' ? checked : value,
			};
		});
	}

	return (
		<div className='add-task-block'>
			<button
				onClick={() => props.handleAddTask(task)}
				className='add-task-btn'
			>
				<MdOutlineAddCircle className='add-task-icon' />
			</button>
			<input
				type='text'
				placeholder='Task'
				onChange={handleChange}
				name='taskDesc'
				value={task.taskDesc}
				className='task-block--task-input'
			/>
			<div className='task-datepicker-container'>
				<DatePicker
					onChange={(date) => {
						setTask((prevTaskData) => {
							return {
								...prevTaskData,
								deadline: date,
							};
						});
					}}
					name='taskDeadline'
					selected={task.deadline}
					dateFormat={'dd-MMM-yy'}
					minDate={new Date()}
					className='task-datepicker'
				/>
			</div>
			<label className='task--importance' htmlFor='isImportant'>
				Important
				<input
					type='checkbox'
					id='isImportant'
					checked={task.isImportant}
					onChange={handleChange}
					name='isImportant'
					className='task--importance-box'
				/>
				<span className='checkmark'></span>
			</label>
		</div>
	);
}

export default AddTask;
