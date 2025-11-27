import './style.css';

const Page = () => {

  return (
    <main className="main">
      <div className="main_wrapper">
        <h1 className="main_titel">
          <strong>Привет, меня зовут <em>Георгий</em> </strong> <br /> я frontend разработчик
        </h1>
        <div className="main_text">
          <p>примеры моих работ опубликованы на этом сайте</p>
        </div>
        <a href="https://hh.ru/resume/0dd2ce3fff0c68ffe00039ed1f7a316e6a7771"
          target='_blank'
          rel='noreferrer'
          className="btn"
        >
          Посмотреть резюме
        </a>
      </div>
    </main>
  );
}

export default Page;