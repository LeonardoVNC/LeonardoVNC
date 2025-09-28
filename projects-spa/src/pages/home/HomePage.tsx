import WelcomeSection from "../../components/home/WelcomeSection";
import PageTemplate from "../../components/PageTemplate";

const HomePage = () => {

    return (
        <PageTemplate
            title="Home"
            subtitle="Welcome to my portfolio page"
        >
            <WelcomeSection/>
        </PageTemplate>
    );
}

export default HomePage