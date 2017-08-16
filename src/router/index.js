const LIST = r => require.ensure([], () => r(require('../components/Hello')), 'list');
const COUNT = r => require.ensure([], () => r(require('../components/count')), 'count');
// const EMOTIONAL = r => require.ensure([], () => r(require('../page/emotionalTalk/emotionalTalk')), 'emotionalTalk');

export default [
  {
  path: '/list',
  component: LIST
},
  {
  path: '/count',
  component: COUNT
  }
]
