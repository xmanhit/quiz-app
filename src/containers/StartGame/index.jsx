import React from 'react'

import { ACTIONS } from '../../config'

const StartGame = ({ dispatch }) => {
  return (
    <div className="min-h-screen bg-indigo-300">
      <div className="container mx-auto pt-16 text-center">
        <div className="grid grid-col-12">
          <div className="col-span-12">
            <h1 className="text-5xl text-white font-bold mb-6">
              Welcome to React Quiz Game!
            </h1>
          </div>
          <div className="col-span-12">
            <button
              className="flex items-center 
			justify-center py-3 px-6 text-lg 
			font-bold  rounded-lg
			shadow-md bg-green-300 hover:bg-green-500 hover:text-white mx-auto px-16 undefined"
              onClick={() =>
                dispatch({
                  type: 'StartGame',
                  pageName: ACTIONS.IN_GAME,
                  isPlaying: true,
                })
              }
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartGame
