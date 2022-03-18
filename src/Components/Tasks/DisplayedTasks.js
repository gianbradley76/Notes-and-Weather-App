import { useEffect } from 'react';
import TaskBlock from './TaskBlock';

function DisplayedTasks(props) {
	const tasksList = props.tasksList;
	useEffect(() => {
		console.log('displayed tasks');
	}, [tasksList]);

	return tasksList === undefined
		? null
		: tasksList.map((task) => {
				return (
					<div key={task.id}>
						<TaskBlock
							key={task.id}
							taskData={task}
							handleDelete={props.handleDelete}
						/>
					</div>
				);
		  });
}

export default DisplayedTasks;
