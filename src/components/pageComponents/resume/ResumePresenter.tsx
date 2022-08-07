import React, { useState } from "react";
import commmonStyles from "../../../common/styles/globals.module.scss";
import styles from "./ResumeStyles.module.scss";

const ResumePresenter = () => {
	return (
		<div className={commmonStyles.mainWrapper}>
			<div className={commmonStyles.contentWrapper}>
				<h6>Resume</h6>
				<hr />

				<div className={styles.flexBox}>
					<div className={styles.circleLine}>
						<div className={styles.circle} />
						<div className={styles.line}>
							<div />
						</div>
					</div>

					<div>
						<h5 className={styles.contentDate}>2020.08 ~</h5>
						<h5 className={styles.contentName}>뉴비즈스타트</h5>
						<p className={styles.contentTXT}>
							팀 : SI 개발팀 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;포지션 :
							프론트엔드 개발자
						</p>

						<div className={styles.contentbox}>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged.
						</div>
					</div>
				</div>

				<div className={styles.flexBox}>
					<div className={styles.circleLine}>
						<div className={styles.circle} />
						<div className={styles.line}>
							<div />
						</div>
					</div>

					<div>
						<h6 style={{ marginBottom: 12 }}>ss</h6>
						<div className={styles.contentbox}>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResumePresenter;
