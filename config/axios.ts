import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const BASE_URL_API: string | undefined = process.env.EXPO_PUBLIC_URL_API

export default axios.create({
  baseURL: BASE_URL_API
})

const axiosPublic = axios.create({
  baseURL: BASE_URL_API,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

const axiosPrivate = axios.create({
  baseURL: BASE_URL_API,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
})

axiosPrivate.interceptors.request.use(async(config) => {
  const token = await AsyncStorage.getItem('token')
  config.headers.Authorization = 'Bearer ' + token
  return config
})

export { axiosPrivate, axiosPublic };

