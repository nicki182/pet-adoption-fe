import Langs from '@langs/index';
import parse from 'html-react-parser';
import useGetLenguage from './useGetLenguage';
const useTranslate = () => {
  const { language } = useGetLenguage();
  const translate = (key: string) => {
    return parse(Langs[language][key]);
  };
  return {
    translate,
  };
};
export default useTranslate;
