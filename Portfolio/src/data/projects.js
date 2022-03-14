import BimmaPro2 from '../assets/bimma_pro2.png';
import Api from '../assets/api.png';
import Admin from '../assets/admin.png';
import Portfolio from '../assets/portfolio.png';

const projects = [
  {
    id: 1,
    name: 'Bimma Pro Mobile App',
    slug: 'Bimma_Pro_Mobile_App',
    img: BimmaPro2,
    fill: false,
    summary:
      'This is react native mobile app for BMW electrical schemas, it help the user to get specific schema of any modele easily, also the user can donwload it or just added to the bookmark. check the link to see the code.',
    github: 'https://github.com/imadelcass/bmw_v1',
  },
  {
    id: 2,
    name: 'Bimma Pro Api',
    slug: 'Bimma_Pro_Api',
    img: Api,
    fill: false,
    summary:
      'This is Rest Api for BMW electrical schemas project, built with Laravel. It is the backend of the project. check the link to see the code.',
    github: 'https://github.com/imadelcass/bimmapro_api',
  },
  {
    id: 3,
    name: 'Admin Page',
    slug: 'Admin_Page',
    img: Admin,
    fill: true,
    summary: 'This is the Admin page for BMW electrical schemas project, built with react. It is the dashboard of the client, in which he can completely customize his app easily. check the link to see the code.',
    github: 'https://github.com/imadelcass/bimmapro',
  },
  {
    id: 4,
    name: 'Portfolio',
    slug: 'Portfolio',
    img: Portfolio,
    fill: true,
    summary: 'This is Porfolio website to see my work and project in programming, built with react. check the link to see the code.',
    github: '',
  },
];

export default projects;
