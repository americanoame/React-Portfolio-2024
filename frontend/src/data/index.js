import Image1 from '../assets/RUT.png';
import Image2 from '../assets/MDV.png';
import Image3 from '../assets/Google.png';
import Image4 from '../assets/ecommerce.png';

const projects = [
  {
    id: 1,

    role: 'frontend',
    image: Image1,
    title: 'Rutgers University Gruop Project',
    desc: 'A social media platform for students to connect and share their experiences.',
    demo: 'https://community-chat.herokuapp.com/',
    github: 'https://github.com/americanoame/Community-Chat-1',
  },

  {
    id: 4,

    image: Image4,
    role: 'frontend, backend',
    desc: 'React-Redux-Thunk-cart',
    demo: '',
    github: 'https://github.com/americanoame/Redux-Thunk-Sopping-Cart/tree/main',
  },

  {
    id: 2,

    image: Image2,
    role: 'frontend, backend',
    desc: 'MDV-controller-Tech-Blog',
    demo: 'https://mdv-controller.herokuapp.com/',
    github: 'https://github.com/americanoame/MDV-controller-Tech-Blog',
  },
  {
    id: 3,

    image: Image3,
    role: 'frontend, backend',
    desc: 'MERN-Book-Search-Engine',
    demo: 'https://andre-book-search.herokuapp.com',
    github: 'https://github.com/americanoame/MERN-Book-Search-Engine',
  },
];

export default projects;
