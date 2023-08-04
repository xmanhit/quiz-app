import questions from '../data/questions.json'

export const ACTIONS = {
  START_GAME: 'StartGame',
  IN_GAME: 'InGame',
  END_GAME: 'EndGame',
  REVIEW: 'Review',
}

export const initialState = {
  currentPage: ACTIONS.START_GAME,
  questions,
  userAnswers: [],
  score: 0,
  currentQuestionIndex: 0,
  isPlaying: false,
  seconds: 90,
}
