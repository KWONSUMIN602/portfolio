import React, { useState } from "react";
import PortfolioPresenter from "./PortfolioPresenter";

const PortfolioContainer = () => {
	const [show, setShow] = useState(false);
	const [detail, setDetail] = useState<any>({});
	const [type, setType] = useState("all");

	return (
		<PortfolioPresenter
			show={show}
			setShow={setShow}
			detail={detail}
			setDetail={setDetail}
			type={type}
			setType={setType}
		/>
	);
};

export default PortfolioContainer;
