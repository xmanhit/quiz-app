import React, { useEffect, useState } from 'react'
import { ACTIONS } from '../../config'
import { countScore, secondsToHHMMSS } from '../../utils'

const CountdownTimer = ({
  dispatch,
  questions,
  seconds,
  size,
  strokeColor,
  strokeBgColor,
  strokeWidth,
  isPlaying,
  isReview,
}) => {
  const milliseconds = seconds * 1000,
    radius = size / 2,
    circumference = size * Math.PI

  const [countdown, setCountdown] = useState(milliseconds)
  const strokeDashoffset = () =>
    circumference - (countdown / milliseconds) * circumference

  useEffect(() => {
    if (isPlaying) {
      const intervalId = setInterval(() => {
        setCountdown(countdown - 10)

        if (countdown === 0) {
          setCountdown(milliseconds)
          dispatch({
            type: 'EndGame',
            pageName: ACTIONS.END_GAME,
            score: countScore(questions),
            isPlaying: false,
          })
        }
      }, 10)
      return () => clearInterval(intervalId)
    }
  }, [isPlaying, countdown])

  const textStyles = {
    fill: strokeColor,
    fontWeight: 'bold',
    fontSize: size * 0.22,
    transform: 'rotateZ(90deg)',
  }

  const countdownSizeStyles = {
    height: size,
    width: size,
  }

  const viewSeconds = (countdown / 1000).toFixed()

  return (
    <div
      style={Object.assign({}, styles.countdownContainer, countdownSizeStyles)}
    >
      <svg style={styles.svg}>
        <circle
          cx={radius}
          cy={radius}
          r={radius}
          fill={strokeBgColor}
          stroke={strokeBgColor}
          strokeWidth={strokeWidth}
        ></circle>
        <text
          x="50%"
          y="-50%"
          dominantBaseline="middle"
          textAnchor="middle"
          style={textStyles}
        >
          {isReview ? 'End!' : secondsToHHMMSS(viewSeconds)}
        </text>
        <circle
          strokeDasharray={circumference}
          strokeDashoffset={isPlaying ? strokeDashoffset() : 0}
          r={radius}
          cx={radius}
          cy={radius}
          fill="none"
          strokeLinecap="round"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        ></circle>
      </svg>
    </div>
  )
}

const styles = {
  countdownContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    margin: 'auto',
  },
  svg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'visible',
    transform: 'rotateZ(-90deg)',
  },
}

export default CountdownTimer
