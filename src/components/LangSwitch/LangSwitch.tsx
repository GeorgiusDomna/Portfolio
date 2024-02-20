import { useTranslation } from 'react-i18next';
import { Languages } from '../../interfaces/ILanguages';
import './styles.css'

const lngs: Languages  = {
  en: { nativeName: 'en' },
  ru: { nativeName: 'ru' }
};

const LangSwitch: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <select className='langs' value={i18n.resolvedLanguage} onChange={(e) => i18n.changeLanguage(e.target.value)}>
      {Object.keys(lngs).map((lng) => (
        <option
          key={lng}
          value={lng}
          className={i18n.resolvedLanguage === lng ? 'lang lang-active' : 'lang'}>
            {lngs[lng].nativeName}
        </option>
      ))}
    </select>
  );
}

export default LangSwitch;