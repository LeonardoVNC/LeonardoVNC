import ContactSection from "../../components/home/ContactSection";
import ToProjectSection from "../../components/home/ToProjectSection";
import WelcomeSection from "../../components/home/WelcomeSection";
import PageTemplate from "../../components/PageTemplate";

const HomePage = () => {

    return (
        <PageTemplate
            title="Home"
            subtitle="Welcome to my portfolio page"
        >
            <WelcomeSection/>
            <ToProjectSection/>
            <ContactSection/>
        </PageTemplate>
    );
}

export default HomePage