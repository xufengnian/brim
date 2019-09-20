/* @flow */

import {type Store as ReduxStore} from "redux"

import type {BackendState} from "../backend"
import type {Boomd} from "./reducers/boomd"
import type {ClustersState} from "./clusters/types"
import type {ColumnsState} from "./columns/types"
import type {ErrorsState} from "./errors"
import type {Investigation} from "./reducers/investigation"
import type {LogDetails} from "./reducers/logDetails"
import type {ModalState} from "../modal/types"
import type {SearchBar} from "./reducers/searchBar"
import type {SearchHistory} from "./reducers/searchHistory"
import type {SearchesState} from "./searches/types"
import type {Spaces} from "./reducers/spaces"
import type {TimeWindow} from "./reducers/timeWindow"
import type {View} from "./reducers/view"
import type {ViewerState} from "./viewer/types"
import BoomClient from "../BoomClient"

export type GetState = () => State
export type Thunk = (Dispatch, GetState, BoomClient) => any
export type Dispatch = Function
export type Action = Object
export type DispatchProps = {|dispatch: Dispatch|}
export type Store = ReduxStore<State, *>

export type State = {
  backend: BackendState,
  clusters: ClustersState,
  errors: ErrorsState,
  columns: ColumnsState,
  viewer: ViewerState,
  searches: SearchesState,
  searchBar: SearchBar,
  timeWindow: TimeWindow,
  spaces: Spaces,
  boomd: Boomd,
  searchHistory: SearchHistory,
  logDetails: LogDetails,
  view: View,
  investigation: Investigation,
  modal: ModalState
}
