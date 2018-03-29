
const addTask = (state, { task }) => state.update("tasks", tasks => (
	tasks.push(task)
));

const setTasks = (state, { tasks }) => state.set("tasks", tasks);

const removeTask = (state, { id }) => state.update("tasks", tasks => (
	tasks.filter(task => (task.get("id") !== id)
)));

const setTaskComplete = (state, {id, completed}) => state.update("tasks", tasks => (
	tasks.map(task => (task.get("id") === id) ?
		task.set("completed", completed) : task ))
);

const updateTask = (state, {id, task}) => state.update("tasks", tasks => (
	tasks.map(t => (t.get("id") === id) ?
		t.set("task", task) : t ))
);

const reducer = (state, action) => {

	switch (action.type) {
		case "addTask": return addTask(state, action);
		case "setTasks": return setTasks(state, action);
		case "removeTask": return removeTask(state, action);
		case "setTaskComplete": return setTaskComplete(state, action);
		case "updateTask": return updateTask(state, action);
		default: return state;
	}
};

export default reducer;