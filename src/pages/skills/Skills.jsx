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
            <p>React, Redux, GraphQL, Apollo Client,<br/>
            CSS Modules, HTML, preprocessors (Sass/SCSS)</p>
          </li>
          <li className="content-list_item">
            <h2 className="titel-2">Backend stack</h2>
            <p>Apollo Server</p>
          </li>
          <li className="content-list_item">
            <h2 className="titel-2">Other</h2>
            <p>Git</p>
          </li>
        </ul>     
      </div>
    </main>
  )
}
  
export default Skills;