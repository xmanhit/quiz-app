import React from 'react'

import InGame from '../InGame'

const Review = ({ dispatch, questions, currentQuestionIndex }) => {
  return (
    <InGame
      dispatch={dispatch}
      questions={questions}
      currentQuestionIndex={currentQuestionIndex}
      isReview={true}
    />
  )
}

export default Review
