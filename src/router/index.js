const LIST = r => require.ensure([], () => r(require('../components/Hello')), 'list');
const COUNT = r => require.ensure([], () => r(require('../components/count')), 'count');
const CONTROL = r => require.ensure([], () => r(require('../components/form-control')), 'control');
const DETAILS_INDEX = r => require.ensure([], () => r(require('../components/details/index')), 'details');
const COURSE = r => require.ensure([], () => r(require('../components/details/course-list')), 'details');
const PEOPLE = r => require.ensure([], () => r(require('../components/details/people-list')), 'details');
const PEOPLE_DETAILS = r => require.ensure([], () => r(require('../components/details/look-details')), 'details');

export default [
  {
    path: '/',
    redirect: '/list'
  },
  {
    path: '/list',
    component: LIST
},
  {
    path: '/count',
    component: COUNT
  },
  {
    path: '/form-control',
    component: CONTROL
  },
  {
    path: '/list-details',
    component: DETAILS_INDEX,

    children: [
      {
        path: '',
        redirect: 'people-list'
      },
      {
        path: 'people-list',
        component: PEOPLE,
        name: 'list',
        children: [
          {
            path: 'look-more/:id',
            name: 'look-more',
            component: PEOPLE_DETAILS
          }
        ]
      },
      {
        path: 'course-list',
        component: COURSE
      }
    ]
  }
]
