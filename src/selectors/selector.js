import store from '../index';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';
const getStore = () => store.getState();
let id = 0;

const getUserInfo = async (info) => {
  let response = {
    status: '400'
  }
  try {
    response = await axios.post('/signin', {
      email: info.email,
      password: info.password
    })
  } catch {
    response.status = '400';
  }
  if(response.status != `400`) {
    let userInfo = {
      id: id++,
      email: info.email,
      userId: response.data.id,
      userType: response.data.type
    }
    return userInfo
  } else {
    return false;
  }
}

export {
  getUserInfo,
  getStore
}