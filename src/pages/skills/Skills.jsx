const Skills = () => {
  
  return (
    <main className="selection">
      <div className="container">
        <h1 className="titel-1">Skills</h1>
        <ul className="content-list">
          <li className="content-list_item">
            <h2 className="titel-2">Langs</h2>
            <p>JavaScript/TypeScript</p>
          </li>
          <li className="content-list_item">
            <h2 className="titel-2">Frontend stack</h2>
            <p>React, MobX, Vite, CRA, <br />
            React Router, GraphQL, Apollo Client,<br />
            HTML, CSS, preprocessors (Sass/SCSS), CSS Modules</p>
          </li>
          <li className="content-list_item">
            <h2 className="titel-2">Backend stack</h2>
            <p>Apollo Server</p>
          </li>
          <li className="content-list_item">
            <h2 className="titel-2">Other</h2>
            <p>Git</p>
          </li>
          <li className="content-list_item">
            <h2 className="titel-2">Soft skills</h2>
            <p>Agile, SCRUM, <br />
              опыт работы в команде,<br />
              навык самостоятельного поиска и изучения информации, <br />
              хорошие коммуникативные навыки</p>
          </li>
        </ul>     
      </div>
    </main>
  )
}
  
export default Skills;