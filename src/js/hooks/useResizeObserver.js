/* @flow */
import {useLayoutEffect, useRef, useState} from "react"

export function useResizeObserver() {
  let ref = useRef<HTMLElement | null>(null)
  let [rect, setRect] = useState({width: 0, height: 0})

  function onResize(entries) {
    setRect(entries[0].contentRect)
  }

  useLayoutEffect(() => {
    let obs
    if (ref.current) {
      obs = new ResizeObserver(onResize)
      obs.observe(ref.current)
    }
    return () => obs && obs.disconnect()
  }, [ref.current])

  return {ref, rect}
}