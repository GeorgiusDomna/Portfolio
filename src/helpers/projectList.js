import todolistMini from './../img/projects/mini/todolist.webp';
import todolistBig from './../img/projects/big/todolist/todolist.webp';

import rosatomMin from './../img/projects/mini/rosatom.webp';
import addApplication from './../img/projects/big/rosatom/addApplication.webp';
import addDocument from './../img/projects/big/rosatom/addDocument.webp';
import addUser from './../img/projects/big/rosatom/addUser.webp';
import viewDeparts from './../img/projects/big/rosatom/viewDeparts.webp';
import login from './../img/projects/big/rosatom/login.webp';
import registration from './../img/projects/big/rosatom/registration.webp';
import viewAppsOnReview from './../img/projects/big/rosatom/viewAppsOnReview.webp';
import viewImage from './../img/projects/big/rosatom/viewImage.webp';
import viewDocuments from './../img/projects/big/rosatom/viewDocuments.webp';
import viewPDF from './../img/projects/big/rosatom/viewPDF.webp';
import viewUserInfo from './../img/projects/big/rosatom/viewUserInfo.webp';
import viewUsers from './../img/projects/big/rosatom/viewUsers.webp';
import voiting from './../img/projects/big/rosatom/voiting.webp';
import localization from './../img/projects/big/rosatom/localization.webp';

import forecastMini from './../img/projects/mini/forecast.webp';
import forecastBig from './../img/projects/big/forecast/forecast.webp';

export const projects = [
  {
    titel: "ТЗ: Todo List на чистом JS",
    stackFront: 'JavaScript, HTML, CSS',
    imgPreview: todolistMini,
    imgBig: [
      { img: todolistBig, disc: '' }
    ],
    gitHubLink: 'https://github.com/GeorgiusDomna/TodoList',
    vercelLink: 'https://todo-list-one-lyart.vercel.app/',
  },
  {
    titel: "Cистемы электронного согласования и управления документооборотом",
    stackFront: 'React, TypeScript, MobX, Vite, React-router, CSS Modules, Formik, yup, JSZip, PDF.js, i18next, Prettier, ESLint',
    imgPreview: rosatomMin,
    imgBig: [
      { img: viewDeparts, disc: 'Страница управления департаментами' },
      { img: viewUsers, disc: 'Просмотр сотрудников в департаменте' },
      { img: addUser, disc: 'Добавление сотрудника' },
      { img: viewUserInfo, disc: 'Просмотр карточки сотрудника' },
      { img: login, disc: 'Логин' },
      { img: registration, disc: 'Регистрация' },
      { img: viewDocuments, disc: 'Просмотр списка документов' },
      { img: addDocument, disc: 'Добавление документа' },
      { img: viewImage, disc: 'Просмотр изображений' },
      { img: viewPDF, disc: 'Просмотр PDF-файлов' },
      { img: addApplication, disc: 'Создание голосования для документа' },
      { img: viewAppsOnReview, disc: 'Просмотр документов находящихся на расмотрении для голосования' },
      { img: voiting, disc: 'Голосование За/Против документа, находящегося в расмотрен' },
      { img: localization, disc: 'Локализация приложения EN/RU' }
    ],
    gitHubLink: 'https://github.com/GeorgiusDomna/Voting-System',
  },
  {
    titel: "Weather forecast",
    stackFront: 'React, JavaScript, GraphQL, Apollo Client, CSS/SASS, HTML',
    stackBack: 'Next.js, JavaScript, Apollo Server',
    imgPreview: forecastMini,
    imgBig: [
      { img: forecastBig, disc: '' }
    ],
    gitHubLink: 'https://github.com/GeorgiusDomna/weather-fullstack',
    vercelLink: 'https://weather-nine-teal.vercel.app/',
  },
]