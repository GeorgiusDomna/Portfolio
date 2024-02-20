import { Trans, useTranslation } from 'react-i18next';
import './style.css';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <header className="header">
        <div className="header_wrapper">
          <h1 className="header_titel">
          <Trans i18nKey="Page_main.title">
            <strong>Hi, my name is <em>Georgii</em></strong><br/> a frontend developer
          </Trans>
          </h1>
          <div className="header_text">
            <p>{t('Page_main.disc')}</p>
          </div>
          <a href="https://hh.ru/resume/0dd2ce3fff0c68ffe00039ed1f7a316e6a7771"
            target='_blank'
            rel='noreferrer'
            className="btn">
              {t('Page_main.CV')}
          </a>
        </div>
      </header>
      <div className="black-background"></div>
    </>
  );
}

export default Home;