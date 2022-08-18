import router, { Router } from "next/router";
import React, { useEffect } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import styles from "./headerStyles.module.scss";

type Props = {
	currentPathname: string | undefined;
};

const HeaderPresenter: React.FC<Props> = ({ currentPathname }) => {
	return (
		<div className={styles.headerWrap}>
			<div className={styles.profile}>
				<div>
					<div className={styles.img}>
						<div
							className={styles.profileIMG}
							style={{
								backgroundImage: "url('/images/header/profile2.jpg')",
							}}
						/>
					</div>

					<div className={styles.text}>
						<p className={styles.name}>권수민</p>
						<p>Frontend Developer</p>
						<div className={styles.waviy}>
							<span>" &nbsp;코</span>
							<span>딩</span>
							<span>하</span>
							<span>는</span>
							&nbsp;
							<span>즐</span>
							<span>거</span>
							<span>움</span>
							<span>을</span>
							&nbsp;
							<span>아</span>
							<span>는</span>
							&nbsp;
							<span>개</span>
							<span>발</span>
							<span>자 &nbsp; "</span>
						</div>
					</div>

					<div className={styles.btn}>
						<div className={styles.groupbtn}>
							<button
								onClick={() => {
									router.push("https://github.com/KWONSUMIN602");
								}}
							>
								<span>GitHub</span>
								<img src="/images/header/github.svg" alt="github" />
							</button>
							<button
								onClick={() => {
									router.push(
										"https://sincere-flight-097.notion.site/Study-9faa8c0d40644eb2a79ccf06db1550ce"
									);
								}}
							>
								<span>Notion</span>
								<img src="/images/header/notion.svg" alt="notion" />
							</button>
						</div>
						<OverlayTrigger
							key={"bottom"}
							placement={"bottom"}
							overlay={
								<Tooltip id={`tooltip-bottom`}>
									ksm8849@naver.com <br />
									클릭하면 메일로 연결됩니다.
									<br /> 문의 사항이 있으시다면 언제든지 연락주세요!
								</Tooltip>
							}
						>
							<button>
								<a
									href="mailto:ksm8849@naver.com"
									style={{ color: "#fff", textDecoration: "none" }}
								>
									<span>Contact Me</span>
									<img src="/images/header/mail.svg" alt="mail" />
								</a>
							</button>
						</OverlayTrigger>
					</div>
				</div>
			</div>
			<div className={styles.iconnav}>
				<button
					onClick={() => {
						router.push("/profile");
					}}
				>
					{currentPathname === "/profile" ? (
						<img src="/images/header/Userprofile_fill.svg" alt="Userprofile" />
					) : (
						<img src="/images/header/Userprofile.svg" alt="Userprofile" />
					)}
				</button>
				<button
					onClick={() => {
						router.push("/resume");
					}}
				>
					{currentPathname === "/resume" ? (
						<img src="/images/header/resume_fill.svg" alt="resume" />
					) : (
						<img src="/images/header/resume.svg" alt="resume" />
					)}
				</button>
				<button
					onClick={() => {
						router.push("/portfolio");
					}}
				>
					{currentPathname === "/portfolio" ? (
						<img src="/images/header/book_fill.svg" alt="portfolio" />
					) : (
						<img src="/images/header/book.svg" alt="portfolio" />
					)}
				</button>
				<button
					onClick={() => {
						router.push("/blog");
					}}
				>
					{currentPathname === "/blog" ? (
						<img src="/images/header/blog_fill.svg" alt="blog" />
					) : (
						<img src="/images/header/blog.svg" alt="blog" />
					)}
				</button>
			</div>
		</div>
	);
};

export default HeaderPresenter;
