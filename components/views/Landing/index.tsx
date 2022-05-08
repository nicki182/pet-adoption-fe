import LandingTemplate from "@components/templates/LandingTemplate"
import Banner from "./components/Banner"
import About from "./components/About"
const Landing = () => {
    return (
        <LandingTemplate
            banner={<Banner />}
            about={<About />}
        />
    )
}
export default Landing