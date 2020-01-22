/* @flow */
import {useSpring, animated} from "react-spring"
import React from "react"

type Props = {percent: number}

export default function ProgressPie({percent}: Props) {
  let r = 50
  let track = 15
  let full = 2 * Math.PI * r

  let props = useSpring({
    offset: full - full * percent
  })

  return (
    <div className="progress-pie">
      <animated.svg viewBox="0 0 200 200" strokeDashoffset={props.offset}>
        <circle
          className="track"
          r={r * 2 - track / 2}
          cx="100"
          cy="100"
          fill="none"
          strokeWidth={track}
        />
        <circle
          className="fill"
          r={r}
          cx="100"
          cy="100"
          fill="none"
          stroke="#f7fb17"
          strokeWidth={r * 2}
          strokeDasharray={full}
        />
      </animated.svg>
    </div>
  )
}
