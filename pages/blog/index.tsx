import type { NextPage } from "next";
import DefaultTemplate from "../../src/components/commonComponents/templates/DefaultTemplate/DefaultTemplate";
import BlogContainer from "../../src/components/pageComponents/blog/BlogContainer";

const Home: NextPage = () => {
	return (
		<>
			<DefaultTemplate>
				<BlogContainer />
			</DefaultTemplate>
		</>
	);
};

export default Home;
