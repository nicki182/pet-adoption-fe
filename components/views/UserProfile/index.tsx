import AnimalList from "@components/custom/AnimalList"
import ProfileUserCard from "@components/custom/cards/ProfileUserCard"
import UserProfileTemplate from "@components/custom/templates/views/UserProfileTemplate"
import { User } from "@interfaces";
import {FC} from "react"
const UserProfile:FC<Props> = () => {
    const user:User = {}
    return <UserProfileTemplate
            profile={<ProfileUserCard user={user}/>}
            animal={<AnimalList animals={user.animals || []}/>}
            />
}
export default UserProfile