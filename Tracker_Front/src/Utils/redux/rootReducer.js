import {
	CREATETASK,
	GETUSERS,
	LOGIN,
	LOGOUT,
	SETEMAIL,
	SETNAME,
	SETNAMEOFPROJECT,
	SETNAMETASK,
	SETPASSWORD,
	SETPROJECT,
	SETPROJECTFORTASK,
	SETTEXTTASK,
	SETTIMETASK,
	SETPROJECTTIME,
	READTASK,
	SETUSERTASK,
	SETTASKFORTRACKING,
	SETIDPRO,
	DELETEPROJECT,
	SETSTATUS,
	SET_PLANNED_TASK,
	SET_INPROGRESS_TASK,
	SET_DONE_TASK,
	SET_CHANGED_TASK,
	SETDESCRIPTIONOFPROJECT,
	GETDESCRIPTIONOFPROJECT,
	SETPROFFETION,
	GETCEO,
	GETDEVOPS,
	GETDEVELOPERS,
} from "./redux-types";
import { combineReducers } from "redux";

const init = {
	isAuth: false,
};
function Login(state = init, action) {
	//login
	switch (action.type) {
		case LOGIN: {
			return { ...state, isAuth: action.payload };
		}
		case LOGOUT: {
			const user = action.playload;
			return [...state, user];
		}
		default:
			return state;
	}
}
const init_auth = {
	email: "",
	name: "",
	password: "",
	proffetion: "",

	ceo: [],
	devops: [],
	developer: [],
};
function Auth(state = init_auth, action) {
	//Auth
	switch (action.type) {
		case SETEMAIL: {
			return { ...state, email: action.payload };
		}
		case SETNAME: {
			return { ...state, name: action.payload };
		}
		case SETPASSWORD: {
			return { ...state, password: action.payload };
		}
		case SETPROFFETION: {
			return { ...state, proffetion: action.payload };
		}

		case GETCEO: {
			return { ...state, ceo: action.payload };
		}
		case GETDEVOPS: {
			return { ...state, devops: action.payload };
		}
		case GETDEVELOPERS: {
			return { ...state, developer: action.payload };
		}
		default:
			return state;
	}
}

const init_name_of_project = {
	//project
	name_of_project: "",
	list_of_projects: [],
	time_of_project: 0,
	deleted_project: "",
	descrip_project: "",
	get_descrip_proj: "",
};
function Project(state = init_name_of_project, action) {
	switch (action.type) {
		case SETNAMEOFPROJECT: {
			return { ...state, name_of_project: action.payload };
		}
		case SETDESCRIPTIONOFPROJECT: {
			return { ...state, descrip_project: action.payload };
		}
		// case GETDESCRIPTIONOFPROJECT:{
		//   return{...state, get_descrip_proj:action.payload}
		// }
		case SETPROJECT: {
			return { ...state, list_of_projects: action.payload };
		}
		case SETPROJECTTIME: {
			return { ...state, time_of_project: action.payload };
		}
		//Delete
		case DELETEPROJECT: {
			return { ...state, deleted_project: action.payload };
		}
		default:
			return state;
	}
}

const init_task = {
	//--for creating task----------
	nameTask: "",
	timeTask: "",
	textTask: "",
	nameProject: "",
	allUsers: [],
	selectedProject: "",
	selectedUser: "",

	taskfortracking: "",
	idforproj: "",
	//--for reading tasks by status--------------
	status: "",
	readedTask: [], //all tasks
	planned: [],
	inprogress: [],
	done: [],
	changed_task: "",
};
function Task(state = init_task, action) {
	//task
	switch (action.type) {
		case SETNAMETASK: {
			return { ...state, nameTask: action.payload };
		}
		case SETTIMETASK: {
			return { ...state, timeTask: action.payload };
		}
		case SETTEXTTASK: {
			return { ...state, textTask: action.payload };
		}
		case GETUSERS: {
			return { ...state, allUsers: action.payload };
		}
		case SETPROJECTFORTASK: {
			return { ...state, selectedProject: action.payload };
		}
		case READTASK: {
			return { ...state, readedTask: action.payload };
		}
		case SETUSERTASK: {
			return { ...state, selectedUser: action.payload };
		}
		case SETTASKFORTRACKING: {
			return { ...state, taskfortracking: action.payload };
		}
		case SETIDPRO: {
			return { ...state, idforproj: action.payload };
		}
		case SETSTATUS: {
			return { ...state, status: action.payload };
		}
		case SET_PLANNED_TASK: {
			return { ...state, planned: action.payload };
		}
		case SET_INPROGRESS_TASK: {
			return { ...state, inprogress: action.payload };
		}
		case SET_DONE_TASK: {
			return { ...state, done: action.payload };
		}
		case SET_CHANGED_TASK: {
			return { ...state, changed_task: action.payload };
		}

		default:
			return state;
	}
}

const initialState = {
	success: false,
	created: false,
	deleted: false,
	loading: false,
	error: false,
	change: false,
};
const Flags = (state = initialState, action) => {
	//true/false flags
	switch (action.type) {
		case "start_req":
			return {
				success: false,
				loading: true,
			};
		case "req_success":
			return {
				success: true,
			};
		case "err_req":
			return {
				loading: false,
				error: true,
			};
		case "success_create":
			return {
				created: true,
			};
		case "err_create":
			return {
				created: false,
			};
		case "deleted":
			return {
				deleted: true,
			};
		case "success_change_status": {
			return {
				change: true,
			};
		}
		case "stop_change_status": {
			return {
				change: false,
			};
		}
		case "stop_deleting": {
			return {
				deleted: false,
			};
		}
		default:
			return state;
	}
};

export const rootReducer = combineReducers({
	enter: Login,
	setAuth: Auth,
	setProject: Project,
	setTask: Task,
	reducer: Flags,
});
