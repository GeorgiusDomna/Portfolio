const Contacts = () => {
  
  return (
    <main className="selection">
      <div className="container">
        <h1 className="titel-1">Contacts</h1>
        <ul className="content-list">
          <li className="content-list_item">
            <h2 className="titel-2">Phone numbers</h2>
            <p><b>ru:</b> <a href="tel:+79299273359">+7 (929) 927-33-59</a></p>
            <p><b>ge:</b> <a href="tel:+995599503975">+995 (59) 950-39-75</a></p>
          </li>
          <li className="content-list_item">
            <h2 className="titel-2">Telegram</h2>
            <p>https://t.me/<a href="https://t.me/domaning" target='_blank' rel='noneferrer'>domaning</a></p>
          </li>
          <li className="content-list_item">
            <h2 className="titel-2">Email</h2>
            <p><a href="mailto:george.domanin@yandex.ru" className="">george.domanin@yandex.ru</a></p>
          </li>
        </ul>     
      </div>
    </main>
  );
}
 
export default Contacts;