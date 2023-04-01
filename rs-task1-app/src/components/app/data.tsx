import { EmployeeData } from 'components/interfaces';
import nextId from 'react-id-generator';

const defaultData: EmployeeData[] = [
  {
    name: 'Johny Smith',
    worktype: 'On-site',
    email: 'johnyfe@gmail.com',
    phone: '375297743213',
    title: 'Backend developer',
    salary: '1000',
    date: '12-01-2022',
    promotion: true,
    image: 'https://i.pinimg.com/280x280_RS/84/5b/c9/845bc9561e2d6307ea177ce4168fa6bd.jpg',
    id: +nextId().slice(2),
  },
  {
    name: 'Ilya Cheas',
    worktype: 'Remote',
    email: 'ilyache@gmail.com',
    phone: '375293341218',
    title: 'Frontend developer',
    salary: '1500',
    date: '05-01-2021',
    promotion: true,
    image: 'https://avatars.preply.com/i/logos/i/logos/715854.d28faeedba.jpg',
    id: +nextId().slice(2),
  },
  {
    name: 'Kate Dias',
    worktype: 'Remote',
    email: 'katediasss@gmail.com',
    phone: '375292224122',
    title: 'Graphic designer',
    salary: '1200',
    date: '03-04-2022',
    promotion: false,
    image: 'https://www.assyst.de/cms/upload/sub/digitalisierung/18-F.jpg',
    id: +nextId().slice(2),
  },
  {
    name: 'Jack London',
    worktype: 'Remote',
    email: 'LondonJacks@gmail.com',
    phone: '375295654312',
    title: 'Produc Manager',
    salary: '1700',
    date: '11-04-2021',
    promotion: false,
    image: 'https://cdn.allfamous.org/people/avatars/jack-london-ewuj-allfamous.org.jpg',
    id: +nextId().slice(2),
  },
];
export default defaultData;
