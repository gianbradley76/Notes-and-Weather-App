import { MdDelete } from 'react-icons/md';
import { BsExclamation } from 'react-icons/bs';
import formatDate from '../../utils/formatDate';
import './TaskBlock.css';

function TaskBlock(props) {
	const taskId = props.taskData.id;
	const taskDesc = props.taskData.taskDesc;
	const deadline = new Date(props.taskData.deadline);
	const isImportant = props.taskData.isImportant;

	return (
		<div className='task-block'>
			<button
				className='task-block--toggle-important'
				onClick={() => props.handleToggleImportant(taskId)}
			>
				<BsExclamation style={{ opacity: isImportant ? 1 : 0.5 }} />
			</button>
			<p className='task-block--description'>{taskDesc}</p>
			<p className='task-block--deadline'>{formatDate(deadline)}</p>

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
