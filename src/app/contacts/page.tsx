import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты"
};

const Page = () => {
  
  return (
    <main className="selection">
      <div className="container">
        <h1 className="titel-1">Контакты</h1>
        <ul className="content-list">
          <li className="content-list_item">
            <h2 className="titel-2">Тел. номер</h2>
            <p><a href="tel:+79299273359">+7 (993) 927-33-59</a></p>
          </li>
          <li className="content-list_item">
            <h2 className="titel-2">Телеграм</h2>
            <p>https://t.me/<a href="https://t.me/domaning" target='_blank' rel='noreferrer'>domaning</a></p>
          </li>
          <li className="content-list_item">
            <h2 className="titel-2">Эл. почта</h2>
            <p><a href="mailto:george.domanin@yandex.ru">george.domanin@yandex.ru</a></p>
          </li>
        </ul>     
      </div>
    </main>
  );
}
 
export default Page;