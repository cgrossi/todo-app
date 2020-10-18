import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/tasks'

const create = (task) => {
  const request = axios.post(baseUrl, task)
  return request.then(response => response.data)
}

export default {create}