import React, { useEffect } from "react";
import { Badge, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { reqGetAllUsers } from "../../Utils/redux/actions";

const Chat = () => {
	//const users = useSelector((state) => state.setTask.allUsers);
	const users = useSelector((state) => state.setTask.allUsers);

	return (
		<div>
			<ListGroup as="ol" numbered>
				{users.map((item) => (
					<ListGroup.Item className="d-flex justify-content-between align-items-start">
						<div className="ms-2 me-auto">
							<div className="fw-bold">CEO</div>
							{item.name_user}
						</div>
						<Badge variant="primary" pill>
							14
						</Badge>
					</ListGroup.Item>
				))}
			</ListGroup>
		</div>
	);
};

export default Chat;
