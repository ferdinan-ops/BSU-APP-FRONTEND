const express = require('express')
const {
  getQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  getQuestion,
  likeQuestion,
  saveQuestion
} = require('../controllers/question.controller')
const verifyJwt = require('../middleware/verifyJwt')
const questionRoute = express.Router()

questionRoute.get('/', verifyJwt, getQuestions)
questionRoute.get('/:questionId', verifyJwt, getQuestion)
questionRoute.post('/', verifyJwt, createQuestion)
questionRoute.put('/:questionId', verifyJwt, updateQuestion)
questionRoute.delete('/:questionId', verifyJwt, deleteQuestion)
questionRoute.post('/like/:questionId', verifyJwt, likeQuestion)
questionRoute.post('/save/:questionId', verifyJwt, saveQuestion)

module.exports = { questionRoute }
