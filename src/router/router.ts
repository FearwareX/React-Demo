import { RouteConfig } from 'react-router-config';
import Todo from '@/pages/todo';
import Demo from '@/pages/demo';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Todo,
    exact: true
  },
  {
    path: '/demo',
    component: Demo,
    exact: true
  }
];

export default routes;
