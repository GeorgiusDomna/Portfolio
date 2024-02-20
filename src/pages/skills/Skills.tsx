import { Trans, useTranslation } from "react-i18next";

const Skills: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <main className="selection">
      <div className="container">
        <h1 className="titel-1">{t('Skills')}</h1>
        <ul className="content-list">
          <li className="content-list_item">
            <h2 className="titel-2">{t('Page_skills.langs')}</h2>
            <p>
              JavaScript/TypeScript, <br/>
              HTML/CSS
            </p>
          </li>
          <li className="content-list_item">
            <h2 className="titel-2">{t('Page_skills.front')}</h2>
            <p>
              React, MobX, <br />
              Vite, CRA, <br />
              React Router, GraphQL, Apollo Client, <br />
              {t('Page_skills.front_preproc')} <br />
              Formik, yup, i18next,<br />
              Prettier, ESLint, <br />
              {t('Page_skills.front_SPA')}
            </p>
          </li>
          <li className="content-list_item">
            <h2 className="titel-2">{t('Page_skills.back')}</h2>
            <p>Apollo Server</p>
          </li>
          <li className="content-list_item">
            <h2 className="titel-2">{t('Page_skills.other')}</h2>
            <p>Git</p>
          </li>
          <li className="content-list_item">
            <h2 className="titel-2">{t('Page_skills.soft')}</h2>
            <p>
              <Trans i18nKey='Page_skills.soft_disc' />
            </p>
          </li>
        </ul>     
      </div>
    </main>
  )
}
  
export default Skills;