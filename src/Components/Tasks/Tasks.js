import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import TaskSelector from './TaskSelector';
import AddTask from './AddTask';
import DisplayedTasks from './DisplayedTasks';
import './Tasks.css';

function Tasks() {
	const [displayedTasks, setDisplayedTasks] = useState('Important');
	const [tasksList, setTasksList] = useState(
		localStorage.getItem('tasksList') === null
			? []
			: JSON.parse(localStorage.getItem('tasksList'))
	);

	// Updates local stoarge for every action with tasks
	useEffect(() => {
		localStorage.setItem('tasksList', JSON.stringify(tasksList));
	}, [tasksList]);

	function selectTasks(selectedTasks) {
		setDisplayedTasks(selectedTasks);
	}

	function addTask(task) {
		setTasksList((prevTasksList) => {
			return prevTasksList === undefined
				? [{ id: nanoid(), ...task }]
				: [...prevTasksList, { id: nanoid(), ...task }];
		});
	}

	function deleteTask(taskId) {
		setTasksList((prevTasksList) =>
			prevTasksList.filter((task) => task.id !== taskId)
		);
	}

	function toggleImportant(taskId) {
		console.log('CHANGED!', taskId);
		setTasksList((prevTasksList) =>
			prevTasksList.map((task) =>
				task.id === taskId
					? { ...task, isImportant: !task.isImportant }
					: { ...task }
			)
		);
	}

	console.log('Task List: ', tasksList);

	return (
		<div className='notes-container'>
			<TaskSelector handleClick={selectTasks} />
			<AddTask handleAddTask={addTask} />
			<div className='tasks-container'>
				<DisplayedTasks
					tasksList={tasksList}
					handleDelete={deleteTask}
					handleToggleImportant={toggleImportant}
				/>
			</div>
		</div>
	);
}

export default Tasks;
