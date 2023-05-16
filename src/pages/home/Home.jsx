import './style.css';

const Home = () => {

  return (
    <>
      <header className="header">
        <div className="header_wrapper">
          <h1 className="header_titel">
            <strong>Hi, my name is <em>Georgii</em></strong><br />
            a frontend developer
          </h1>
          <div className="header_text">
            <p>my future works will be posted on this website as long as there are fake works here, but is site is real.</p>
          </div>
          <a href="https://hh.ru/resume/1bc063bbff08f9869b0039ed1f6d6a72697057"
            target='_blank'
            rel='noneferrer'
            className="btn">
              Download CV
          </a>
        </div>
      </header>
      <div className="black-background"></div>
    </>
  );
}

export default Home;