// Reducersの役割
// Actionsからデータを受け取り、Stornostateをどう変更するのか決める。
// ReducersはStateの初期状態を把握しておく必要もあり、その機能を持っている

import * as Actions from "./actions"
import initialState from "../store/initialState"

// 1引数にstateの状態（なければ初期状態）, 2引数のactionはactionからのプレーンオブジェクト
export const UsersReducers = (state = initialState.users, action: any) => {
  // switchで、どのActionから依頼が来たのか識別する。
  switch(action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}