import { i18n } from '../i18n';
import { useParams } from 'react-router-dom';

const T = ({ id, lang }) => {
  const langFromParams = useParams().lang;
  const text = (ID, LANG = langFromParams) => i18n[LANG][ID];

  return text(id, lang) || id;
};

export default T;
