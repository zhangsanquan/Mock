import axios from 'axios'


export function login(params) {
  console.log(params);
  return axios.post('/login', params)
}

export function getInfo() {
    return axios.get('/info')
}


