let createUser = [];

for(let i=0; i< 20; i++){
  createUser.push({
    id: i+1,
    name: '@name',
    'age|10-20': 18,
    like: '@string',
    height: '180cm',
    email: '@email',
    date: '@date',       //随机日期 2020-04-30
    time: '@time',      //随机时间 14:20:12
    city: '@city',      //随机城市
    text: '@cword(5)'   //随机生成5个汉字
  })
}

export default createUser
