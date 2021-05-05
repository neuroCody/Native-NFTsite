import React, { useState } from "react"
import { Provider } from "react-redux"
import { state } from "./redux/store"
import * as Font from "expo-font"
import Main from "./components/MainComponent"
import { AppLoading } from "expo"

//Imported fonts
const getFonts = () => {
  return Font.loadAsync({
    // <p> elemnts
    "asap-regular": require("./assets/fonts/Asap-Regular.ttf"),

    // site headers
    "KoHo-regular": require("./assets/fonts/KoHo-Regular.ttf"),
    "KoHo-bold": require("./assets/fonts/KoHo-Bold.ttf"),

    // logo font
    "satisfy-regular": require("./assets/fonts/Satisfy-Regular.ttf"),
  })
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (fontsLoaded) {
    return (
      // <Provider store={state}>
      <Main />
      // </Provider>
    )
  } else {
    ///Unsure whether to wrap APPLOADING in PROVIDER
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    )
  }
}
