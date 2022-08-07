import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
	// 로그인페이지 만들었을 경우 연동
	const router = useRouter();
	useEffect(() => {
		router.push("/profile");
	}, []);
	return <div />;
};

export default Home;
