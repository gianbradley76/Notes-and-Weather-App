import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import TaskSelector from './TaskSelector';
import AddTask from './AddTask';
import DisplayedTasks from './DisplayedTasks';
import './Tasks.css';

function Tasks() {
	const [selectedTasks, setSelectedTasks] = useState('all');
	const [allTasks, setAllTasks] = useState(
		localStorage.getItem('allTasks') === null
			? []
			: JSON.parse(localStorage.getItem('allTasks'))
	);
	const [displayedTasks, setDisplayedTasks] = useState([]);

	// Makes all task deadlines into a Date Object
	useEffect(() => {
		setAllTasks((prevAllTasks) => {
			return prevAllTasks.map((task) => {
				return { ...task, deadline: new Date(task.deadline) };
			});
		});
	}, []);

	useEffect(() => {
		console.log(new Date());
		setDisplayedTasks(allTasks);
	}, [allTasks]);

	useEffect(() => {
		switch (selectedTasks) {
			case 'important':
				setDisplayedTasks(allTasks.filter((task) => task.isImportant === true));
				break;
			case 'today':
				setDisplayedTasks(
					allTasks.filter((task) => {
						const d = new Date();
						return (
							task.deadline.getDate() === d.getDate() &&
							task.deadline.getMonth() === d.getMonth() &&
							task.deadline.getFullYear() === d.getFullYear()
						);
					})
				);
				break;
			case 'week':
				setDisplayedTasks(
					allTasks.filter((task) => {
						const today = new Date();
						const nextWeek = Date.parse(
							new Date(
								today.getFullYear(),
								today.getMonth(),
								today.getDate() + 7
							)
						);
						return task.deadline <= nextWeek;
					})
				);
				break;
			case 'all':
				setDisplayedTasks(allTasks);
				break;
			default:
				break;
		}
	}, [selectedTasks, allTasks]);

	// Updates local stoarge for every action with tasks
	useEffect(() => {
		localStorage.setItem('allTasks', JSON.stringify(allTasks));
	}, [allTasks]);

	const selectTasks = (selectedTasks) => {
		setSelectedTasks(selectedTasks);
	};

	const addTask = (task) => {
		// Doesn't add task if input is empty
		if (task.taskDesc === '') return;

		// Add task if task input is not empty
		setAllTasks((prevallTasks) => {
			return prevallTasks === undefined
				? [{ id: nanoid(), ...task }]
				: [...prevallTasks, { id: nanoid(), ...task }];
		});
	};

	const deleteTask = (taskId) => {
		setAllTasks((prevallTasks) =>
			prevallTasks.filter((task) => task.id !== taskId)
		);
	};

	const toggleImportant = (taskId) => {
		setAllTasks((prevallTasks) =>
			prevallTasks.map((task) =>
				task.id === taskId
					? { ...task, isImportant: !task.isImportant }
					: { ...task }
			)
		);
	};

	console.log(allTasks);

	return (
		<div className='notes-container'>
			<TaskSelector handleClick={selectTasks} />
			<AddTask handleAddTask={addTask} />
			<div className='tasks-container'>
				<DisplayedTasks
					displayedTasks={displayedTasks}
					handleDelete={deleteTask}
					handleToggleImportant={toggleImportant}
				/>
			</div>
		</div>
	);
}

export default Tasks;
