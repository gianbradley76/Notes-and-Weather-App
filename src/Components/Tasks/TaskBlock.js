import { MdDelete } from 'react-icons/md';

/* eslint-disable no-unused-vars */

function TaskBlock(props) {
	const taskId = props.taskData.id;
	const taskDesc = props.taskData.taskDesc;
	const deadline = props.taskData.deadline;
	const isImportant = props.taskData.isImportant;

	return (
		<div className='task-block'>
			<h1>Sanity Check</h1>
			<p className='task-block--description'>{taskDesc}</p>
			<p className='task-block--deadline'>{deadline.getDate()}</p>

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
