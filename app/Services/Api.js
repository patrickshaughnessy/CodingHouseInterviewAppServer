import apisauce from 'apisauce'

const create = (baseURL = '/') => {
  const api = apisauce.create({baseURL})

  let token

  const setToken = (newToken) => {
    token = newToken
  }

  const getToken = () => {
    return token || null
  }

  const login = (email, password) => api.post('/auth', { email, password })
  const getQuestions = () => api.get('/api/questions')
  const getCategories = () => api.get('/api/categories')
  const getUsers = () => api.post('/api/users', { token })

  const editLevel = (level) => api.put('/api/questions/levels', level)

  return {
    // a list of the API functions
    login,
    getQuestions,
    getCategories,
    getUsers,
    editLevel,

    // additional utilities
    setToken,
    getToken
  }
}

export default {
  create
}
