import axios from "../axios";
import { fromJS } from "immutable";
import { setTasks, addTask, removeTask, setTaskComplete, updateTask } from "./actions";

export const getTasks = () => dispatch => {
	axios.get("/tasks").then(response => {
		const tasks = fromJS(response.data);
		dispatch(setTasks(tasks));
	});
}

export const postTask = (data) => dispatch => {
	axios.post("/tasks", {
		task: data.value,
	}).then(response => {
		const task = fromJS(response.data);
		dispatch(addTask(task));
	});
}

export const deleteTask = (id) => dispatch => {
	axios.delete("/tasks/" + id).then(response => {
		dispatch(removeTask(id));
	});
}

export const patchTaskComplete = (id) => dispatch => {
	axios.patch("/tasks/" + id + "/completed", {
	}).then(response => {
		const completed = fromJS(response.data.completed);
		dispatch(setTaskComplete(id, completed));
	});
}

export const putTask = (id, data) => dispatch => {
	axios.put("/tasks/" + id, {
		task: data.value,
	}).then(response => {
		const task = fromJS(response.data.task);
		dispatch(updateTask(id, task));
	});
}