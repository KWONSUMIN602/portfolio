import React, { useEffect, useState } from "react";
import HeaderPresenter from "./HeaderPresenter";

const HeaderContainer = () => {
	const [currentPathname, setCurrentPathname] = useState<string>();

	useEffect(() => {
		setCurrentPathname(window.location.pathname);
		console.log("확인", currentPathname);
	});
	return <HeaderPresenter currentPathname={currentPathname} />;
};

export default HeaderContainer;
