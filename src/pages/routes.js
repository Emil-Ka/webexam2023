import MainPage from '@/pages/MainPage';
import Interviews from '@/pages/Interviews';
import CreateInterview from '@/pages/CreateInterview';
import Interview from '@/pages/Interview';

export const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/interviews',
    name: 'Interviews',
    component: Interviews,
  },
  {
    path: '/create-interview',
    name: 'CreateInterview',
    component: CreateInterview,
  },
  {
    path: '/interviews/:id',
    name: 'Interview',
    component: Interview,
  }
];
