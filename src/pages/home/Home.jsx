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
            <p>examples of my work are published on this site</p>
          </div>
          <a href="https://hh.ru/resume/1bc063bbff08f9869b0039ed1f6d6a72697057"
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