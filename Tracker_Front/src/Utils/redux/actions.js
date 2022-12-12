import axios from "axios";
import {
	GETCEO,
	GETDESCRIPTIONOFPROJECT,
	GETDEVELOPERS,
	GETDEVOPS,
	GETUSERS,
	LOGIN,
	READTASK,
	SETEMAIL,
	SETNAME,
	SETNAMETASK,
	SETPASSWORD,
	SETPROFFETION,
	SETPROJECT,
	SET_DONE_TASK,
	SET_INPROGRESS_TASK,
	SET_PLANNED_TASK,
} from "./redux-types";

const start_login = () => {
	return { type: "start_req" };
};

const success_login = () => {
	return { type: "req_success" };
};

const err_login = () => {
	return { type: "err_req" };
};

const success_create = () => {
	return { type: "success_create" };
};

const err_create = () => {
	return { type: "err_create" };
};
const deleted = () => {
	return { type: "deleted" };
};
export const stop_deleting = () => {
	return { type: "stop_deleting" };
};

const start_change = () => {
	return { type: "success_change_status" };
};

const stop_change = () => {
	return { type: "stop_change_status" };
};

//============Create user and login==================================

export const reqChekToken = (token) => {
	return (dispatch) => {
		axios
			.post(
				"http://localhost:8080/api/checktoken",
				{},
				{ headers: { authorization: token } }
			)
			.then((res) => {
				localStorage.setItem("token", res.data.token);
				dispatch({ type: LOGIN, payload: true });
				dispatch({ type: SETEMAIL, payload: res.data.email });
				dispatch({ type: SETNAME, payload: res.data.name });
				dispatch({ type: SETPASSWORD, payload: res.data.password });
				dispatch({ type: SETPROFFETION, payload: res.data.proffetion });
			});
	};
};

export const reqlogin = (obj) => {
	return (dispatch) => {
		dispatch(start_login());
		axios({
			method: "POST",
			url: "http://localhost:8080/api/login",
			data: {
				email: obj.email,
				password: obj.password,
			},
		}).then((res) => {
			localStorage.setItem("token", res.data.token);
			dispatch(success_login());
			dispatch(err_login());
		});
	};
};
//http://localhost:8080/
export const reqauth = (obj) => {
	return (dispatch) => {
		dispatch(start_login());
		axios({
			method: "POST",
			url: "http://localhost:8080/api/user",
			data: {
				name: obj.name,
				email: obj.email,
				password: obj.password,
				proffetion: obj.proffetion,
			},
		}).then(
			(data) => dispatch(success_login()),
			() => dispatch(err_login())
		);
	};
};
//============Create user and login==================================

//============Projects==================================
export const reqcreateProject = (obj) => {
	return (dispatch) => {
		axios({
			method: "POST",
			url: "http://localhost:8080/api/project",
			data: {
				name: obj.name_of_project,
				user: obj.email,
				description: obj.descrip,
			},
		}).then(dispatch(success_create()), (err) => dispatch(err_create(err)));
	};
};
export const reqDeleteProject = (name_project, email) => {
	return (dispatch) => {
		console.log("action ----" + name_project, email);
		axios({
			method: "POST",
			url: "http://localhost:8080/api/delete-project",
			data: { name: name_project, user: email },
		}).then(dispatch(deleted()));
	};
};
export const reqsettimeproject = (obj) => {
	return (dispatch) => {
		axios({
			method: "POST",
			url: "http://localhost:8080/api/tracker",
			data: {
				nameProject: obj.nameProject,
				workTime: obj.workTime,
			},
		}).then(dispatch(success_create()), (err) => dispatch(err_create(err)));
	};
};

export const notcreate = () => {
	return (dispatch) => {
		dispatch(err_create());
	};
};
export const reqsetproject = (obj) => {
	return (dispatch) => {
		axios({
			method: "POST",
			url: "http://localhost:8080/api/allproj",
			data: { email: obj.email },
		}).then((res) => {
			dispatch({ type: SETPROJECT, payload: res.data });
		});
	};
};
//============Projects==================================

//===========GetUsers==============================================
export const reqGetAllUsers = () => {
	return (dispatch) => {
		axios({
			method: "POST",
			url: "http://localhost:8080/api/allusers",
		}).then((res) => {
			dispatch({ type: GETUSERS, payload: res.data });
		});
	};
};
export const reqGetAllCEO = (ceo) => {
	return (dispatch) => {
		axios({
			method: "POST",
			url: "http://localhost:8080/api/allceo",
			data: { ceo: ceo },
		}).then((res) => {
			dispatch({ type: GETCEO, payload: res.data });
		});
	};
};
export const reqGetAllDevOps = (devops) => {
	return (dispatch) => {
		axios({
			method: "POST",
			url: "http://localhost:8080/api/alldevops",
			data: { devops: devops },
		}).then((res) => {
			dispatch({ type: GETDEVOPS, payload: res.data });
		});
	};
};
export const reqGetAllDevelopers = (developer) => {
	return (dispatch) => {
		axios({
			method: "POST",
			url: "http://localhost:8080/api/alldevelopers",
			data: { developer: developer },
		}).then((res) => {
			dispatch({ type: GETDEVELOPERS, payload: res.data });
		});
	};
};
//===========GetUsers==============================================

//===========Tasks and Status of task==============================================
export const reqcreatetask = (obj) => {
	return (dispatch) => {
		axios({
			method: "POST",
			url: "http://localhost:8080/api/task-create",
			data: {
				name_of_task: obj.nameTask,
				time_for_task: obj.timeTask,
				descripton_of_task: obj.textTask,
				project_task: obj.project_task,
				user_task: obj.user_task,
				status_task: obj.status_task,
			},
		}).then(dispatch(success_create()), (err) => dispatch(err_create(err)));
	};
};
export const reqreadtask = (readedTasks) => {
	return (dispatch) => {
		axios({
			method: "POST",
			url: "http://localhost:8080/api/task-read",
			data: { tasks: readedTasks },
		}).then((res) => {
			dispatch({ type: READTASK, payload: res.data });
		});
	};
};
export const reqreadplannedTaskF = (readplannedTask, readedTasks) => {
	return (dispatch) => {
		axios({
			method: "POST",
			url: "http://localhost:8080/api/task-planned",
			data: { status: readplannedTask, name: readedTasks },
		}).then((res) => {
			dispatch({ type: SET_PLANNED_TASK, payload: res.data });
		});
	};
};

export const reqreadInProgresTaskF = (readInProgresTask, readedTasks) => {
	return (dispatch) => {
		axios({
			method: "POST",
			url: "http://localhost:8080/api/task-read-inprogress",
			data: { status: readInProgresTask, name: readedTasks },
		}).then((res) => {
			dispatch({ type: SET_INPROGRESS_TASK, payload: res.data });
		});
	};
};

export const reqreadDoneTaskF = (readDoneTask, readedTasks) => {
	return (dispatch) => {
		axios({
			method: "POST",
			url: "http://localhost:8080/api/task-read-done",
			data: { status: readDoneTask, name: readedTasks },
		}).then((res) => {
			dispatch({ type: SET_DONE_TASK, payload: res.data });
		});
	};
};
export const reqchangeStatus = (id, changedStatus) => {
	return (dispatch) => {
		console.log("reqchange ===" + id + "/" + changedStatus);
		axios({
			method: "POST",
			url: "http://localhost:8080/api/task-change-status",
			data: { status: changedStatus, id: id },
		}).then(dispatch(start_change()), (err) => dispatch(stop_change(err)));
	};
};
export const stopChange = () => {
	return (dispatch) => {
		dispatch(stop_change());
	};
};
export const deleteTask = (id) => {
	return (dispatch) => {
		console.log(id);
		axios({
			method: "POST",
			url: "http://localhost:8080/api/task-delete-task",
			data: { id: id },
		}).then(dispatch(deleted()), (err) => dispatch(stop_deleting(err)));
	};
};
//===========Tasks and Status of task==============================================
