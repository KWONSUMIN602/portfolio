import React, { useState } from "react";
import commmonStyles from "../../../common/styles/globals.module.scss";
import styles from "./BlogStyles.module.scss";

const BlogPresenter = () => {
	const idx = [1, 2, 3, 4, 5, 6];
	const idx2 = [1, 2, 3, 4];

	return (
		<div className={commmonStyles.mainWrapper}>
			<div className={commmonStyles.contentWrapper}>
				<h6>WEB PORTFOLIO</h6>
				<hr />

				<div className={styles.tapWrap}>
					{idx.map((item, i) => (
						<div
							className={styles.portfolioContent}
							key={item}
							onClick={() => {
								alert(
									"블로그 서비스 연동 준비중입니다. 관심 가져주셔서 감사합니다."
								);
							}}
						>
							<div
								className={styles.portfolioImg}
								style={{ backgroundImage: "url('')" }}
							/>

							<div className={styles.portfolioTxt}>
								<h3>Title Test {item}</h3>
								<div>Description Test</div>
							</div>
						</div>
					))}

					{idx2.map((item, i) => (
						<div className={styles.portfolioContent2} key={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default BlogPresenter;
