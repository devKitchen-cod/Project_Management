import React from "react";
import {
	Button,
	ButtonGroup,
	Card,
	Col,
	Container,
	Row,
} from "react-bootstrap";

import "../../Styles/styleStartPage.css";
import f7 from "../../Styles/img/f7.svg";
import f8 from "../../Styles/img/f8.svg";
import f10 from "../../Styles/img/f10.jpg";

export default function StartPage() {
	return (
		<div className="mainContainer">
			<div className="introSection">
				<div className="section1">
					<div className="textgroup">
						<h1>Работайте в команде</h1>
						<p>
							Управляйте проектами и выводите продуктивность на новый уровень
							собственным уникальным способом вместе с startUP! Factory.
						</p>
					</div>

					<div className="btngroup">
						<div className="signin">
							<Button variant="outline-primary" size="lg">
								Enter
							</Button>
						</div>
						<div className="signup">
							<Button variant="primary" size="lg">
								Get Account
							</Button>
						</div>
					</div>
				</div>

				<img className="timeimg" src={f8} />
			</div>

			<div className="bodySection">
				<div className="textb">
					<h2>Это не просто работа. Это координация действий в команде.</h2>
					<p>
						Начните с досок, колонок и карточек, а затем переходите к более
						сложным функциям. Управляйте проектами, упорядочивайте задачи и
						поддерживайте командный дух — все это в startUP! Factory.
					</p>
				</div>
				<img className="track" src={f7} />
			</div>

			<div className="bodySection2">
				<div className="texty">
					<h2 className="ltext">Функции для эффективной командной работы.</h2>
					<p className="stext">
						Продуктивность команды зависит от эффективных инструментов и
						комфортной рабочей обстановки. Интуитивно понятные функции Trello
						позволяют команде быстро настроить рабочие процессы для любых задач:
						от совещаний и проектов до мероприятий и постановки целей.
					</p>
				</div>
				<img className="time3" src={f10} />
				{/* <div class="block-animation"></div> */}
			</div>
		</div>
	);
}
