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
					<h6>Introduce Myself</h6>
					<hr />
					<div className={commmonStyles.contentbox01}>
						안녕하세요 : ) <br />
						코딩하는 맛을 알고 보다 좋은 UX를 만들어 나가고 싶은 개발자입니다.
						<br />
						<br />
						저는 현재 프론트엔드 개발 공부를 하고 있으며, 주로 react 다루고
						있습니다.
						<br />
						또한 다양한 라이브러리를 활용할 줄 알고 웹퍼블리셔 경험이 있어 html
						/css 다루는 데 있어서 능하며 퍼블리싱이 빠릅니다.
						<br />
						웹퍼블리셔부터 코딩을 공부하면서 프론트엔드 개발자가 되기위해 열심히
						달려왔고 스스로 코딩 공부하며 찾아가는 것에 있어 큰 성취감과 재미를
						느낍니다.
						<br />
						코딩의 무궁무진한 세계를 좋아하는, 무한한 가능성을 가진
						개발자입니다.
						<br />
						<br />
						제가 더 궁금하시다면 이메일로 언제든 연락주세요.
						<br />
						함께 성장하고 싶습니다. 감사합니다 🙇🏻‍♀️
					</div>
				</div>
				<div className={commmonStyles.contentWrapper}>
					<h6>Certificate</h6>
					<hr />
					<div className={commmonStyles.contentbox01}>
						✏️ 웹 디자인 기능사
						<br />
						<br />
						✏️ GTQ i 일러스트 1급
						<br />
						<br />
						✏️GTQ 포토샵 1급
						<br />
						<br />
						✏️2종 보통 운전면허
						<br />
						<br />
						✏️정보처리기능사 필기 합격(실기 예정)
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
