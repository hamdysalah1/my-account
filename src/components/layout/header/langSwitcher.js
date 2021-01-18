import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Language } from './styles/headerStyle';
import { GlobalContext } from '../../../context';
import T from '../../T';

const LangSwitcher = () => {
  const [data, setData] = useContext(GlobalContext);
  const { lang } = useParams();
  const history = useHistory();

  const getNewLang = (_param) => {
    if (_param === 'ar') {
      return 'en';
    }
    if (_param === 'en') {
      return 'ar';
    }
    return 'en';
  };

  const setLang = () => {
    const newLang = getNewLang(lang);
    const pathname = history.location.pathname.replace(
      `/${lang}/`,
      `/${newLang}/`,
    );

    data.lang = newLang;
    setData({ ...data });
    history.replace({ pathname });
  };
  return (
    <Language lang={data.lang} onClick={() => setLang()}>
      <T id="LANG" />
    </Language>
  );
};

export default LangSwitcher;
