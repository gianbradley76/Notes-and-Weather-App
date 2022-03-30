import TaskBlock from './TaskBlock';

function DisplayedTasks(props) {
	const tasksList = props.displayedTasks;

	return tasksList === undefined
		? null
		: tasksList.map((task) => {
				return (
					<TaskBlock
						key={task.id}
						taskData={task}
						handleDelete={props.handleDelete}
						handleToggleImportant={props.handleToggleImportant}
					/>
				);
		  });
}

export default DisplayedTasks;
