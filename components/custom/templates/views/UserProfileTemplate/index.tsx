import  Flex  from '@components/generic/layouts/Flex';
import {ReactNode,FC} from 'react'
interface Props{
    profile:ReactNode
    animal:ReactNode
}
const UserProfileTemplate:FC<Props> = ({profile,animal})=>{
    return <Flex direction='column' gap='big'>
        {profile}
        {animal}
    </Flex>
}
export default UserProfileTemplate;