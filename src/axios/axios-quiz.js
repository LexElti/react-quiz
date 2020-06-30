import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-a6d18.firebaseio.com/'
})