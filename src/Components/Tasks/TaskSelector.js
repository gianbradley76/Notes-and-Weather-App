function TaskSelector(props) {
	return (
		<div className='task-selector'>
			<button
				className='task--task-important-btn'
				onClick={() => props.handleClick('important')}
			>
				Important
			</button>
			<button
				className='task--task-today-btn'
				onClick={() => props.handleClick('today')}
			>
				Today
			</button>
			<button
				className='task--task-week-btn'
				onClick={() => props.handleClick('week')}
			>
				This Week
			</button>
			<button
				className='task--task-all-btn'
				onClick={() => props.handleClick('all')}
			>
				All Tasks
			</button>
		</div>
	);
}

export default TaskSelector;
