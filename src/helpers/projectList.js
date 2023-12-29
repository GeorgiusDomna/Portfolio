import forecastMini from './../img/projects/mini/forecast.webp';
import forecastBig from './../img/projects/big/forecast.webp';
import rosatomMin from './../img/projects/mini/rosatom.PNG';
import rosatomMax from './../img/projects/big/rosatom.PNG';
import todolistMini from './../img/projects/mini/todolist.webp';
import todolistBig from './../img/projects/big/todolist.webp';

export const projects = [
  {
    titel: "Weather forecast",
    stackFront: 'React, JavaScript, GraphQL, Apollo Client, CSS/SASS, HTML',
    stackBack: 'Next.js, JavaScript, Apollo Server',
    img: forecastMini,
    imgBig: forecastBig,
    gitHubLink: 'https://github.com/GeorgiusDomna/weather-fullstack',
    vercelLink: 'https://weather-nine-teal.vercel.app/',
  },
  {
    titel: "Cистемы электронного согласования и управления документооборотом",
    stackFront: 'React, TypeScript, MobX, Vite, React-router, CSS Modules, Formik, JSZip, i18next',
    img: rosatomMin,
    imgBig: rosatomMax,
    gitHubLink: 'https://github.com/GeorgiusDomna/Voting-System',
  },
  {
    titel: "ТЗ: Todo List на чистом JS",
    stackFront: 'JavaScript, HTML, CSS',
    img: todolistMini,
    imgBig: todolistBig,
    gitHubLink: 'https://github.com/GeorgiusDomna/TodoList',
    vercelLink: 'https://todo-list-one-lyart.vercel.app/',
  },
]