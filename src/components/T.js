import { useParams } from 'react-router-dom';
import { i18n } from '../i18n';

const T = ({ id, lang }) => {
  const langFromParams = useParams().lang;
  console.log('FOOTER_LINKS_TERMS', id);
  const text = (ID, LANG = langFromParams) => i18n[LANG][ID];
  return text(id, lang) || id;
};

export default T;
