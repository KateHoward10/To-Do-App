import { Map, List } from "immutable";

const initial = Map({
	tasks: List([
		Map({
				id: 1,
				task: "Do the washing up.",
				completed: false,
			}),
		Map({
				id: 2,
				task: "Build space rocket",
				completed: false,
			}),
	]),
});

export default initial;