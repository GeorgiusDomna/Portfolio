import { IProject } from '../interfaces/IProject';

import todolistMini from '../assets/projects/mini/todolist.webp';
import todolistBig from '../assets/projects/big/todolist/todolist.webp';

import rosatomMin from '../assets/projects/mini/rosatom.webp';
import addApplication from '../assets/projects/big/rosatom/addApplication.webp';
import addDocument from '../assets/projects/big/rosatom/addDocument.webp';
import addUser from '../assets/projects/big/rosatom/addUser.webp';
import viewDeparts from '../assets/projects/big/rosatom/viewDeparts.webp';
import login from '../assets/projects/big/rosatom/login.webp';
import registration from '../assets/projects/big/rosatom/registration.webp';
import viewAppsOnReview from '../assets/projects/big/rosatom/viewAppsOnReview.webp';
import viewImage from '../assets/projects/big/rosatom/viewImage.webp';
import viewDocuments from '../assets/projects/big/rosatom/viewDocuments.webp';
import viewPDF from '../assets/projects/big/rosatom/viewPDF.webp';
import viewUserInfo from '../assets/projects/big/rosatom/viewUserInfo.webp';
import viewUsers from '../assets/projects/big/rosatom/viewUsers.webp';
import voiting from '../assets/projects/big/rosatom/voiting.webp';
import localization from '../assets/projects/big/rosatom/localization.webp';

import forecastMini from '../assets/projects/mini/forecast.webp';
import forecastBig from '../assets/projects/big/forecast/forecast.webp';

export const projects: IProject[] =[
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