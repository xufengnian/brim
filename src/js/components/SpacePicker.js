/* @flow */
import {useDispatch, useSelector} from "react-redux"
import React, {useEffect, useState} from "react"

import {initSpace} from "../flows/initSpace"
import {reactElementProps} from "../test/integration"
import {refreshSpaces} from "../flows/space/thunks"
import MenuBarButton from "./MenuBarButton"
import PopMenuPointy from "./PopMenu/PopMenuPointy"
import Spaces from "../state/Spaces"
import Tab from "../state/Tab"

export default function SpacePicker() {
  let currentSpace = useSelector(Tab.spaceName) || "No spaces"
  let [space, setSpace] = useState(currentSpace)
  let clusterId = useSelector(Tab.clusterId)
  let spaces = useSelector(Spaces.names(clusterId))
  let dispatch = useDispatch()

  useEffect(() => {
    setSpace(currentSpace)
  }, [currentSpace])

  function onSpaceChange(val) {
    setSpace(val)
    dispatch(initSpace(val))
  }

  let template = spaces.map((space) => ({
    label: space,
    click: () => onSpaceChange(space)
  }))

  if (template.length === 0)
    template = [{label: "No spaces in this cluster", disabled: true}]

  return (
    <PopMenuPointy
      template={template}
      position="bottom center"
      {...reactElementProps("spacesMenu")}
    >
      <MenuBarButton
        {...reactElementProps("spaces_button")}
        dropdown
        onClick={() => dispatch(refreshSpaces())}
      >
        {space}
      </MenuBarButton>
    </PopMenuPointy>
  )
}
