/* @flow */
import {animated, useSpring} from "react-spring"
import React from "react"
import classNames from "classnames"

import CloseButton from "../CloseButton"
import RampLeft from "../../icons/ramp-left.svg"
import RampRight from "../../icons/ramp-right.svg"
import TableProgressPie from "../TableProgressPie"

type Props = {
  title: string,
  removeTab: Function,
  active: boolean,
  loading: boolean
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
          <TableProgressPie />
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
