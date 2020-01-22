/* @flow */
import React, {useEffect, useState} from "react"

import ProgressPie from "./ProgressPie"

export default function TableProgressPie() {
  let [index, setIndex] = useState(0)
  let values = [0, 0.25, 0.5, 0.75, 1]
  useEffect(() => {
    setTimeout(() => {
      setIndex((i) => (i + 1) % values.length)
    }, 1000)
  }, [index])

  return (
    <div className="table-progress-pie">
      <ProgressPie percent={values[index]} />
    </div>
  )
}
