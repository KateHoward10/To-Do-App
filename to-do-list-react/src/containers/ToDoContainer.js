import { connect } from "react-redux";
import ToDoList from '../components/ToDoList';
import { getTasks, postTask } from '../data/api';

const mapStateToProps = state => {
	return {
		tasks: state.get("tasks"),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onLoad: () => dispatch(getTasks()),
		onSubmit: ( data ) => dispatch(postTask(data)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);