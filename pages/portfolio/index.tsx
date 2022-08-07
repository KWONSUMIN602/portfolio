import type { NextPage } from "next";
import React from "react";
import DefaultTemplate from "../../src/components/commonComponents/templates/DefaultTemplate/DefaultTemplate";
import PortfolioContainer from "../../src/components/pageComponents/portfolio/PortfolioContainer";

const Home: NextPage = () => {
	return (
		<>
			<DefaultTemplate>
				<PortfolioContainer />
			</DefaultTemplate>
		</>
	);
};

export default Home;
