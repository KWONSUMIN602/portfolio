import type { NextPage } from "next";
import DefaultTemplate from "../../src/components/commonComponents/templates/DefaultTemplate/DefaultTemplate";
import ResumeContainer from "../../src/components/pageComponents/resume/ResumeContainer";

const Home: NextPage = () => {
	return (
		<>
			<DefaultTemplate>
				<ResumeContainer />
			</DefaultTemplate>
		</>
	);
};

export default Home;
