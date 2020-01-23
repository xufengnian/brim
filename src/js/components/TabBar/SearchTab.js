/* @flow */
import {animated, useSpring} from "react-spring"
import {useSelector} from "react-redux"
import React from "react"
import classNames from "classnames"

import CloseButton from "../CloseButton"
import RampLeft from "../../icons/ramp-left.svg"
import RampRight from "../../icons/ramp-right.svg"
import Tab from "../../state/Tab"
import TableProgressPie from "../TableProgressPie"
import Viewer from "../../state/Viewer"
import brim from "../../brim"

type Props = {
  title: string,
  removeTab: Function,
  active: boolean,
  loading: boolean
}

function useProgress() {
  let {currentTs} = useSelector(Viewer.getStats)
  let [start, end] = useSelector(Tab.getSpan)
    .map(brim.time)
    .map((t) => t.toDate())

  let c = brim.time(currentTs).toDate()

  console.group("render")
  console.log("start", start)
  console.log("curr ", c)
  console.log("end  ", end)
  console.groupEnd()
}

const SearchTab = React.forwardRef<Props, HTMLDivElement>(function SearchTab(
  {title, active, removeTab, loading, ...rest},
  ref
) {
  let props = useSpring({
    x: loading ? 23 : 0,
    from: {x: 0}
  })
  let style = {transform: props.x.interpolate((x) => `translateX(${x}px)`)}

  return (
    <div ref={ref} {...rest} className={classNames("tab", {active})}>
      <div className="tab-content">
        <animated.p className="title" style={style}>
          {title}
        </animated.p>
        <CloseButton onClick={removeTab} />
      </div>
      <RampRight />
      <RampLeft />
    </div>
  )
})

export default SearchTab
