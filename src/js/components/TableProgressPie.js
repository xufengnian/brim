/* @flow */
import {useSelector} from "react-redux"
import React, {useEffect, useState} from "react"

import ProgressPie from "./ProgressPie"
import Tab from "../state/Tab"
import Viewer from "../state/Viewer"
import brim from "../brim"

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
