import { connect } from "react-redux";
import ToDoList from '../components/ToDoList';

const mapStateToProps = state => {
	return {
		tasks: state.get("tasks"),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSubmit: () => dispatch({ type: "addTask"}),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);