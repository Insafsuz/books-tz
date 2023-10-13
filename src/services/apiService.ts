import axios from 'axios'

const API_KEY = 'AIzaSyAh_l7Os7yGNSSpRvSHhM2Wzfl5rWVrW7w'

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/',
  params: {
    key: API_KEY,
  },
})

export default instance
