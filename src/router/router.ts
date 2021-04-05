import { RouteConfig } from 'react-router-config';
import Todo from '@/pages/todo';
import Demo from '@/pages/demo';
import Walking from '@/pages/walking';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Walking,
    exact: true
  },
  {
    path: '/todo',
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
