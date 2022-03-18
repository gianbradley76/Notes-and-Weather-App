import { useState } from 'react';
import { nanoid } from 'nanoid';
import TaskSelector from './TaskSelector';
import TaskBlock from './TaskBlock';
import AddTask from './AddTask';
import DisplayedTasks from './DisplayedTasks';
import './Tasks.css';

function Tasks() {
	const [displayedTasks, setDisplayedTasks] = useState('Important');
	const [tasksList, setTasksList] = useState([]);

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
		const tasksListCopy = tasksList;
		const filteredTasks = tasksListCopy.filter((task) => task.id !== taskId);
		setTasksList(filteredTasks);
	}

	/* 	const taskBox =
		tasksList === undefined ? null
			: tasksList.map((task) => {
					return (
						<TaskBlock
							key={task.id}
							taskData={task}
							handleDelete={deleteTask}
						/>
					);
			  }); */

	console.log('Task List: ', tasksList);

	return (
		<div className='notes-container'>
			<TaskSelector handleClick={selectTasks} />
			<AddTask handleAddTask={addTask} />
			<DisplayedTasks tasksList={tasksList} handleDelete={deleteTask} />
			{/* {tasksList !== [] && tasksList !== undefined ? taskBox : null} */}
		</div>
	);
}

export default Tasks;
