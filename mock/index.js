import Mock from 'mockjs'
import userInfo from './user'

Mock.mock('/login', {
  name: '@name',
  code: 200,
  message: '成功'
});


Mock.mock('/info', userInfo);
