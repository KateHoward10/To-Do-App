import { connect } from "react-redux";
import ToDoList from '../components/ToDoList';
import { getTasks, postTask, deleteTask, patchTaskComplete, putTask } from '../data/api';

const mapStateToProps = state => {
	return {
		tasks: state.get("tasks"),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onLoad: () => dispatch(getTasks()),
		onSubmit: ( data ) => dispatch(postTask(data)),
		onDelete: ( id ) => dispatch(deleteTask(id)),
		onComplete: ( id ) => dispatch(patchTaskComplete(id)),
		onEdit: ( id, data ) => dispatch(putTask(id, data)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);