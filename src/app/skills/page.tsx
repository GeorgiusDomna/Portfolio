import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Навыки"
};

const Page = async() => {
  
  return (
    <main className="selection">
      <div className="container">
        <h1 className="titel-1">Навыки</h1>
        <ul className="content-list">
          <li className="content-list_item">
            <h2 className="titel-2">Языки</h2>
            <p>
              JavaScript/TypeScript, <br/>
              HTML/CSS
            </p>
          </li>
          <li className="content-list_item">
            <h2 className="titel-2">Фронтенд стек</h2>
            <p>
              React, MobX, <br />
              Vite, CRA, <br />
              React Router, GraphQL, Apollo Client, <br />
              препроцессоры (Sass/SCSS), CSS Modules <br />
              Formik, yup, i18next,<br />
              Prettier, ESLint, <br />
              Опыт построения Single Page Applications
            </p>
          </li>
          <li className="content-list_item">
            <h2 className="titel-2">Бэкенд стек</h2>
            <p>Apollo Server</p>
          </li>
          <li className="content-list_item">
            <h2 className="titel-2">Остальные навыки</h2>
            <p>Git</p>
          </li>
          <li className="content-list_item">
            <h2 className="titel-2">Гибкие навыки</h2>
            <p>
              Agile, SCRUM, <br /> опыт работы в команде,<br /> навык самостоятельного поиска и изучения информации, <br /> хорошие коммуникативные навыки, <br /> высокий уровень самоорганизованности и обучаемости, <br /> стрессоустойчивость
            </p>
          </li>
        </ul>     
      </div>
    </main>
  )
}
  
export default Page;