import { MdDelete } from 'react-icons/md';
import './TaskBlock.css';
/* eslint-disable no-unused-vars */

function TaskBlock(props) {
	const taskId = props.taskData.id;
	const taskDesc = props.taskData.taskDesc;
	const deadline = props.taskData.deadline;
	const isImportant = props.taskData.isImportant;
	console.log(props);

	return (
		<div className='task-block'>
			<p className='task-block--description'>{taskDesc}</p>
			<p className='task-block--deadline'>{deadline.getDate()}</p>
			<button
				className='task-block--toggle-important'
				onClick={() => props.handleToggleImportant(taskId)}
			>
				{isImportant ? 'Make Important' : "Don't make important"}
			</button>
			<button
				className='task-block--dlt-task'
				onClick={() => props.handleDelete(taskId)}
			>
				<MdDelete />
			</button>
		</div>
	);
}

export default TaskBlock;
