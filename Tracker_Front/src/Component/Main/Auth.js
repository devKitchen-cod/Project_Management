import React, { useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import {
	LOGIN,
	SETEMAIL,
	SETNAME,
	SETPASSWORD,
	SETPROFFETION,
} from "../../Utils/redux/redux-types";
import { reqauth } from "../../Utils/redux/actions";

import "../../Styles/styleAuth.css";
import f11 from "../../Styles/img/f11.svg";

const mapDispatchToProps = {
	reqauth,
};
const mapStateToProps = (state) => {
	return {
		store: state.reducer.success,
	};
};
function Auth() {
	const dispatch = useDispatch();
	const history = useHistory();
	const state = useSelector((state) => state);

	const [user, setUser] = useState ({
		firstNameA: "",
		email: "",
		password: ""
	})

	const [stateEmail, setEmail] = useState({
		firstNameA: "",
		email: "",
		password: ""
	});

	// setUser({...user, password: e.target.vcalue })

	const [statePassword, setPassword] = useState("");
	const [stateName, setName] = useState("");
	const [stateProffetion, setProffetion] = useState("");

	const handleDispatch = (_event) => {
		dispatch({ type: SETEMAIL, payload: stateEmail });
		dispatch({ type: SETPASSWORD, payload: statePassword });
		dispatch({ type: SETNAME, payload: stateName });
		dispatch({ type: SETPROFFETION, payload: stateProffetion });
	};
	const email = useSelector((state) => state.setAuth.email);
	const password = useSelector((state) => state.setAuth.password);
	const name = useSelector((state) => state.setAuth.name);
	const proffetion = useSelector((state) => state.setAuth.proffetion);

	const obj = {
		email: email,
		password: password,
		name: name,
		proffetion: proffetion,
	};
	// const handleCha = () =>

	useEffect(() => {
		if (state.reducer.success) {
			alert("Authorization was successful!!!");
			dispatch({ type: LOGIN, payload: true });
			history.push("/startp");
		}
	});
	const handleSub = (_event) => {
		if ((obj.email, obj.password, obj.name, obj.proffetion === "")) {
			alert("fild form");
		} else {
			dispatch(reqauth(obj));
		}
	};

	return (
		<div className="container123321">
			<div className="sub-container">
				<Form.Group
					className="mb-3"
					as={Col}
					controlId="formGridEmail"
					onChange={(e) => setEmail(e.target.value)}
				>
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>

				<Form.Group
					className="mb-3"
					as={Col}
					controlId="formGridPassword"
					onChange={(e) => setPassword(e.target.value)}
				>
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>

				<Form.Group
					className="mb-3"
					controlId="formGridAddress1"
					onChange={(e) => setName(e.target.value)}
				>
					<Form.Label>Name</Form.Label>
					<Form.Control type="name" placeholder="Name" value={user.password} onChange={(e)=>	setUser({...user, password: e.target.value })}/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formGridAddress2">
					<Form.Label>Surname</Form.Label>
					<Form.Control type="name" placeholder="Surname" />
				</Form.Group>

				<Form.Group className="mb-3" as={Col} controlId="formGridCity">
					<Form.Label>City</Form.Label>
					<Form.Control type="city" placeholder="City" />
				</Form.Group>

				<Form.Group
					className="mb-3"
					as={Col}
					controlId="formGridCity"
					onChange={(e) => setProffetion(e.target.value)}
				>
					<Form.Label>Proffetion</Form.Label>
					<Form.Select>
						<option>Choose Proffetion</option>
						<option value="CEO">CEO</option>
						<option value="DevOps">DevOps</option>
						<option value="Developer">Developer</option>
					</Form.Select>
				</Form.Group>

				<Form.Group className="mb-3" id="formGridCheckbox">
					<Form.Check
						type="checkbox"
						label="I agree with the terms of use"
						onChange={handleDispatch}
					/>
				</Form.Group>

				<Button variant="primary" onClick={handleSub}>
					Sign up
				</Button>
			</div>
			<div className="ee">
				<img src={f11} />
			</div>
		</div>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
