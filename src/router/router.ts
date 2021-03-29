import Index from '../pages/index';
import { Clock } from '../components/clock';

const routes = [
  {
    path: '/',
    component: Index,
    exact: true,
  },
  {
    path: '/clock',
    component: Clock,
    exact: true,
  },
];

export default routes;
