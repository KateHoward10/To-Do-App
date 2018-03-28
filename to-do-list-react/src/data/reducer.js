import { Map } from 'immutable';

const addTask = (state, { task }) => state.update("tasks", tasks => (
	tasks.push(Map({ task: task })
)));

const getTasks = (state, { tasks }) => state.set("tasks", tasks);


const reducer = (state, action) => {

	switch (action.type) {
		case "addTask": return addTask(state, action);
		case "setTasks": return getTasks(state, action);
		default: return state;
	}
};

export default reducer;