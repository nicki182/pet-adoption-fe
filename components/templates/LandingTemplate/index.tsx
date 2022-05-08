import Flex from "@components/generic/layouts/Flex"
import Inner from "@components/generic/layouts/Inner"
import { FC,ReactNode } from "react"
interface Props {
    banner: ReactNode;
    about: ReactNode;
}
const LandingTemplate:FC<Props> = ({banner,about}) => {
    return <Flex direction="column" justify="center" align="center">
        {banner}
        {about}
    </Flex>
}
export default LandingTemplate