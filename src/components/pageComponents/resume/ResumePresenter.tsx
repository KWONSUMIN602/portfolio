import React, { useState } from "react";
import commmonStyles from "../../../common/styles/globals.module.scss";
import styles from "./ResumeStyles.module.scss";
import { resumeLists } from "../../../common/mockdata/resumeLists";

const ResumePresenter = () => {
	console.log("dl", resumeLists);

	return (
		<div className={commmonStyles.mainWrapper}>
			<div className={commmonStyles.contentWrapper}>
				<h6>Resume</h6>
				<hr />
				{resumeLists.map((item, idx) => (
					<div className={styles.flexBox}>
						<div className={styles.circleLine}>
							<div className={styles.circle} />
							<div className={styles.line}>
								<div />
							</div>
						</div>

						<div className={styles.contentbox01}>
							<h5 className={styles.contentDate}>{item.date}</h5>
							<h5 className={styles.contentName}>{item.name}</h5>
							<p className={styles.contentTXT}>
								{item.subject != undefined ? "과정 :" + item.subject : ""}
								{item.team != undefined ? "팀 :" + item.team : ""}
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								{item.position != undefined ? "포지션 :" + item.position : ""}
							</p>

							<div className={styles.contentbox}>
								<p>{item.lang != "" ? "⚙️ 개발 : " + item.lang : ""}</p>
								{item.description != undefined &&
									item.description.map((company, i) => <p>{company}</p>)}

								{item.project.map((project, i) => (
									<>
										<p className={styles.projeectTXT}>
											🖥 &nbsp;&nbsp;{project.name}{" "}
											<span className={styles.date}>
												&nbsp;&nbsp;{project.service}&nbsp;&nbsp;[{project.date}
												]
											</span>
										</p>
										<p style={{ fontWeight: 600 }}>{project.position}</p>
										<p>&nbsp;&nbsp;⚙️ 개발 : &nbsp;{project.skill}</p>
										{project.description.map((des, i) => (
											<p>&nbsp;&nbsp;&nbsp;&nbsp;{des}</p>
										))}
									</>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ResumePresenter;
