import Box from "@components/generic/Box"
import ProfileInfo from "./components/ProfileInfo"
import AdoptButton from "./components/AdoptButton"
import FosterOrReturnButton from "./components/FosterOrReturnButton"
import { Animal } from "@interfaces";
import { FC } from "react";
import ProfileCardTemplate from "@components/generic/templates/cards/ProfileCardTemplate"
interface Props {
    animal: Animal
}
const ProfileAnimalCard:FC<Props> = ({ animal }) => {
    return <Box>
        <ProfileCardTemplate
            image={animal.image}
            profile={<ProfileInfo animal={animal} />}
            buttons={{
            submit:animal.state === 'AVAILABLE' || animal.state==='FOSTER'?<AdoptButton animal={animal}/>:null,
            cancel:animal.state === 'AVAILABLE'?null:<FosterOrReturnButton isFoster={animal.state==='FOSTER'} animal={animal}/>}}
            />
    </Box>
}
export default ProfileAnimalCard