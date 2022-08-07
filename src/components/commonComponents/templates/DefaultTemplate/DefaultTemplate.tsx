import React, { useEffect, useState } from "react";
import HeaderContainer from "../../header/HeaderContainer";
import styles from "./DefaultTemplates.module.scss";

type propsType = {
	children: React.ReactNode;
};

const DefaultTemplate: React.FC<propsType> = ({ children }) => {
	return (
		<div className={styles.templeteWrap}>
			<HeaderContainer />
			<div className={styles.contents}>{children}</div>
		</div>
	);
};

export default DefaultTemplate;
