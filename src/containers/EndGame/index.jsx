import React from 'react'

import { ACTIONS } from '../../config'

const EndGame = ({ dispatch, score }) => {
  return (
    <div className="min-h-screen bg-indigo-300">
      <div className="grid grid-cols-12 pt-16 text-center">
        <div className="col-span-12">
          <h1 className="text-3xl text-white">
            Your score is : <span className="font-bold">{score}</span>
          </h1>
        </div>
        <div className="col-span-12">
          <div className="flex justify-center items-center gap-4">
            <button
              className="flex items-center 
			justify-center py-3 px-6 text-lg 
			font-bold  rounded-lg
			shadow-md bg-green-300 hover:bg-green-500 hover:text-white mt-5 undefined"
              onClick={() => window.location.reload()}
            >
              Try again
            </button>
            <button
              className="flex items-center 
			justify-center py-3 px-6 text-lg 
			font-bold  rounded-lg
			shadow-md bg-red-500 hover:bg-red-400 text-white mt-5 undefined"
              onClick={() =>
                dispatch({ type: 'review', pageName: ACTIONS.REVIEW })
              }
            >
              Review
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EndGame
