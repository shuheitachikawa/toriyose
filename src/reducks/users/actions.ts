// Actionsは、stateにユーザーからデータを渡すためのもの。
// Actionsの役割は、あくまでデータを渡す役割だけ。
// データをどのように扱いStateをどのように変更するかは、reducersの役割。

export const SIGN_IN = "SIGN_IN"; 
// ↑reducersでimportする、依頼の種類
// どのActionsから来たのか判別するため

export const signInAction = (userState: any) => {
  return {
    type: "SIGN_IN",
    payload: {
      isSignedIn: true,
      uid: userState.uid,
      username: userState.username
    }
  }
  // ↑ Actionsは"プレーンなオブジェクトをreturnするだけ"の関数。
};


export const SIGN_OUT = "SIGN_OUT"; 
export const signOutAction = () => {
  return {
    type: "SIGN_OUT",
    payload: {
      isSignedIn: false,
      uid: "",
      username: "",
    }
  }
}