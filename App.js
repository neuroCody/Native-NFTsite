import React, { useState } from "react"
import { Provider } from "react-redux"
import * as Font from "expo-font"
import Main from "./components/MainComponent"
import { ConfigureStore } from './redux/store';
import { AppLoading } from "expo"

const store = ConfigureStore()

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
      <Provider store={store}>
      <Main />
      </Provider>
    )
  } else {
    ///Unsure whether to wrap APPLOADING in PROVIDER
    return (
      // <Provider store={store}>
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
      // </Provider>
    )
  }
}
