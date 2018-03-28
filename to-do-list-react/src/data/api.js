import axios from "../axios";
import { fromJS } from "immutable";
import { setTasks, addTask } from "./actions";

export const getTasks = () => dispatch => {
	axios.get("/tasks").then(response => {
		const tasks = fromJS(response.data);
		dispatch(setTasks(tasks));
	})
}

export const postTask = (data) => dispatch => {
	axios.post("/tasks", {
		task: data.value,
	}).then(response => {
		const task = fromJS(response.data);
		dispatch(addTask(task));
	});
}