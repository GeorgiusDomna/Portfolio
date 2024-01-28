import './style.css';

const Home: React.FC = () => {

  return (
    <>
      <header className="header">
        <div className="header_wrapper">
          <h1 className="header_titel">
            <strong>Hi, my name is <em>Georgii</em></strong><br />
            a frontend developer
          </h1>
          <div className="header_text">
            <p>examples of my work are published on this site</p>
          </div>
          <a href="https://hh.ru/resume/0dd2ce3fff0c68ffe00039ed1f7a316e6a7771"
            target='_blank'
            rel='noreferrer'
            className="btn">
              View CV
          </a>
        </div>
      </header>
      <div className="black-background"></div>
    </>
  );
}

export default Home;