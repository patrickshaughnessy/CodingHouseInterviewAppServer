import apisauce from 'apisauce'

const create = (baseURL = '/') => {
  const api = apisauce.create({baseURL})

  const login = (credentials) => api.post('/auth', credentials)
  const authenticate = (token) => api.post('/auth/user', { token })

  const getCategories = () => api.get('/api/categories')
  const addCategory = (name) => api.post('/api/categories', name)

  const getSettings = (user) => api.get(`/api/settings/${user._id}`)
  const editSettings = (user, settings) => api.put(`api/settings/${user._id}`, settings)

  const getInterviews = () => api.get('/api/interviews')

  const getQuestions = () => api.get('/api/questions')
  const addQuestion = (question) => api.post('/api/questions', question)
  const deleteQuestion = (question) => api.delete(`api/questions/${question}`)

  const addLevel = (level) => api.post('/api/questions/levels', level)
  const editLevel = (level) => api.put('/api/questions/levels', level)
  const deleteLevel = (level) => api.delete(`/api/questions/levels/${level}`)

  return {
    login,
    authenticate,
    getInterviews,
    getQuestions,
    getSettings,
    editSettings,
    getCategories,
    addCategory,
    addQuestion,
    deleteQuestion,
    addLevel,
    editLevel,
    deleteLevel
  }
}

export default {
  create
}
