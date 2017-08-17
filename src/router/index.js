const LIST = r => require.ensure([], () => r(require('../components/Hello')), 'list');
const COUNT = r => require.ensure([], () => r(require('../components/count')), 'count');
const CONTROL = r => require.ensure([], () => r(require('../components/form-control')), 'control');

export default [
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
  }
]
