import React, { Dispatch, SetStateAction, useState } from "react";
import { Alert, Col, Nav, Row, Tab } from "react-bootstrap";
import commmonStyles from "../../../common/styles/globals.module.scss";
import styles from "./PortfolioStyles.module.scss";
import { stackCollaboLists } from "../../../common/mockdata/portfolioLists";
import router from "next/router";

type props = {
	show: boolean;
	setShow: Dispatch<SetStateAction<boolean>>;
	detail: any;
	setDetail: Dispatch<any>;
	type: string;
	setType: Dispatch<SetStateAction<string>>;
};
const PortfolioPresenter: React.FC<props> = ({
	show,
	setShow,
	detail,
	setDetail,
	type,
	setType,
}) => {
	const idx2 = [1, 2, 3, 4];

	if (show) {
		return (
			<div className={commmonStyles.mainWrapper}>
				<div className={commmonStyles.contentWrapper}>
					<h6>WEB PORTFOLIO</h6>
					<hr />

					<Alert variant="primary" onClose={() => setShow(false)} dismissible>
						<Alert.Heading>
							<span className={styles.barStyle} /> Project
						</Alert.Heading>
						<p className={styles.subtitleStyle}>
							<span style={{ fontWeight: 700, fontSize: 20 }}>
								{detail.projectName}
							</span>
							<span>&nbsp; {detail.service}</span>
							&nbsp; &nbsp; &nbsp;
							<br />[ 진행 기간 :&nbsp;
							{detail.date} ]
							<br />
							포지션 : &nbsp;&nbsp;{detail.position}
						</p>

						<div className={styles.contentsWrap}>
							<div className={styles.content01}>
								<div
									className={styles.projectImg}
									style={{
										backgroundImage: "url(" + detail.imgUrl + ")",
									}}
								/>
								<div className={styles.groupbtn}>
									{detail.serviceLink != "" && (
										<button
											onClick={() => {
												router.push(detail.serviceLink);
											}}
										>
											<span>Link</span>
											<img src="/images/header/notion.svg" alt="notion" />
										</button>
									)}
									{detail.githubLink != "" && (
										<button
											onClick={() => {
												router.push(detail.githubLink);
											}}
										>
											<span>GitHub</span>
											<img src="/images/header/github.svg" alt="github" />
										</button>
									)}
								</div>
							</div>

							<div className={styles.descriptionBox}>
								<div>
									<div className={styles.keyword}>
										<p className={styles.pStyle1}>
											<span className={styles.barStyle} />
											Project Skill
										</p>
										<div>
											{detail.skill.map((item: any, i: number) => (
												<p>{item}</p>
											))}
										</div>
									</div>

									<div className={styles.description}>
										<p className={styles.pStyle2}>
											<span className={styles.barStyle} />
											Project Description
										</p>

										<div>
											{detail.mainDescription.map((item: any, i: number) => (
												<p className={styles.description_txt}>{item}</p>
											))}
										</div>
									</div>
								</div>
							</div>
							<div className={styles.description_tr}></div>
						</div>
					</Alert>
				</div>
			</div>
		);
	}
	return (
		<div className={commmonStyles.mainWrapper}>
			<div className={commmonStyles.contentWrapper}>
				<h6>WEB PORTFOLIO</h6>
				<hr />

				<Tab.Container id="left-tabs-example" defaultActiveKey="All">
					<Col sm={6}>
						<Nav variant="pills" className="flex-row">
							<Nav.Item
								onClick={() => {
									setType("all");
								}}
							>
								<Nav.Link eventKey="All">All</Nav.Link>
							</Nav.Item>
							<Nav.Item
								onClick={() => {
									setType("develop");
								}}
							>
								<Nav.Link eventKey="Develop">Develop</Nav.Link>
							</Nav.Item>
							<Nav.Item
								onClick={() => {
									setType("design");
								}}
							>
								<Nav.Link eventKey="Design">Design</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>

					{/* 내용 */}
					<Col sm={12}>
						<Tab.Content>
							<Tab.Pane eventKey="All">
								<div className={styles.tapWrap}>
									{stackCollaboLists.map((item, idx) => (
										<div
											className={styles.portfolioContent}
											key={idx}
											onClick={() => {
												setDetail({
													date: item.date,
													projectName: item.projectName,
													skill: item.skill,
													service: item.service,
													imgUrl: item.imgUrl,
													mainDescription: item.mainDescription,
													serviceLink: item.serviceLink,
													githubLink: item.githubLink,
													position: item.position,
												});
												setShow(true);
											}}
										>
											<div
												className={styles.portfolioImg}
												style={{
													backgroundImage: "url(" + item.imgUrl + ")",
												}}
											/>

											<div className={styles.tagbox}>
												{item.tag.map((tag, i) => (
													<span>{tag}</span>
												))}
											</div>

											<div className={styles.portfolioTxt}>
												<h3>{item.projectName}</h3>
												<div>{item.summaryDescription}</div>
											</div>
										</div>
									))}

									{idx2.map((item, i) => (
										<div className={styles.portfolioContent2} key={item} />
									))}
								</div>
							</Tab.Pane>

							<Tab.Pane eventKey="Develop">
								<div className={styles.tapWrap}>
									{stackCollaboLists.map(
										(item, idx) =>
											item.type === "develop" && (
												<div
													className={styles.portfolioContent}
													key={idx}
													onClick={() => {
														setDetail({
															projectName: item.projectName,
															skill: item.skill,
															service: item.service,
															imgUrl: item.imgUrl,
															mainDescription: item.mainDescription,
															serviceLink: item.serviceLink,
															githubLink: item.githubLink,
														});
														setShow(true);
													}}
												>
													<div
														className={styles.portfolioImg}
														style={{
															backgroundImage: "url(" + item.imgUrl + ")",
														}}
													/>

													<div className={styles.tagbox}>
														{item.tag.map((tag, i) => (
															<span>{tag}</span>
														))}
													</div>

													<div className={styles.portfolioTxt}>
														<h3>{item.projectName}</h3>
														<div>{item.summaryDescription}</div>
													</div>
												</div>
											)
									)}

									{idx2.map((item, i) => (
										<div className={styles.portfolioContent2} key={item} />
									))}
								</div>
							</Tab.Pane>
							<Tab.Pane eventKey="Design">
								<div className={styles.tapWrap}>
									{stackCollaboLists.map(
										(item, idx) =>
											item.type === "design" && (
												<div
													className={styles.portfolioContent}
													key={idx}
													onClick={() => {
														setDetail({
															projectName: item.projectName,
															skill: item.skill,
															service: item.service,
															imgUrl: item.imgUrl,
															mainDescription: item.mainDescription,
															serviceLink: item.serviceLink,
															githubLink: item.githubLink,
														});
														setShow(true);
													}}
												>
													<div
														className={styles.portfolioImg}
														style={{
															backgroundImage: "url(" + item.imgUrl + ")",
														}}
													/>

													<div className={styles.tagbox}>
														{item.tag.map((tag, i) => (
															<span>{tag}</span>
														))}
													</div>

													<div className={styles.portfolioTxt}>
														<h3>{item.projectName}</h3>
														<div>{item.summaryDescription}</div>
													</div>
												</div>
											)
									)}

									{idx2.map((item, i) => (
										<div className={styles.portfolioContent2} key={item} />
									))}
								</div>
							</Tab.Pane>
						</Tab.Content>
					</Col>
				</Tab.Container>
			</div>
		</div>
	);
};

export default PortfolioPresenter;
