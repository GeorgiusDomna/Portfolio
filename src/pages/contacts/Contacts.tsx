import { useTranslation } from "react-i18next";

const Contacts: React.FC = () => {
  const { t } = useTranslation()
  
  return (
    <main className="selection">
      <div className="container">
        <h1 className="titel-1">{t('Contacts')}</h1>
        <ul className="content-list">
          <li className="content-list_item">
            <h2 className="titel-2">{t('Page_contacts.phone')}</h2>
            <p><a href="tel:+79299273359">+7 (929) 927-33-59</a></p>
          </li>
          <li className="content-list_item">
            <h2 className="titel-2">{t('Page_contacts.tgram')}</h2>
            <p>https://t.me/<a href="https://t.me/domaning" target='_blank' rel='noreferrer'>domaning</a></p>
          </li>
          <li className="content-list_item">
            <h2 className="titel-2">{t('Page_contacts.email')}</h2>
            <p><a href="mailto:george.domanin@yandex.ru">george.domanin@yandex.ru</a></p>
          </li>
        </ul>     
      </div>
    </main>
  );
}
 
export default Contacts;