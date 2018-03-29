export const addTask = task => {
	return {
		type: "addTask",
		task: task,
	};
}

export const setTasks = tasks => {
	return {
		type: "setTasks",
		tasks: tasks,
	};
}

export const removeTask = id => {
	return {
		type: "removeTask",
		id: id,
	}
}

export const setTaskComplete = (id, completed) => {
	return {
		type: "setTaskComplete",
		id: id,
		completed: completed,
	}
}

export const updateTask = (id, task) => {
	return {
		type: "updateTask",
		id: id,
		task: task,
	}
}