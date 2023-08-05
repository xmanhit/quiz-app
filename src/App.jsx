import { useReducer } from 'react'
import './App.css'

import { ACTIONS, initialState } from './config'

import StartGame from './containers/StartGame'
import InGame from './containers/InGame'
import EndGame from './containers/EndGame'
import Review from './containers/Review'

function reducer(state, action) {
  const { type, pageName, isPlaying, score, answer, index } = action
  const { currentQuestionIndex, questions } = state

  switch (type) {
    case 'StartGame':
      return {
        ...state,
        currentPage: pageName,
        isPlaying: isPlaying,
        startDate: new Date(),
      }
    case 'EndGame':
      return {
        ...state,
        currentPage: pageName,
        score: score,
        currentQuestionIndex: 0,
        isPlaying: isPlaying,
      }
    case 'ChooseAnswer':
      return {
        ...state,
        questions: questions.map((question, i) =>
          i === currentQuestionIndex
            ? { ...question, userAnswer: answer }
            : question,
        ),
      }
    case 'NavigateQuestion':
      return {
        ...state,
        currentQuestionIndex: index,
      }
    case 'review':
      return {
        ...state,
        currentPage: pageName,
      }
    case 'setIsPlaying':
      return {
        ...state,
        isPlaying: isPlaying,
      }
    default:
      throw new Error('Unknown action: ' + type)
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { START_GAME, IN_GAME, END_GAME, REVIEW } = ACTIONS
  const {
    currentPage,
    questions,
    currentQuestionIndex,
    isPlaying,
    seconds,
    startDate,
  } = state

  const pageComponent = (() => {
    switch (currentPage) {
      case START_GAME:
        return <StartGame dispatch={dispatch} />
      case IN_GAME:
        return (
          <InGame
            dispatch={dispatch}
            questions={questions}
            currentQuestionIndex={currentQuestionIndex}
            isPlaying={isPlaying}
            seconds={seconds}
            startDate={startDate}
          />
        )
      case END_GAME:
        return <EndGame dispatch={dispatch} score={state.score} />
      case REVIEW:
        return (
          <Review
            dispatch={dispatch}
            questions={questions}
            currentQuestionIndex={currentQuestionIndex}
          />
        )

      default:
        return <p>Not a valid page {currentPage}</p>
    }
  })()

  return pageComponent
}

export default App
