import React, { useState } from "react";
import commmonStyles from "../../../common/styles/globals.module.scss";
import styles from "./ProfileStyles.module.scss";
import {
	stackCollaboLists,
	stackDesignLists,
	stackDevelopLists,
} from "../../../common/mockdata/stacklists";

const ProfilePresenter = () => {
	return (
		<div className={commmonStyles.mainWrapper}>
			<div className={commmonStyles.flexWrap}>
				<div className={commmonStyles.contentWrapper}>
					<h6>Intro</h6>
					<hr />
					<div className={commmonStyles.contentbox01}>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
						dummy text of the printing and typesetting industry. Lorem Ipsum has
						been the industry's standard dummy text ever since the 1500s, when
						an unknown printer took a galley of type and scrambled it to make a
						type specimen book. It has survived not only five centuries, but
						also the leap into electronic typesetting, remaining essentially
						unchanged. It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and more recently
						with desktop publishing software like Aldus PageMaker including
						versions of Lorem Ipsum.
					</div>
				</div>
				<div className={commmonStyles.contentWrapper}>
					<h6>Keyword</h6>
					<hr />
					<div className={commmonStyles.contentbox01}>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged.
					</div>
				</div>
			</div>
			<div className={commmonStyles.contentWrapper}>
				<h6>Stack</h6>
				<hr />
				<div className={styles.contentbox01_bg}>
					<div>
						<br />
						<h6>&gt; Development Stack</h6>
						<div className={styles.rowBox}>
							{stackDevelopLists.map((item: any, idx: number) => (
								<div className={styles.contents} key={idx}>
									<img src={item.imgsrc} alt={item.name} />
									<span className={styles.stackName}>{item.name}</span>
								</div>
							))}
						</div>
					</div>

					<div>
						<br />
						<h6>&gt; Design stack</h6>
						<div className={styles.rowBox}>
							{stackDesignLists.map((item: any, idx: number) => (
								<div className={styles.contents} key={idx}>
									<img src={item.imgsrc} alt={item.name} />

									<span className={styles.stackName}>{item.name}</span>
								</div>
							))}
						</div>
					</div>

					<div>
						<br />
						<h6>&gt; collaboration stack</h6>
						<div className={styles.rowBox}>
							{stackCollaboLists.map((item: any, idx: number) => (
								<div className={styles.contents} key={idx}>
									<img src={item.imgsrc} alt={item.name} />
									<span className={styles.stackName}>{item.name}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePresenter;
