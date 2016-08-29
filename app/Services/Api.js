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

  const login = (credentials) => api.post('/auth', credentials)
  const getUsers = () => api.post('/api/users', { token })

  const getCategories = () => api.get('/api/categories')
  const addCategory = (name) => api.post('/api/categories', name)

  const getSettings = (user) => api.get(`/api/settings/${user._id}`)
  const editSettings = (user, settings) => api.put(`api/settings/${user._id}`, settings)

  const getQuestions = () => api.get('/api/questions')
  const addQuestion = (question) => api.post('/api/questions', question)
  const deleteQuestion = (question) => api.delete(`api/questions/${question}`)

  const addLevel = (level) => api.post('/api/questions/levels', level)
  const editLevel = (level) => api.put('/api/questions/levels', level)
  const deleteLevel = (level) => api.delete(`/api/questions/levels/${level}`)

  return {
    // a list of the API functions
    login,
    getQuestions,
    getSettings,
    editSettings,
    getCategories,
    addCategory,
    getUsers,
    addQuestion,
    deleteQuestion,
    addLevel,
    editLevel,
    deleteLevel,

    // additional utilities
    setToken,
    getToken
  }
}

export default {
  create
}
