import {FC} from 'react';
import Typography from '@components/generic/text/Typography';
interface Props{
    message:string
}
const WarningMessage:FC<Props> = ({message}) => {
    return <Typography element={'p'}>
        {message}
    </Typography>
}
export default WarningMessage;