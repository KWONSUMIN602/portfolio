import type { NextPage } from "next";
import DefaultTemplate from "../../src/components/commonComponents/templates/DefaultTemplate/DefaultTemplate";
import ProfileContainer from "../../src/components/pageComponents/profile/ProfileContainer";

const Home: NextPage = () => {
	return (
		<>
			<DefaultTemplate>
				<ProfileContainer />
			</DefaultTemplate>
		</>
	);
};

export default Home;
