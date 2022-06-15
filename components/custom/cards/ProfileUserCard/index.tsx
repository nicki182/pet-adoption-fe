import Box from "@components/generic/Box";
import Inner from "@components/generic/layouts/Inner";
import { User } from "@interfaces";
import Profile from "./components/Profile";
import { FC } from "react";
interface ProfileUserCardProps {
    user: User
}
const ProfileUserCard:FC<ProfileUserCardProps> = ({ user }) => {
    return <Box>
        <Inner marginX='small' marginY='small'>
            <Profile initialValues={user}/>
        </Inner>
    </Box>
}
export default ProfileUserCard;