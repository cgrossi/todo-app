import axios from 'axios'
const baseUrl = 'https://shrouded-badlands-02340.herokuapp.com/api/tasks'

const create = (task) => {
  const request = axios.post(baseUrl, task)
  return request.then(response => response.data)
}

const update = (id, taskObj) => {
  const request = axios.put(`${baseUrl}/${id}`, taskObj)
  return request.then(response => response.data)
}

const fetchTasks = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

export default {create, update, fetchTasks, remove}