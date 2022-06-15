import Langs from '@langs/index';
import parse from 'html-react-parser';
import useGetLenguage from './useGetLenguage';
import { template } from 'lodash';
import { useCallback } from 'react';
const useTranslate = (params: object = {}) => {
  const { language } = useGetLenguage();
  const translate = useCallback(
    (key: string) => {
      const compile = template(Langs[language][key], params);
      return parse(compile(params));
    },
    [params, language]
  );
  return {
    translate,
  };
};
export default useTranslate;
