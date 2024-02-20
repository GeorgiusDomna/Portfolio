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

const voitingImg = 'projects.voiting.imgDisc.';

export const projects: IProject[] =[
  {
    titel: "projects.todo.title",
    stackFront: 'JavaScript, HTML, CSS',
    imgPreview: todolistMini,
    imgBig: [
      { img: todolistBig, disc: '' }
    ],
    gitHubLink: 'https://github.com/GeorgiusDomna/TodoList',
    vercelLink: 'https://todo-list-one-lyart.vercel.app/',
  },
  {
    titel: "projects.voiting.title",
    stackFront: 'React, TypeScript, MobX, Vite, React-router, CSS Modules, Formik, yup, JSZip, PDF.js, i18next, Prettier, ESLint',
    imgPreview: rosatomMin,
    imgBig: [
      { img: viewDeparts, disc: voitingImg + 'viewDeparts' },
      { img: viewUsers, disc: voitingImg + 'viewUsers' },
      { img: addUser, disc: voitingImg + 'addUser' },
      { img: viewUserInfo, disc: voitingImg + 'viewUserInfo' },
      { img: login, disc: voitingImg + 'login' },
      { img: registration, disc: voitingImg + 'registration' },
      { img: viewDocuments, disc: voitingImg + 'viewDocuments' },
      { img: addDocument, disc: voitingImg + 'addDocument' },
      { img: viewImage, disc: voitingImg + 'viewImage' },
      { img: viewPDF, disc: voitingImg + 'viewPDF' },
      { img: addApplication, disc: voitingImg + 'addApplication' },
      { img: viewAppsOnReview, disc: voitingImg + 'viewAppsOnReview' },
      { img: voiting, disc: voitingImg + 'voiting' },
      { img: localization, disc: voitingImg + 'localization' }
    ],
    gitHubLink: 'https://github.com/GeorgiusDomna/Voting-System',
  },
  {
    titel: "projects.weather.title",
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