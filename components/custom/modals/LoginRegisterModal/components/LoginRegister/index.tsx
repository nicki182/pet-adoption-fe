import Flex from '@components/generic/layouts/Flex';
import {FC,useState} from 'react'
import Login from '../Login';
import Register from '../Register';
import useTranslate from '@hooks/generic/useTranslate';
import  Typography  from '@components/generic/text/Typography';
interface Props {
    onCancel:()=>any;
    handleOnClose: (values:any)=>Promise<void> | void | any

}
const LoginRegister:FC<Props> = ({onCancel,handleOnClose})=>{
    const [isLogin,setIsLogin] = useState<boolean>(true);
    const {translate} = useTranslate();
    return (<Flex direction='column' gap='medium'>
        {
        isLogin?<>
        <Login onCancel={onCancel} onFinish={handleOnClose}/>
        <Typography element='p' onClick={()=>setIsLogin(false)} >
            {translate('NEED_LOGIN')}
        </Typography>
</>
        :<>
        <Register onCancel={onCancel} onFinish={handleOnClose}/>
        <Typography element='p' onClick={()=>setIsLogin(true)}>
            {translate('NEED_REGISTER')}
        </Typography>
        </>
    }
    </Flex>)
}
export default LoginRegister