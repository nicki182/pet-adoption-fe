import LandingTemplate from "@components/custom/templates/views/LandingTemplate"
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