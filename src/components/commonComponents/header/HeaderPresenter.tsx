import router, { Router } from "next/router";
import React, { useEffect } from "react";
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
									alert(
										"수정중이라 빠른 시일 내에 연동하겠습니다. 감사합니다."
									);
								}}
							>
								<span>GitHub</span>
								<img src="/images/header/github.svg" alt="github" />
							</button>
							<button
								onClick={() => {
									alert(
										"수정중이라 빠른 시일 내에 연동하겠습니다. 감사합니다."
									);
								}}
							>
								<span>Notion</span>
								<img src="/images/header/notion.svg" alt="notion" />
							</button>
						</div>
						<button>
							<span>Contact Me</span>
							<img src="/images/header/mail.svg" alt="mail" />
						</button>
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
