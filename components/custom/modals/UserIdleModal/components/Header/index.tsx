import { FC } from 'react';
import  Typography  from '@components/generic/text/Typography';
interface Props {
    header:string;
}
const Header:FC<Props> = ({header}) => {
    return <Typography isTitle={true} element={'h2'} color={'warning'}>
        {header}
    </Typography>
}
export default Header;