import TaskBlock from './TaskBlock';

function DisplayedTasks(props) {
	const tasksList = props.tasksList;

	return tasksList === undefined
		? null
		: tasksList.map((task) => {
				return (
					<div key={task.id}>
						<TaskBlock
							key={task.id}
							taskData={task}
							handleDelete={props.handleDelete}
							handleToggleImportant={props.handleToggleImportant}
						/>
					</div>
				);
		  });
}

export default DisplayedTasks;
